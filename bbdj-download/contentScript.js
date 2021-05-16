function loadJs(url) {
  let script = document.createElement("script");
  script.src = chrome.runtime.getURL(url);
  document.body.appendChild(script);
}

loadJs('insert.js')

// Method 2
// const resource = document.getElementById('jp_audio_0').getAttribute('src');

// document.querySelector('.playcz .dl').removeAttribute('onclick');

// document.querySelector('.playcz .dl').setAttribute('href', resource)