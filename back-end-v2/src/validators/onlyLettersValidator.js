export default {
  validator: string => (/^[a-zA-Z]+$/g).test(string),
  message: `should contains only unicode symbols in not dependent register.`
};
