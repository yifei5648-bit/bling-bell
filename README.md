# BLING BELL — FIND YOUR PEOPLE

轻量品牌 Campaign 单页。HTML + CSS + JavaScript，无构建、无依赖、无外部 API。

## 开始使用
直接双击 index.html 即可浏览。完整结构与验收目标见 spec.md，素材对应见 content-map.md。

## 最小文件结构
```
index.html         页面内容及结构
styles.css         字体、布局、响应式、品牌颜色
script.js          滚动红线和轻量出现效果
assets/
  lost.png         01 LOST 原海报
  search.png       02 SEARCH 原海报
  found.png        03 FOUND 原海报 / Hero 摄影局部
  favicon.svg      浏览器图标
netlify.toml       静态部署配置
spec.md            产品、视觉、交互规格
content-map.md     页面结构和素材清单
README.md          使用说明
```

## 替换图片
替换 assets/lost.png、search.png、found.png，同名文件不需要修改代码。三张完整海报始终保留自带文字，避免叠加标题。Hero 通过 CSS 裁切 FOUND 下半部分，未改动原始图片；建议以后提供无字摄影：复制到 assets/hero.jpg，只修改 .hero-image 内 img 的 src，并调整 styles.css 的 .hero-image>img 的 object-position。

Social / Outdoor 缺少独立原图，目前是明确标注的占位。找到 index.html 中的 [NEED: social media mockup] 或 [NEED: outdoor mockup]，将整个 div.placeholder 替换为 `<img src="assets/social.jpg" alt="Social media campaign mockup" loading="lazy" width="1200" height="1500">` 等实际图片。不要保留错误的宽高；按新图的像素尺寸填写。建议导出 WebP/JPEG，单图尽量低于 600KB；当前 PNG 保留用户原始质量，未压缩。

## 修改文案
在 index.html 搜索文字直接修改。章节对应 id="lost" / "search" / "found"。修改标题时保留语义标签，br 表示手动换行。社交账号未验证，未添加假链接。

## 修改 Signal Line
styles.css 顶部 --line-width 是桌面线宽；手机媒体查询里是手机线宽。SVG 位于 index.html 的 svg.signal，d 属性控制路径；LOST 是两段断开的路径。script.js 的 update() 控制随滚动显示的进度。.65 控制绘制所需距离，.88 控制启动位置。原海报内印刷红线属于图片，修改 SVG 不影响它们。用户开启减少动态效果时，显示完整静态线条。

## 修改红色
styles.css 顶部 `--red:#e53935`。它影响网页文字、SVG、结束页，不能改变原海报里已有的红色。浏览器主题色在 index.html 的 theme-color，favicon 在 assets/favicon.svg。

## 部署到 Netlify
1. 解压 bling-bell-netlify.zip，得到 netlify-ready 文件夹。
2. 登录你自己的 Netlify 账号，进入手动部署入口（Netlify Drop / Deploy manually）。
3. 拖入 netlify-ready 文件夹；index.html 必须在这个文件夹根目录。
4. 这是纯静态项目，无需安装依赖或填写 build command。若从 Git 导入，publish directory 填 `.`。
5. 部署成功后复制 Netlify 实际返回的 HTTPS 地址，保存为作品集 Live Prototype URL。
6. 在确认手机端可访问后，再用这个真实地址制作 QR Code；本站没有预设或伪造公网链接。

更新：替换本地文件后重新拖入相同站点的部署区域。Netlify 账号授权、站点归属和公网地址需要在你的账号里完成；本交付包本身尚未上线。

## 视频 / 作品集演示
建议桌面 1440×900，从 Hero 缓慢向下滚动：LOST → SEARCH → FOUND，最后停留海报三联画。手机可用 390px 宽度查看纵向排版。遵循减少动态效果偏好，无自动视频、声音和登录。

## 已知边界
Hero 暂用已有 FOUND 海报局部；FOUND 素材是人群斑马线，不能宣称其为真实朋友重聚照片。Social / Outdoor 原图仍待补齐。参考总览保存在当前项目 assets/campaign-reference.png，仅用于对照，不随精简部署包发布。

## 杂志式视觉版本
参考用户提供的两张编辑式网页图，新增超大窄体报头、静态红色模糊套印、摄影与大字并列、海报局部拼贴、红色叉号批注和错位海报网格。模糊只应用于 .banner-echo 装饰文字，不应用于 Signal Line。若希望去掉套印效果，在 styles.css 最后添加 `.banner-echo{display:none}`。标题优先使用系统 Impact，未安装时回退 Arial Narrow / Arial，不加载商业字体。

完整海报仍在 .poster 中；.editorial-detail 是同一张原海报的 CSS 局部展示，没有生成新素材。新版首页的口号位于 .hero-side，图片下方保留简短品牌介绍。手机保留并列封面，故事章节改为文案在上、局部小图与完整海报在下。

本轮本地文件预览被浏览器安全策略阻止，未完成新版截图复核；可双击 index.html 后刷新查看。

## 动态红线
首页细红线以 9 秒为一个周期缓慢画出、停留、离开；修改 styles.css 的 `.hero-line.is-drawing path` 的 `9s` 可调速度。`@keyframes signal-draw` 控制阶段。故事章节红线跟随滚动并平滑追随进度，LOST 保留原有断口。原海报里的印刷红线不会改变。首页离开视口时停止循环，页面隐藏时暂停，开启减少动态效果后全部改成静态线条。

## Social × Outdoor 已接入
原来的两个占位已替换：assets/social-mockup.png 和 assets/metro-mockup.png。直接替换同名文件即可更新；更换尺寸时同步更新 index.html 图片 width / height。当前完整展示用户提供图片，不修改图内文字。图片里仍有 Editable texts / lorem 等模板文字，正式公开前建议在原设计文件中更正，再替换同名图片。Social / Outdoor 不再缺图，前文待补充说明以此更新为准。

## 加强版动态效果
当前红线线宽为桌面 3.5px / 手机 2.5px，首页循环改为 6 秒；最终覆盖规则位于 styles.css 末尾。Mockup 进入时从下方 52px（手机 32px）轻微缩放至原位；桌面悬停上移 9px、放大至 1.025，并延伸图片下方红色细线。减少动态效果偏好仍禁用位移与循环。此前 9 秒及旧线宽说明以本段为准。
