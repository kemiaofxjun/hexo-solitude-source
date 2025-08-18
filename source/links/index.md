---
title: 友情链接
date: 2025-07-13 21:16:15
banner: true
type: links
data: links
---
# Qexo 友链
<!-- 友链展示区域 -->
<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-static@1.6.0/hexo/friends.css"/>
<script src="https://unpkg.com/qexo-static@1.6.0/hexo/friends.js"></script>
<script>loadQexoFriends("qexo-friends", "https://qexo.kemeow.top")</script>

<!-- 友链申请表单 -->
<link rel="stylesheet" href="https://unpkg.com/apursuer-qexo-friend-links@1.0.2/apursuer-hexo-friend-links.css"/>

<article class="message is-info">
    <div class="message-header">
        Apply for friend chain
    </div>
    <div class="message-body">
        <div class="form-ask-friend">
            <div class="field">
                <label class="label">Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Your site name" id="friend-name" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-signature"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Link</label>
                <div class="control has-icons-left">
                    <input class="input" type="url" placeholder="A link to your site's homepage" id="friend-link" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-link"></i>
                    </span>
                </div>
                <p class="help">Please make sure the site is accessible!</p>
            </div>
            <div class="field">
                <label class="label">Icon</label>
                <div class="control has-icons-left">
                    <input class="input" type="url" placeholder="Your website icon (as round as possible)" id="friend-icon" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-image"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Please describe your site in one sentence." id="friend-des" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-info"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" id="friend-check"/> 
                        I am not submitting nonsense information.
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" type="submit" id="submit-btn" onclick="askFriend(event)">Apply</button>
                </div>
                <div class="control">
                    <button class="button is-light" type="reset" onclick="resetForm()">Reset</button>
                </div>
            </div>
        </div>
    </div>
</article>

<!-- 添加Font Awesome图标库 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>

<!-- 添加jQuery库 -->
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>

<!-- reCAPTCHA -->
<script src="https://recaptcha.net/recaptcha/api.js?render=6LdPG6orAAAAAG7FOEa40HlG334qveRscqtdmxzl"></script>

<script>
// 更严格的URL验证函数
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

// 更友好的错误提示
function showError(message, elementId = null) {
    alert(message);
    if(elementId) {
        $(`#${elementId}`).focus().addClass('is-danger');
    }
}

// 表单重置功能
function resetForm() {
    $("#friend-name, #friend-link, #friend-icon, #friend-des").val('');
    $("#friend-check").prop('checked', false);
    $("input").removeClass('is-danger');
}

// 主提交函数
function askFriend(event) {
    // 防止多次点击
    const submitBtn = $("#submit-btn");
    if(submitBtn.hasClass('is-loading')) return;
    
    // 获取表单值
    const name = $("#friend-name").val().trim();
    const url = $("#friend-link").val().trim();
    const image = $("#friend-icon").val().trim();
    const des = $("#friend-des").val().trim();
    const check = $("#friend-check").is(":checked");
    
    // 重置错误状态
    $("input").removeClass('is-danger');
    
    // 表单验证
    if(!check) {
        showError("Please check \"I am not submitting nonsense information\"", "friend-check");
        return;
    }
    
    if(!name) {
        showError("Site name cannot be empty", "friend-name");
        return;
    }
    
    if(!url) {
        showError("Site URL cannot be empty", "friend-link");
        return;
    }
    
    if(!image) {
        showError("Icon URL cannot be empty", "friend-icon");
        return;
    }
    
    if(!des) {
        showError("Description cannot be empty", "friend-des");
        return;
    }
    
    if(!isValidUrl(url)) {
        showError("Invalid URL format! Must include http:// or https://", "friend-link");
        return;
    }
    
    if(!isValidUrl(image)) {
        showError("Invalid icon URL format! Must include http:// or https://", "friend-icon");
        return;
    }
    
    // 设置加载状态
    submitBtn.addClass('is-loading').text('Submitting...');
    
    // 执行reCAPTCHA验证
    grecaptcha.ready(function() {
        grecaptcha.execute('6LdPG6orAAAAAG7FOEa40HlG334qveRscqtdmxzl', {action: 'submit'})
        .then(function(token) {
            // 检查网站可访问性
            $.ajax({
                type: 'HEAD',
                url: url,
                timeout: 5000 // 5秒超时
            })
            .done(function() {
                // 网站可访问，提交友链申请
                $.ajax({
                    type: 'POST',
                    url: 'https://qexo.kemeow.top/pub/ask_friend/',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        "name": name,
                        "url": url,
                        "image": image,
                        "description": des,
                        "verify": token
                    }),
                    success: function(response) {
                        alert(`✅ Success! ${response.msg || 'Your application has been submitted.'}`);
                        resetForm();
                    },
                    error: function(xhr) {
                        const errorMsg = xhr.responseJSON?.msg || 'Submission failed, please try again later';
                        alert(`❌ Error: ${errorMsg}`);
                    },
                    complete: function() {
                        submitBtn.removeClass('is-loading').text('Apply');
                    }
                });
            })
            .fail(function() {
                alert('⚠️ Your website is not accessible. Please ensure it is online and accessible.');
                submitBtn.removeClass('is-loading').text('Apply');
            });
        })
        .catch(function(error) {
            alert('⚠️ reCAPTCHA verification failed. Please try again.');
            submitBtn.removeClass('is-loading').text('Apply');
            console.error('reCAPTCHA error:', error);
        });
    });
}
</script>

## 友情链接

申请友链详情见[仓库](https://github.com/kemiaofxjun/Friends)

我的友链信息：

```yaml
title: 喵落阁
url: https://myboke.kemeow.top
avatar: https://img.314926.xyz/images/2025/08/09/kemiaofxjun.webp
description: 愿你看清一切真相后，依旧热爱你的家人和朋友。
```