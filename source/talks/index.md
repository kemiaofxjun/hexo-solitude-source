---
title: 微语
date: 2025-08-18 19:48:57
type: talks
cover: https://img.314926.xyz/images/2025/08/08/cover16.webp
---

<head>
  <!-- ... -->
  <link rel="stylesheet" href="/qexo-talk/talk.css">
  <script src="/qexo-talk/talk.js"></script>
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <div id="my-shouts-container"></div>
  <script>
    myQexoShouts.init({
        el: "#my-shouts-container", 
        avatar: "https://img.314926.xyz/images/2025/08/13/no-background-kemiaofxjun.webp", // 你的头像
        name: "克喵爱吃卤面", // 你的名字
        limit: 10, // 加载几条
        baseURL: "https://qexo.kemeow.top", // 你的Qexo API地址
    }).catch(function(error) {
        console.error("加载过程中出现问题:", error);
    });
    </script>
</body>

