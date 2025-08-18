---
title: 友情链接
date: 2025-07-13 21:16:15
banner: true
type: links
data: links
---

# Friend's links

<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-static@1.6.0/hexo/friends.css"/>

<script src="https://unpkg.com/qexo-static@1.6.0/hexo/friends.js"></script>
<script>loadQexoFriends("qexo-friends", "https://qexo.kemeow.top")</script>

# Apply for Apursuer's friend chain
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
            <p class="help ">Please make sure the site is accessible!</p>
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
                        <input type="checkbox" id="friend-check"/> I am not submitting nonsense information.
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" type="submit" onclick="askFriend(event)">Apply</button>
                </div>
            </div>
        </div>
    </div>
</article>
<script src="https://recaptcha.net/recaptcha/api.js?render=6LdPG6orAAAAAG7FOEa40HlG334qveRscqtdmxzl"></script>
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script>
function TestUrl(url) {
    var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp=new RegExp(Expression);
    if(objExp.test(url) != true){
        return false;
    }
    return true;
}
function askFriend (event) {
    let check = $("#friend-check").is(":checked");
    let name = $("#friend-name").val();
    let url = $("#friend-link").val();
    let image = $("#friend-icon").val();
    let des = $("#friend-des").val();
    if(!check){
        alert("Please check \"I am not submitting nonsense information\"");
        return;
    }
    if(!(name&&url&&image&&des)){
        alert("The information is incomplete! ");
        return;
    }
    if (!(TestUrl(url))){
        alert("URL format error! Need to include HTTP protocol header! ");
        return;
    }
    if (!(TestUrl(image))){
        alert("The format of the slice URL is wrong! It needs to contain the HTTP protocol header! ");
        return;
    }
    event.target.classList.add('is-loading');
    grecaptcha.ready(function() {
          grecaptcha.execute('6LdPG6orAAAAAG7FOEa40HlG334qveRscqtdmxzl', {action: 'submit'}).then(function(token) {
              $.ajax({
                type: 'get',
                cache: false,
                url: url,
                dataType: "jsonp",
                async: false,
                processData: false,
                //timeout:10000, 
                complete: function (data) {
                    if(data.status==200){
                    $.ajax({
                        type: 'POST',
                        dataType: "json",
                        data: {
                            "name": name,
                            "url": url,
                            "image": image,
                            "description": des,
                            "verify": token,
                        },
                        url: 'https://qexo.kemeow.top/pub/ask_friend/',
                        success: function (data) {
                            alert(data.msg);
                        }
                    });}
                    else{
                        alert("The URL cannot be reached!");
                    }
                    event.target.classList.remove('is-loading');
                }
          });
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