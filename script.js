function createDOM(tagName) {
  const element = document.createElement(tagName);
  element.className = "item";
  return element;
}

function removeDOM(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.remove();
  }
  return element;
}

const newDiv = createDOM("div");
document.getElementById("container").appendChild(newDiv);

setTimeout(() => {
  const removedElement = removeDOM(".item");
  console.log("Usunięty element:", removedElement);
}, 3000);
