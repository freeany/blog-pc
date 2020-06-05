import { debounce } from './utils/common'

var scale = 1 / window.devicePixelRatio  // 获取DPR
const metaViewport = document.querySelector('meta[name="viewport"]')
if (metaViewport) {
  // metaViewport.setAttribute('content', 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
}

(function (doc, win) {
  var docEl = doc.documentElement, // 获取html标签
    // 页面大小改变事件
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return;
      // 动态设置html标签字体大小，便于使用rem缩放
      let width = Math.max(clientWidth, 320)
      clientWidth > 750 ? width = Math.min(clientWidth, 750) : ''

      // 设计图的大小 / 50px  =  屏幕大小 / 当前屏的fontSize.
      let fontSize = width / 15    // 这个15是根据750/50(自定义基准值)计算得来的
      // console.log(fontSize.toFixed(2) + 'px')
      docEl.style.fontSize = fontSize.toFixed(2) + 'px'
      console.log('resize...', fontSize)
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, debounce(recalc), false)
  doc.addEventListener('DOMContentLoaded', debounce(recalc), false)
})(document, window);

const head = document.getElementsByTagName('head');
const viewport = document.createElement('meta');
/(ipad)/i.test(navigator.userAgent) && (
  head,
  viewport,
  (viewport.name = 'viewport'),
  (viewport.content = 'target-densitydpi=device-dpi, width=480px, user-scalable = no'),
  (console.log(viewport)),
  (document.querySelector('meta[name="viewport"]').parentNode.removeChild(document.querySelector('meta[name="viewport"]'))),
  head.length > 0 && head[head.length - 1].appendChild(viewport)
)