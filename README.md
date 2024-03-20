# FakeOAI

> [!IMPORTANT] > `FakeOAI` 是一个可以让你本地化部署属于你自己的 ChatGPT 官网镜像服务，并且保持与官网一样的体验。

## 镜像服务

登录方式：

- 使用自己的 `OpenAI` 账号密码进行登录
- 使用 `fk-token` 进行登录

功能的支持包括但不限于以下：

- 第一时间体验 OpenAI 的功能，与 OpenAI 官网保持一致的体验
- 对话隔离，他人无法查看你的对话内容，保护您的隐私
- `GPTs隔离`，他人无法查看你创建的 GPTs
- 支持 `ChatGPT` 插件
- 支持 `GPTs` 商店
- 支持文件、照片、数据等分析
- 支持联网搜索对话
- **支持自定义网站提供者等信息**，默认为 `FakeOAI` 的项目信息

### 准备

在服务器或者本地的命令行中执行以下脚本，进行调用凭证的【IP 授权】

```sh
curl https://api.fakeoai.com/license/authorize/{公众服务号获取的凭证}
```

### 安装

> 确保至少 `python>=3.7` 以上的环境

```sh
git clone https://github.com/FakeOAI/deploy.git
pip3 install -r requirements.txt
```

### 本地运行

- 编辑修改 `.env` 环境变量文件

  ```
  LICENSE=你的调用凭证
  MANAGER=网站提供者
  FILE_PROXY=图片文件代理地址
  SOCIAL_LINK=提供者的社交链接🔗
  NAVIGATE_LINK_LABEL=链接显示的文字
  ```

- 启动

  - 以 `python` 脚本启动

    ```sh
    python3 launch.py
    ```

  - 以 `uvicorn` 服务器启动

    ```sh
    uvicorn launch:app --reload
    ```

    执行完后浏览器运行 `http://localhost:8000`

### Docker 运行

- 编辑修改 `docker-compose.yaml` 文件中的环境变量
  ```yaml
  version: "3"
  services:
    fakeoai:
      build: .
      environment:
        LICENSE: 你的调用凭证
        MANAGER: FakeOAI
        FILE_PROXY: https://files.oaiusercontent.com
        SOCIAL_LINK: https://github.com/FakeOAI/deploy
        NAVIGATE_LINK_LABEL: About FakeOAI
      restart: always
  ```
- 执行如下脚本

  ```sh
  docker-compose up -d
  ```

  执行完后浏览器运行 `http://localhost:8000`

## 接口服务

> 代理域名：`https://api.fakeoai.com`
>
> 本代理服务除**License 服务**外，所有接口都需要在请求头 `X-License` 中携带调用凭证 `license_id`
>
> `license_id` 请在**微信公众服务号**【FakeOAI】的**菜单**中获取
>
> `*` 代表任意存在的接口**URL**

### ChatGPT 官网接口代理

> 本代理服务除后缀为 `conversation` 的接口有使用限制外，其余接口均直接转发到官网
>
> 请求头 `Authorization` 可以传 `accessToken` 和 `fk-token`，传 `fk-token` 会自动处理用户层级的数据隔离
>
> 本代理服务已经对所有域名为 `https://files.oaiusercontent.com` 的图片以及文件转发到 `/files/*` 路径后

- `/backend-api/*`
- `/public-api/*`
- `/api/*`

### OpenAI API 接口代理

> `chat2api` 接口 coming soon...

- `/v1/*`

### Auth 服务接口

- `GET /auth/login`: 快捷获取 accessToken
- `POST /auth/login`: 官方登录接口

  - 请求类型：`application/x-www-form-urlencoded`
  - 请求参数：

    | 参数名称    | 类型   | 必填 | 描述        | 默认值 | 约束                   |
    | ----------- | ------ | ---- | ----------- | ------ | ---------------------- |
    | username    | string | 是   | OpenAI 账号 | -      | 非空                   |
    | password    | string | 是   | OpenAI 密码 | -      | 非空                   |
    | arkoseToken | string | 是   | arkoseToken | -      | 非空，放请求 cookie 中 |

  - 请求示例：
    ```sh
    curl 'https://api.fakeoai.com/auth/login' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -H 'Cookie: arkoseToken=xxxxxxxxx.xxxxxxxxx|r=us-east-1|meta=3|metabgclr=transparent|metaiconclr=%23757575|guitextcolor=%23000000|pk=0A1D34FC-659D-4E23-B17B-694DCFCF6A6C|at=40|sup=1|rid=8|ag=101|cdn_url=https%3A%2F%2Ftcr9i.openai.com%2Fcdn%2Ffc|lurl=https%3A%2F%2Faudio-us-east-1.arkoselabs.com|surl=https%3A%2F%2Ftcr9i.openai.com|smurl=https%3A%2F%2Ftcr9i.openai.com%2Fcdn%2Ffc%2Fassets%2Fstyle-manager' \
        --data-raw 'username=xxxxx&password=xxxxx'
    ```
  - 返回结果：与 `https://chat.openai.com/api/auth/session` 保持一致

