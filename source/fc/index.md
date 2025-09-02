---
title: 朋友圈
date: 2025-08-17 17:43:02
---

<div id="friend-circle-container">与主机通讯中……</div>

<script>
    if (typeof UserConfig === 'undefined') {
        var UserConfig = {
            // 你的 hexo-circle-of-friends 后端 API 地址（需先部署后端）
            private_api_url: 'https://fc-main.kemeow.top/',
            // 每次点击“加载更多”时加载的文章数量，默认 24
            page_turning_number: 24,
            // 头像加载失败时的默认图片
            error_img: 'https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/logo.png',
        }
    }
</script>

<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/imm.min.css">
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/imm.min.js"></script>