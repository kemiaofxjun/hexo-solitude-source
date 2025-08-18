---
title: 友情链接
date: 2025-07-13 21:16:15
banner: true
type: links
data: links
---

## Qexo 友链信息 && 申请友链

<!-- ============ 友链列表（loadQexoFriends） ============ -->
<!-- 占位节点 -->
<div id="qexo-friends"></div>

<!-- ============ 友链申请表单（qexo_friend_api） ============ -->
<!-- 占位节点 -->
<div id="friends-api"></div>

<!-- ============ 样式 ============ -->
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css" />

<!-- ============ 异步脚本加载 + 初始化 ============ -->
<script>
(function () {
    /* 1. 公共 Qexo 域名，统一维护，方便一键替换 */
    const QEXO_DOMAIN = 'https://qexo.kemeow.top';

    /* 2. 加载友链列表脚本 */
    const listScript = document.createElement('script');
    listScript.src = 'https://registry.npmmirror.com/qexo-static/1.6.0/files/hexo/friends.js';
    listScript.async = true;
    listScript.onload = initFriendsList;   // 列表脚本加载完再渲染列表
    document.head.appendChild(listScript);

    /* 3. 加载友链申请脚本 */
    const apiScript = document.createElement('script');
    apiScript.src = '/js/custom.js';
    apiScript.async = true;
    apiScript.onload = initFriendsApi;     // 表单脚本加载完再渲染表单
    document.head.appendChild(apiScript);

    /* 4. 渲染函数：友链列表 */
    function initFriendsList() {
        if (document.getElementById('qexo-friends')) {
            loadQexoFriends('qexo-friends', QEXO_DOMAIN);
        }
    }

    /* 5. 渲染函数：友链申请表单 */
    function initFriendsApi() {
        if (document.getElementById('friends-api')) {
            qexo_friend_api('friends-api', QEXO_DOMAIN, '');
        }
    }

    /* 6. PJAX 完成后重新渲染（两个模块互不干扰） */
    document.addEventListener('pjax:complete', function () {
        initFriendsList();
        initFriendsApi();
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