- `GET /auth/session`: 使用 `session_token` 换取 `access_token` 以及账户信息

  > `session_token` 请自行在浏览器的 cookie 中获取名为 `__Secure-next-auth.session-token` 的值
  >
  > `session_token` 一旦在网页中点击退出登录，就会请求官方退出登录的接口，随之 `session_token` 就会失效，所以想不失效又要退出重新登录的话，请直接清空 cookie 再登录，这样就可以跳过退出登录的官方接口请求
  >
  > 想要获取**永久**的 `access_token`, 请不断的使用接口返回新的 `sessionToken` 进行请求

  - 请求示例：`/auth/session?session_token={session_token}`
  - 返回结果：

    ```json
    {
      "user": {
        "id": "user-xxxxxx",
        "name": "xxxxxx",
        "email": "xxxxxx",
        "image": "xxxxxx",
        "picture": "xxxxxx",
        "idp": "xxxxxx",
        "iat": "xxxxxx",
        "mfa": false,
        "groups": [],
        "intercom_hash": "xxxxxx"
      },
      "expires": "xxxxxx",
      "accessToken": "xxxxxx",
      "authProvider": "auth0",
      "sessionToken": "xxxxxx"
    }
    ```

### Fk Token 服务接口

> 本服务可以实现对话的历史记录、GPTs 的使用记录、个人创建的 GPTs、对话分享以及对话存档等信息的用户隔离
>
> 使用该 token 进行登录的账号无法进行**敏感操作**，例如注销账号、更改账号测试功能等操作

- `GET /token`: 查询 token 信息

  - 请求示例：`/token?token={fk-token}`
  - 返回结果：

    ```json
    {
      "token": "fk-xxxxxx",
      "union_id": "xxxxxx",
      "email": "yuanbao@fakeoai.com",
      "name": "xxxxxx",
      "expires_in": 1710424081,
      "plus_expires_in": 0
    }
    ```

- `POST /token`: 注册或更新 token

  - 请求类型：`application/json`
  - 请求参数：

    | 参数名称        | 类型    | 必填 | 描述                                                                                                                                                      | 默认值             | 约束                        |
    | --------------- | ------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------- |
    | union_id        | string  | 是   | token 唯一标识                                                                                                                                            | -                  | 非空                        |
    | access_token    | string  | 是   | chatgpt 的 `access_token`                                                                                                                                 | -                  | 非空，要合法的 access_token |
    | name            | string  | 否   | token 的名称，在镜像站对应用户的名称                                                                                                                      | token 的`union_id` | -                           |
    | expires_in      | integer | 否   | token 过期时间，单位秒，值为 `0` 时则保持和 `access_token` 一样                                                                                           | 0                  | 大于等于 0                  |
    | plus_expires_in | integer | 否   | 会员过期时间，单位秒，前提是 access_token 对应的账号为 plus 账号该值才会生效，值为 `0` 时则保持和当前账号一致的过期时间，值为 `-1` 时则禁用会员的所有功能 | 0                  | 大于等于-1                  |
    | is_public_email | boolean | 否   | 是否公开账号的邮箱，默认为 `false`，邮箱默认值为：`yuanbao@fakeoai.com`                                                                                   | False              | -                           |

  - 返回结果：

    ```json
    {
      "token": "fk-xxxxxx",
      "union_id": "xxxxxx",
      "email": "yuanbao@fakeoai.com",
      "name": "xxxxxx",
      "expires_in": 1710424081,
      "plus_expires_in": 0
    }
    ```

- `DELETE /token`: 吊销 token

  - 请求示例：`/token?token={fk-token}`
  - 返回结果：

    ```json
    { "detail": "success" }
    ```

### License 服务接口

- `GET /license/authorize/{license_id}`: 授权调用凭证

  - 请求示例：`/license/authorize/{license_id}`
  - 返回结果：

    ```json
    {
      "message": "授权成功",
      "authorize_ip": "xx.xx.xx.xx"
    }
    ```

- `GET /license/info/{license_id}`: 查询凭证信息

  - 请求示例：`/license/info/{license_id}`
  - 返回结果：

    ```json
    {
      "authorize_ip": "xx.xx.xx.xx",
      "usage": "xxxx"
    }
    ```

## 问题反馈

这里是 TG 群聊和 QQ 群聊，在里面可以咨询任何使用过程中遇到的问题

<img src="https://github.com/FakeOAI/deploy/assets/89441249/9e759a50-95c5-4ac9-bbe1-0ffb115a7e2a" width="30%" />

<img src="https://github.com/FakeOAI/deploy/assets/89441249/b5ca86f2-6999-478d-bdcc-af1c49659670" width="30%" />

## 贡献者们

> 感谢这个项目的贡献者
>
> ![contrib](https://contrib.rocks/image?repo=fakeoai/deploy)
>
> 感谢 [xyhelper](https://github.com/xyhelper) 提供的 `arkoselabs` 免费的代理服务

## Star 历史

![Star History Chart](https://api.star-history.com/svg?repos=fakeoai/deploy&type=Date)
