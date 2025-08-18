---
title: 友情链接
date: 2025-07-13 21:16:15
banner: true
type: links
data: links
---

## Qexo 友链信息 && 申请友链

<!-- ===== 友链列表 ===== -->
<div id="qexo-friends-list"></div>

<!-- ===== 友链申请表单 ===== -->
<div id="qexo-friends-apply"></div>

<!-- ===== 样式（通用） ===== -->
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css" />

<!-- ===== 异步加载脚本 ===== -->
<script>
(function () {
    const QEXO = 'https://qexo.kemeow.top';   // 统一域名

    /* 1. 加载列表脚本 */
    const list = document.createElement('script');
    list.src = 'https://registry.npmmirror.com/qexo-static/1.6.0/files/hexo/friends.js';
    list.async = true;
    list.onload = () => {
        if (document.getElementById('qexo-friends-list')) {
            loadQexoFriends('qexo-friends-list', QEXO);
        }
    };
    document.head.appendChild(list);

    /* 2. 加载申请表单脚本 */
    const api = document.createElement('script');
    api.src = '/js/custom.js';
    api.async = true;
    api.onload = () => {
        if (document.getElementById('qexo-friends-apply')) {
            qexo_friend_api('qexo-friends-apply', QEXO, '');
        }
    };
    document.head.appendChild(api);

    /* 3. 支持 PJAX & Turbo 等无刷新跳转 */
    document.addEventListener('pjax:complete', () => {
        if (window.loadQexoFriends && document.getElementById('qexo-friends-list'))
            loadQexoFriends('qexo-friends-list', QEXO);
        if (window.qexo_friend_api && document.getElementById('qexo-friends-apply'))
            qexo_friend_api('qexo-friends-apply', QEXO, '');
    });
})();
</script>

---

## 友情链接(同样可以)

申请友链详情见[仓库](https://github.com/kemiaofxjun/Friends)

我的友链信息：

```yaml
title: 喵落阁
url: https://myboke.kemeow.top
avatar: https://img.314926.xyz/images/2025/08/09/kemiaofxjun.webp
description: 愿你看清一切真相后，依旧热爱你的家人和朋友。
```