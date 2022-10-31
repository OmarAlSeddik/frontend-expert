const createDom = (root) => {
  const node = document.createElement(root.type);
  if (root.attributes != null) {
    for (const [attribute, value] of Object.entries(root.attributes)) {
      node.setAttribute(attribute, value);
    }
  }
  if (root.children != null) {
    for (const child of root.children) {
      node.append(typeof child === "string" ? child : createDom(child));
    }
  }
  return node;
};
