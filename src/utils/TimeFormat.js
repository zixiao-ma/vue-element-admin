export function formatTime (time, typeTime, splitLine) {
  if (!time) return console.error('Please enter the time')
  const date = new Date(time);
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dated = date.getDate();
  const day = date.getDay();
  const timeAll = year + '年' + month + '月' + dated + '日 ' + week[day];

  function getTimer (now, splitLine) {
    const time = new Date(now);
    let hour = time.getHours();
    hour = hour < 10 ? '0' + hour : hour
    let minute = time.getMinutes();
    minute = minute < 10 ? '0' + minute : minute
    let second = time.getSeconds();
    second = second < 10 ? '0' + second : second
    if (splitLine) {
      return hour + splitLine + minute + splitLine + second
    }
    return hour + ':' + minute + ':' + second
  }

  if (typeTime === 'date') {
    if (splitLine) {
      return year + splitLine + month + splitLine + dated
    }
    return year + '年' + month + '月' + dated + '日'
  } else if (typeTime === 'time') {
    return getTimer(time, splitLine)
  } else {
    return timeAll + getTimer()
  }
}
