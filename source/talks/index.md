---
title: 微语
date: 2025-08-18 19:48:57
type: talks
cover: https://img.314926.xyz/images/2025/08/08/cover16.webp
---
<!-- 1. 引入样式 -->
<link rel="stylesheet" href="https://gcore.jsdelivr.net/gh/MSCMDD/Qexo-Talks@main/Stellar/qexo_talk.css" />

<!-- 2. 占位节点 -->
<div id="qexot" class="tag-plugin timeline"></div>

<!-- 3. 异步加载脚本并执行 -->
<script>
(function () {
    /* 创建 <script> 标签，异步加载 qexo_talk.js */
    const script = document.createElement('script');
    script.src = 'https://gcore.jsdelivr.net/gh/MSCMDD/Qexo-Talks@main/Stellar/qexo_talk.js';
    script.async = true;
    script.onload = run;          // 加载完成后立即执行一次
    document.head.appendChild(script);

    /* 首次执行 + PJAX 导航后重新执行 */
    function run() {
        /* 参数依次是：节点 id、Qexo 域名、每次加载条数 */
        showQexoTalks('qexot', 'https://qexo.kemeow.top', 5);
    }

    /* 支持 PJAX（如 Butterfly、Volantis 等主题） */
    document.addEventListener('pjax:complete', run);
})();
</script>