function loadJs(url) {
  let script = document.createElement("script");
  script.src = chrome.runtime.getURL(url);
  document.body.appendChild(script);
}

loadJs('insert.js')
