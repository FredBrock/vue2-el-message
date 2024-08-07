import Vue from "vue";
import Main from "./main.vue";

let instance;
let MessageConstructor = Vue.extend(Main);
const Message = function (options = {}) {
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }
  instance = new MessageConstructor({
    data: options,
  });

  instance.$mount();
  document.body.appendChild(instance.$el);
};
export default Message;
