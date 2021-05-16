let timer;
function check() {
  const sorece = document.getElementById('jp_audio_0').getAttribute('src');

  const content = document.querySelector('#layui-layer1 .layui-layer-content');

  if (content && content.childElementCount > 0) {
    content.innerHTML = '<a href=' + sorece + '>Download</a>';
  }
}

timer = setInterval(check, 1000);
