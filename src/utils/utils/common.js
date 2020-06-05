// 防抖函数时间戳版
export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

// 隐藏手机号码中间四位
export function hiddenMobile (str) {
  const keyStartIndex = str.indexOf('1')
  let relationStr = keyStartIndex !== 0 ? str.substring(0, keyStartIndex) : ''
  return str ? relationStr + str.substring(keyStartIndex, keyStartIndex + 3) + '****' + str.substring((keyStartIndex + 7)) : str
}

// js 返回随机颜色
export function randomColor () {
  function random (a, b) {
    return Math.round(Math.random() * (a - b) + b);
  }
  var str = ""
  for (var i = 0; i < 6; i++) {
    var num = random(0, 15)
    var res = num.toString(16)
    str += res
  }
  return "#" + str
}

