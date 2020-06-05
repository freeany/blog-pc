
// 计算两个日期之间的日期
// 如 2020-03-09 2020-03-15
// return  ['2020-03-09','2020-03-10','2020-03-11'....'2020-03-15']
export function getIntervalDate (start, end) {
  const format = (time) => {
    let ymd = ''
    let mouth = (time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : ('0' + (time.getMonth() + 1))
    let day = time.getDate() >= 10 ? time.getDate() : ('0' + time.getDate())
    ymd += time.getFullYear() + '-' // 获取年份。
    ymd += mouth + '-' // 获取月份。
    ymd += day // 获取日。
    return ymd // 返回日期。
  }
  let dateArr = []
  let startArr = start.split('-')
  let endArr = end.split('-')
  let db = new Date()
  db.setUTCFullYear(startArr[0], startArr[1] - 1, startArr[2])
  let de = new Date()
  de.setUTCFullYear(endArr[0], endArr[1] - 1, endArr[2])
  let unixDb = db.getTime()
  let unixDe = de.getTime()
  let stamp
  const oneDay = 24 * 60 * 60 * 1000;
  for (stamp = unixDb; stamp <= unixDe;) {
    dateArr.push(format(new Date(parseInt(stamp))))
    stamp = stamp + oneDay
  }
  return dateArr
}

// 判断两个对象值是否有不同
export function deepEqual (x, y) {
  // 指向同一内存时
  if (x === y) {
    return true;
  } else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop]))
          return false;
      } else
        return false;
    }

    return true;
  } else
    return false;
}