# BLING BELL — Digital Experience Spec

## 产品定位
服务作品集 Page 5 — DIGITAL EXPERIENCE 与视频演示。把静态 Brand Campaign 延伸为真实可访问的数字体验。品牌优先级：Brand Identity → Visual Consistency → Campaign Story → Interaction → Code。

## MVP 范围
单页、8 个章节、三张原海报、响应式和克制滚动交互。不包含电商、账户、表单、数据库、统计、声音、自动视频或复杂框架。无需后端和构建工具。

## 页面结构
|顺序|锚点|内容|布局|
|---|---|---|---|
|01|top|BLING BELL / FIND YOUR PEOPLE / 品牌介绍|大字报头 + 宽幅人群局部|
|过渡|story|In a crowd, we look for something familiar.|留白与编辑式大字|
|02|lost|01 / LOST / DON’T LOSE THE SIGNAL.|左文案、右完整海报，黑底|
|03|search|02 / SEARCH / WHERE’S YOUR CREW?|左海报、右文案，浅暖灰|
|04|found|03 / FOUND / FOUND YOU.|左文案、右海报，安静白底|
|05|campaign|LOST / SEARCH / FOUND|桌面三列，手机堆叠|
|06|applications|Social × Outdoor|不对称图位，缺图明确占位|
|07|visual-system|Line / Photography / Typography / Color|简洁分隔行|
|08|end|STAY CONNECTED. / BLING BELL|Signal Red 大字结尾|

## 视觉系统
Signal Red #E53935、墨黑 #151515、纸白 #F6F5F1。Arial / Helvetica / sans-serif，无需远程字体。大字、紧凑行距、直角图片、细分隔线；不使用发光、渐变、玻璃、粒子或科技扫描。完整海报保持用户原作配色，不强制统一滤镜。Hero 临时采用灰度裁切，CSS 不改变源文件。

## 交互
1. 原生滚动；锚点到 Campaign / 故事 / 顶部。
2. SVG pathLength=1 + stroke-dashoffset，滚动进度映射线条绘制。
3. LOST 线有真实断口；SEARCH 连续延伸；FOUND 连续连接。
4. IntersectionObserver 让图片和标题轻微上移 18px 并显现；海报 hover 放大 1.025。
5. 不使用 parallax，控制复杂度。无 JavaScript 仍可阅读；减少动态效果时静态显示。

## 技术与资源
index.html + styles.css + script.js + assets，Netlify 静态托管。首屏图优先加载，其余图片 lazy loading 并设置宽高。禁止编造品牌素材、虚假链接或朋友关系。缺少原图见 content-map.md。

## 验收
- 1440px 桌面及 390px 手机无横向溢出；手机单列。
- Hero 和三张海报清晰、文案语义完整、原海报未被覆盖。
- 断裂 / 延伸 / 连接可随滚动辨识，无 glow。
- 键盘可访问锚点、焦点可见、提供跳转主内容链接。
- 关闭 JS、开启减少动态效果都可读。
- 本地资源路径有效，不依赖 API、远程字体或后端。
- Netlify 文件包根目录有 index.html；真实 URL 以账号部署结果为准。

## 待完成的外部依赖
Social / Outdoor 独立素材、可选无字 Hero 摄影、可选真实朋友重聚图、Netlify 账号部署及真实 URL、依赖 URL 的 QR Code。

## 编辑式视觉修订
按新参考将 Hero 改为红色模糊套印报头 + 双栏摄影/口号；章节改为非对称三栏（局部图、完整海报、文案），SEARCH 反向编排；Campaign 三列使用不同起始高度。手机回到两栏图片拼贴与单列叙事。新增装饰均为 HTML/CSS，海报保持原始文件；不采用参考中的第三方摄影或商业商标。报头为静态模糊印刷效果，Signal Line 继续保持无 blur / glow。

本轮仅完成结构、资源及脚本检查；新版视觉截图复核受本地文件浏览器访问限制，尚未通过。

## 动态红线修订
首页 SVG 红线采用 9 秒绘制 / 停留 / 离开循环。章节线条根据滚动位置更新，使用与帧时间相关的缓动平滑追随。页面隐藏停止绘制，Hero 离开视口停止循环；prefers-reduced-motion 使用静态完整线条。没有发光、粒子、扫描节点或音频。

## 应用素材更新
Social 与 Metro Mockup 已替换占位，桌面双列错位、手机单列，使用原始图片比例与懒加载。仅保留无字 Hero 摄影和可选朋友重聚图等待补充。
