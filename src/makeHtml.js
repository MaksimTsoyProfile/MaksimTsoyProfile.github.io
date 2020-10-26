export default (name, classA, attr, body) => {
  const html = document.createElement(name);
  classA.forEach((el) => {
    html.classList.add(el);
  });
  const attribute = Object.entries(attr);
  attribute.forEach((el) => {
    html.setAttribute(el[0], el[1]);
  });
  const text = document.createTextNode(body);
  html.append(text);
  return html;
};
