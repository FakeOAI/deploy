# FakeOpenAI

> [!IMPORTANT]
> 一个通过绕过 `Cloudflare` 防御代理实现微信扫码 / 公众号登录即可体验 `ChatGPT` 的服务。
> 
> 相关链接🔗：[Fake官网地址](https://chat.fakeopenai.cn) | [原生官网地址](https://raw.fakeopenai.cn) | [服务监控地址](https://status.fakeopenai.cn)

`FakeOpenAI` 旨意为假的 `OpenAI`，但是由于它对国人使用不太友好，使用我干脆把它接入微信体系中。
大家可以关注我的公众号【元宝程序员】获取**动态码登录**，也可以点击底下的**微信扫码直接登录**，**无需科学上网**，**无需你有 ChatGPT 账号**即可体验

功能的支持包括但不限于以下：
- 第一时间体验 OpenAI 的功能，与 OpenAI 官网保持一致的体验
- 无需科学上网，微信登录即可
- 对话隔离，他人无法查看你的对话内容，保护您的隐私
- 支持 `ChatGPT` 插件
- 支持 `GPTs` 商店
- 支持文件、照片、数据等分析
- 支持联网搜索对话
- `ChatGPT3.5模型` 完全**免费无限制**的使用
- 不支持`Custom Instructions`，因为该自定义指令是官方会携带在每次对话的内置消息中，无法做到用户级别开放出来使用，所以已经用于优化自动回复中文了。

<img width="1532" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/021fd43f-649d-4cce-baa3-2e1ec79231a5">
<img width="1803" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/e60fffe0-3a26-4473-9f22-f9df79dbce4e">



## 如何订阅ChatGPT Plus会员

如果想使用GPT-4模型，直接点击订阅即可，价格为**20块/月**，在【元宝程序员】公众号上可以查询具体的到期时间。
<img width="1625" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/ed774b64-4680-4a7d-a623-4c41fdca711f">
<img width="1625" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/7bd5af66-37ca-4c6c-8d25-db15acd0cf31">
<img width="1732" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/2390a99a-ec50-4d84-8eaa-1e8b99ea1ca8">

## 你们可能的疑惑🤨

### 1. 服务是否稳定？
   
服务是通过全球各地的机房进行代理的，为此我还为这个服务配备了专属的[服务监控](https://status.fakeopenai.cn)，以备大家对服务的可靠性有一定的了解。
<img width="1336" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/17442e74-9184-4509-996f-961e38946ad4">

### 2. 代理服务、或者源代码为啥不开源？

为了防止官方维护人员及时修复代理漏洞，也为了能让服务长久的持续下去，就不公开代码了。

### 3. 能不能像 `PandoraNext` 项目一样提供对外开放代理服务的接口？

理论上是可以，但是需要开发是需要一定的时间，你们的 `Star✨` 才是我开发的动力。Star✨数量超过 `1k` 我就对外免费提供代理接口，感谢你们的支持。

### 4. GPT4模型是不是有对话次数限制的？

基于目前gpt-4的bug情况，我们对使用的**gpt-4模型**进行了修改，现阶段是**无限制的使用**gpt-4模型，如果官网维护了此bug可能就有所调整，但是 20 美刀换成 20 块人民币即可体验 GPT
4，我已经帮你们把价格打下来了，至于你们是否上车，取决于你是否真的需要 `GPT4` 模型。

如下图是两个账号同时发送请求的结果，已经超过50条了，但是还是可以继续发送的
<img width="1122" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/470a6249-1e0d-413c-b261-e637326231b3">
<img width="1055" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/2ed6b88e-8a3c-43ea-a193-903ae23abb15">

### 5. 可以支持使用自己的ChatGPT账号进行登录吗？

不可以，这也是我为啥使用想把它整合到微信体系当中，一方面最大的程度阻碍他们官方人员登录测试(他们应该没有人用微信吧😅)，另一方面因为ChatGPT使用了 `arkoselabs` 服务进行一个人机识别，一旦提供登录服务，前端就会暴露很多请求的接口，他们官方人员就是快速的修复其中的bug，这也是为啥这么快被封杀的原因。

### 6. The previous model used in this conversation is unavailable. We've switched you to the latest default model.是什么报错？

说明当前GPT4模型已经超过调用额度，自动为你切换GPT-4无限调用的模型♥
<img width="770" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/b7ae5668-2608-4395-a956-c2fca551b365">

### 7. "致敬的用户，请您稍安勿躁，这不是Bug，只是由于服务器压力过大，稍等片刻重试即可"，这是什么问题？

由于底层逻辑还是几个账户维持着你们的对话服务，如果出现此类错误请等待10-20分钟即可继续。

<img width="1363" alt="image" src="https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/7dbd7b64-7303-416c-84b1-f059c556c47a">

### 8. 很多人会问：历史记录为啥不见了?

不是不见了，是由于账号有很多人在同时聊天，第一次进页面只会加载最新的28条历史记录，这就会造成你的历史记录加载不出来

如何解决：**当你继续聊天的时候**，你会发现以前的聊天记录会 `自动加载` 出来。


## 问题反馈

这是一个TG群聊，在里面可以咨询任何使用过程中遇到的问题

![image](https://github.com/FakeOpenAI/FakeOpenAI/assets/89441249/ba8ce061-bbfa-4d73-bca5-d9b1f495155a)

## 贡献者们

> 感谢这个项目的贡献者

[![Contributors](https://contrib.rocks/image?repo=fakeopenai/fakeopenai)](https://github.com/fakeopenai/fakeopenai/graphs/contributors)

## Star历史

![Star History Chart](https://api.star-history.com/svg?repos=fakeopenai/fakeopenai&type=Date)




