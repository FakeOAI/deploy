from flask import request, jsonify, render_template, Flask, redirect, url_for, make_response, Response, g
from dotenv import load_dotenv
from base64 import b64decode


import itsdangerous
from itsdangerous.exc import BadTimeSignature, SignatureExpired
import json
import requests
import sys
import logging
import os

load_dotenv()

class FakeOAI(Flask):
    build_id = 'GwlQF5buyZmD77LmpdJQ5'
    api_proxy = "https://api.fakeoai.com"

    def __init__(self):
        from os.path import join, abspath, dirname
        from werkzeug.middleware.proxy_fix import ProxyFix

        resource_path = abspath(join(dirname(__file__), 'flask'))
        super().__init__(__name__, static_url_path="",
            static_folder=join(resource_path, 'static'),
            template_folder=join(resource_path, 'templates'))
        
        self.logger.setLevel(logging.DEBUG)
        self.config.from_prefixed_env()
        self.init_license()
        self.init_config()

        self.wsgi_app = ProxyFix(self.wsgi_app)
        self.errorhandler(404)(self.page_not_found)
        self.before_request(self._before_request)
        self.after_request(self._after_request)

        # chat
        self.get('/')(self.index)
        self.get('/chat')(self.chat)
        self.get('/c/<conversation_id>')(self.chat_conversation)

        # gpts
        self.get('/gpts')(self.gpts)
        self.get('/gpts/mine')(self.gpts_mine)
        self.get('/gpts/editor')(self.gpts_editor)
        self.get('/gpts/editor/<slug>')(self.gpts_editor_id)
        self.get('/g/<gpt_id>/c/<conversation_id>')(self.gpt_conversation)
        self.get('/g/<gizmoId>')(self.g_id)

        # others
        self.get('/_next/data/<path:url>')(self.next_data)

    def init_license(self):
        license = self.config.get('LICENSE')
        res = requests.get(f'{self.api_proxy}/license/info/{license}')
        json_data = res.json()
        if res.ok:
            self.logger.info("=========================================")
            self.logger.info(f"欢迎使用【FakeOAI】~~~")
            self.logger.info(f"凭证剩余额度: {json_data['usage']}")
            self.logger.info(f"凭证授权的IP: {json_data['authorize_ip']}")
            self.logger.info("=========================================")
            self.license = license
        else:
            sys.exit(f"启动错误❌: {json_data['detail']}")

    def init_config(self):
        self.secret_key = self.config.get('SECRET_KEY', os.urandom(16))
        self.session_key = f'{"__Secure-" if not self.config["SESSION_COOKIE_SECURE"] else ""}next-auth.session'
        self.signer = itsdangerous.TimestampSigner(str(self.secret_key))
        self.manager = self.config.get('MANAGER')
        self.social_link = self.config.get('SOCIAL_LINK')
        self.navigate_link_label = self.config.get('NAVIGATE_LINK_LABEL')
    
    def _before_request(self):
        if self.session_key in request.cookies:
            try:
                data = self.signer.unsign(request.cookies[self.session_key].encode())
                session_info: dict = json.loads(b64decode(data))
                [g.setdefault(key, value) for key, value in session_info.items()]
            except (BadTimeSignature, SignatureExpired):
                g.accessToken = None
                pass
        else:
            g.accessToken = None

    def _after_request(self, resp: Response):
        resp.headers['X-Server'] = self.manager
        return resp
    
    def page_not_found(self, e):
        return self.render('_error', statusCode=404), 404
    
    def get_next_data(self, page: str, pageProps, query = {}):
        return {
            'props': {
                'pageProps': pageProps,
                '__N_SSP': True
            },
            'page': page,
            'query': query,
            'buildId': self.build_id,
            'assetPrefix': '',
            'isFallback': False,
            'gssp': True,
            'scriptLoader': [],
        }
    
    def get_page_props(self): 
        props = {
            'ageVerificationDeadline': None,
            'allowBrowserStorage': True,
            'canManageBrowserStorage': False,
            'geoOk': True,
            'isUserInCanPayGroup': True,
            'serviceAnnouncement': {
                'paid': {},
                'public': {},
            },
            'serviceStatus': {},
            'cfConnectingIp': '0.0.0.0',
            'serverPrimedAllowBrowserStorageValue': True,
            'showCookieConsentBanner': False,
            'userCountry': 'US',
        }
        if g.accessToken:
            props.update({'user': g.user})
        return props
    
    def render(self, name: str, **kargs):
        white_list = ['auth/login', '_error']
        if g.accessToken or name in white_list:
            if name == 'auth/login' and g.accessToken:
                return redirect(url_for('index'))
            pageProps = {}
            pageProps.update(self.get_page_props())
            pageProps.update(kargs)
            return render_template(f'{name}.html', __NEXT_DATA__=self.get_next_data(f'/{name}', pageProps, request.view_args), 
                manager=self.manager, social_link=self.social_link, navigate_link_label=self.navigate_link_label)
        else:
            return redirect('/auth/login')

    def index(self):
        return self.render('[[...default]]')
    
    def chat_conversation(self, conversation_id):
        return self.render('[[...default]]')
    
    def g_id(self, gizmoId):
        return self.render('g/[gizmoId]')
    
    def gpt_conversation(self, gpt_id, conversation_id):
        return self.render('g/[gizmoId]/c/[convId]')
    
    def gpts(self):
        return self.render('gpts')
    
    def gpts_mine(self):
        return self.render('gpts/mine')
    
    def gpts_editor(self):
        return self.render('gpts/editor')
    
    def gpts_editor_id(self, slug):
        return self.render('gpts/editor/[slug]')
    
    def chat(self):
        return redirect(url_for('index'))
        
    def next_data(self, url):
        response = make_response("{}")
        response.status_code = 200
        response.headers.add('X-Middleware-Skip', '1')
        response.headers.pop('Content-Type')
        return jsonify({
            '__N_SSP': True,
            'pageProps': self.get_page_props(),
        }) if g.accessToken and request.headers.get('Purpose') != 'prefetch' else response