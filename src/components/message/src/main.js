import Vue from "vue";
import Main from "./main.vue";
let instance;
let MessageConstructor = Vue.extend(Main);
console.log(Main);
const Message = function (options = {}) {
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }
  instance = new MessageConstructor({
    data: options,
  });

  console.log(instance.$el); // 此时是undefined。
  instance.$mount(); // 挂载 DOM
  console.log(instance.$el); // 此时挂载后才有真实dom（<div class="el-message el-message--success"  >）。
  document.body.appendChild(instance.$el);
};
export default Message;
