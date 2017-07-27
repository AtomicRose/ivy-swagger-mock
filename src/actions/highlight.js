export default () => {
  let blocks = document.getElementsByTagName('code');
  let len = blocks.length;
  if (window.hljs) {
    for (let i = 0; i < len; i++) {
      let current = blocks[i];
      window.hljs.highlightBlock(current);
    }
  }
};