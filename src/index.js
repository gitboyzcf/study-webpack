// import _ from 'lodash';
import key, { printLog } from "./test";
function component() {
  const element = document.createElement("div");

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  printLog();
  console.log(key);

  return element;
}

document.body.appendChild(component());
