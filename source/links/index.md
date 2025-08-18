---
title: 友情链接
date: 2025-07-13 21:16:15
banner: true
type: links
data: links
---

## Qexo 友链信息 && 申请友链

<!-- 1. 友链容器 -->
{% raw %}
<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://registry.npmmirror.com/qexo-static/1.6.0/files/hexo/friends.js"></script>
<script>document.addEventListener('pjax:complete', function () {if(document.querySelector("#qexo-friends")){loadQexoFriends("qexo-friends", "https://qexo.kemeow.top")}});loadQexoFriends("qexo-friends", "https://qexo.kemeow.top")</script>
{% endraw %}

{% raw %}
<!-- 1. 引入样式（可选，如果你需要官方默认皮肤） -->
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css" />

<!-- 2. 占位节点 -->
<div id="friends-api"></div>

<!-- 3. 异步加载脚本并执行 -->
<script>
(function () {
    /* 创建 <script> 标签，异步加载 friends-api.js */
    const script = document.createElement('script');
    script.src = '/js/custom.js';
    script.async = true;
    script.onload = run;          // 加载完成后立即执行一次
    document.head.appendChild(script);

    /* 首次执行 + PJAX 导航后重新执行 */
    function run() {
        /* 第二个参数换成你的 Qexo 域名，第三个参数是 reCaptcha 密钥，没有就留空 */
        qexo_friend_api('friends-api', 'https://qexo.kemeow.top', '');
    }

    /* 支持 PJAX（如 Butterfly、Volantis 等主题） */
    document.addEventListener('pjax:complete', run);
})();
</script>
{% endraw %}
---

## 友情链接

申请友链详情见[仓库](https://github.com/kemiaofxjun/Friends)

我的友链信息：

```yaml
title: 喵落阁
url: https://myboke.kemeow.top
avatar: https://img.314926.xyz/images/2025/08/09/kemiaofxjun.webp
description: 愿你看清一切真相后，依旧热爱你的家人和朋友。
```