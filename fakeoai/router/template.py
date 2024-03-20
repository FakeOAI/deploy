from fastapi import APIRouter, Request, Header, Response, Depends
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates


from fakeoai.settings import c
from fakeoai.utils.proxy import normal_proxy
from fakeoai.dependencies import before_api
from fakeoai.const import examples

import json
import time

templates = Jinja2Templates('templates')

template_router = APIRouter(dependencies=[Depends(before_api)])

@template_router.get('/login', name="login")
async def login(request: Request):
    return await render(request, 'auth/login', examples=examples)

@template_router.get('/auth/login', name="auth_login") 
async def auth(request: Request):
   return templates.TemplateResponse(request, 'auth.html', {
        'manager': c.manager, 
        'social_link': c.social_link, 
   })

@template_router.post('/auth/login', name="auth_login") 
async def auth(request: Request):
    response = await normal_proxy(request)
    if response.status_code == 200:
        json_data = json.loads(response.body)
        request.session.update(json_data)
        request.state.max_age = json_data['expires'] - int(time.time())
        request.state.permanent = True
        return RedirectResponse(request.url_for('index'), 302)
    else:
        try:
            json_data = json.loads(response.body)
            error = json_data['detail']
        except Exception as e:
            error = str(e)
        return templates.TemplateResponse(request, 'auth.html', {
            'error': error,
            'manager': c.manager, 
            'social_link': c.social_link, 
        })
    
@template_router.get('/auth/token_login') 
async def token_login(request: Request, token: str):
    response = await normal_proxy(request)
    json_data = json.loads(response.body)
    if response.status_code == 200:
        request.session.update(json_data)
        request.state.max_age = json_data['expires'] - int(time.time())
        request.state.permanent = True
        return {'detail':'success'}
    else:
        return response
        

@template_router.get('/auth/logout')
def logout(request: Request):
    request.session.clear()
    return RedirectResponse(request.url_for('login'))

@template_router.get('/api/auth/session')
async def auth_session(request: Request):
    return { key: value for key, value in request.session.items()}

@template_router.get('/')
async def index(request: Request):
    return await render(request, '[[...default]]')

@template_router.get('/c/{convId}')
async def chat_conversation(request: Request, convId):
    return await render(request, '[[...default]]')

@template_router.get('/g/{gizmoId}')
async def g_id(request: Request, gizmoId):
    return await render(request, 'g/[gizmoId]')

@template_router.get('/g/{gizmoId}/c/{convId}')
async def gpt_conversation(request: Request, gizmoId: str, convId: str):
    return await render(request, 'g/[gizmoId]/c/[convId]')
    
@template_router.get('/gpts')
async def gpts(request: Request):
        return await render(request, 'gpts')
    
@template_router.get('/gpts/mine')
async def gpts_mine(request: Request):
    return await render(request, 'gpts/mine')

@template_router.get('/gpts/editor')
async def gpts_editor(request: Request):
    return await render(request, 'gpts/editor')

@template_router.get('/gpts/editor/{slug}')
async def gpts_editor_id(request: Request, slug: str):
    return await render(request, 'gpts/editor/[slug]')

@template_router.get('/chat')
def chat(request: Request):
    return RedirectResponse(request.url_for('index'))

@template_router.get('/_next/data/{url:path}')
async def next_data(request: Request, url: str, purpose = Header(None)):
    return {
        '__N_SSP': True,
        'pageProps': await get_page_props(request),
    } if request.session.get('accessToken') and purpose != 'prefetch' else Response(b'{}', headers={'X-Middleware-Skip':'1'})

@template_router.api_route('/{url:path}')
async def not_found(request: Request, url: str):
    return await render(request, '_error', statusCode=404)

def get_next_data(page: str, pageProps, query = {}):
    return {
        'props': {
            'pageProps': pageProps,
            '__N_SSP': True
        },
        'page': page,
        'query': query,
        'buildId': c.build_id,
        'assetPrefix': '',
        'isFallback': False,
        'gssp': True,
        'scriptLoader': [],
    }
    
async def get_page_props(request: Request): 
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
    if request.session.get('user'):
        props.update({
            'user': request.session.get('user'),
        })
    gizmoId = request.path_params.get('gizmoId') or request.query_params.get('gizmoId')
    if gizmoId:
        res = await normal_proxy(request, path=f"/backend-api/gizmos/{gizmoId}")
        if res.status_code == 200:
            props.update({
                'kind': 'chat_page',
                'gizmo': json.loads(res.body)
            })
    return props

async def render(request: Request, name: str, **kargs):
    white_list = ['auth/login', '_error']
    access_token = request.session.get('accessToken')
    if access_token or name in white_list:
        if name == 'auth/login' and access_token:
            return RedirectResponse(request.url_for('index'))
        pageProps = {}
        pageProps.update(await get_page_props(request))
        pageProps.update(kargs)
        return templates.TemplateResponse(request, f'{name}.html', {
            '__NEXT_DATA__': get_next_data(f'/{name}', pageProps, request.path_params),
            'manager': c.manager, 
            'social_link': c.social_link, 
            'navigate_link_label': c.navigate_link_label
        })
    else:
        pass
        return RedirectResponse(request.url_for('login'))