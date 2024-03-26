from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    build_id: str = 'ZMiYPqm_nspElF2_Wn0k-'
    secret_key: str = 'fakeoai'
    cookie_name: str = 'next-auth.session-token'
    secure: bool = False
    api_proxy: str = 'https://free-api.fakeoai.com'
    file_proxy: str = 'https://files.oaiusercontent.com'
    manager: str = 'FakeOAI'
    social_link: str = 'https://github.com/FakeOAI/deploy'
    navigate_link_label: str = 'About FakeOAI'

    class Config:
        env_file = ".env"

c = Settings()