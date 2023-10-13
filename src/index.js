module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let t = true;
  for (i = 0; i < str.length; i++) {
    bracketsConfig.map((element) => {
      if (element[0] === element[1] && str[i] === element[0]) {
        if (stack[stack.length - 1] === element[0]) stack.pop(element[0]);
        else stack.push(element[0]);
      }
      else if (element[1] === str[i]) {
        if (stack.length === 0) t = false;
        if (stack[stack.length - 1] === element[0]) stack.pop(element[0]);
        else t = false;
      }
      else if (element[0] === str[i]) {
        stack.push(element[0]);
      }
    });
    if (!t) return false;
  }
  if (stack.length === 0) return true;
  else return false;
}
