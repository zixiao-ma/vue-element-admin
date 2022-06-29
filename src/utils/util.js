function DeepCopy (obj) {
  const newObj = obj instanceof Array ? [] : {}
  for (const item in obj) {
    const temple = typeof obj[item] === 'object' ? DeepCopy(obj[item]) : obj[item];
    newObj[item] = temple
  }
  return newObj
}

export default {
  DeepCopy
}
