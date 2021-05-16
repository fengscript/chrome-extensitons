// Method 1
// let timer;
// function check() {
//   const resource = document.getElementById('jp_audio_0').getAttribute('src');

//   const content = document.querySelector('#layui-layer1 .layui-layer-content');

//   if (content && content.childElementCount > 0) {
//     content.innerHTML = '<a href=' + resource + '>Download</a>';
//   }
// }

// timer = setInterval(check, 1000);

// Method 3
document.querySelector('.playcz .dl').removeAttribute('onclick');

function addEvt () {
  document.querySelector('.playcz .dl').setAttribute('href', window.playurl2)
}

document.querySelector('.playcz .dl').addEventListener('click', addEvt)



