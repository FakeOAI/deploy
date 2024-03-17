from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    license: str
    webui: bool = False
    build_id: str = 'ZMiYPqm_nspElF2_Wn0k-'
    secret_key: str = 'fakeoai'
    cookie_name: str = 'next-auth.session-token'
    secure: bool = False
    api_proxy: str = 'https://api.fakeoai.com'
    manager: str = 'FakeOAI'
    social_link: str = 'https://github.com/FakeOAI/deploy'
    navigate_link_label: str = 'About FakeOAI'

    class Config:
        env_file = ".env"

c = Settings()