// Qexo的说说跳过pjax
/* 初始化 Qexo-Talks */
function initQexo() {
  /* 如果之前已经加载过 qexo_talk.js，重新执行即可，不用重复创建 script 标签 */
  if (window.showQexoTalks) {
    /* 清空旧数据，重新渲染 */
    document.getElementById('qexot').innerHTML = '';
    /* page 重置为 1，再拉一次 */
    window.talk_page = 1;
    window.qexo_talks = [];
    showQexoTalks('qexot', 'https://qexo.kemeow.top', 5);
    return;
  }

  /* 第一次进入该页面：动态插外链脚本 */
  const s = document.createElement('script');
  s.src = 'https://gcore.jsdelivr.net/gh/MSCMDD/Qexo-Talks@main/Stellar/qexo_talk.js';
  s.onload = function () {
    /* 脚本加载完成后再执行初始化 */
    showQexoTalks('qexot', 'https://qexo.kemeow.top', 5);
  };
  document.head.appendChild(s);
}

/* pjax 完成时重新初始化 */
document.addEventListener('pjax:end', initQexo);

/* 首屏（非 pjax）也跑一次 */
initQexo();
initQexo();