const SelfCloseTag = require("../SelfCloseTag");

class Iframe extends SelfCloseTag {
  constructor(str, tagName = "iframe", options) {
    super(str, tagName, options);
  }

  beforeMergeSpace(content) {
    let { src } = this.attrs;
    if (!src) {
      src = "";
    }
    return ` [[ embed url=${src} ]]`;
  }

  exec(prevGap = "", endGap = "") {
    return super.exec(prevGap, endGap);
  }
}

module.exports = Iframe;
