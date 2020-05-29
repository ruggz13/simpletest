setup = function (event) {
  console.log("in setup", event);

  let freeTextInputElement = document.getElementById("textToCode");
  freeTextInputElement.addEventListener("input", updateCode);
  let codedTextInputElement = document.getElementById("textToDecode");
  codedTextInputElement.addEventListener("input", decode);
};

updateCode = function (event) {
  let text = event.target.value;
  console.log("...", text);
  let xx = text
    .split("")
    .map((c) => c.charCodeAt(0) - "a".charCodeAt(0) + 1)
    .reduce((a, b) => a + " " + b, "");
  console.log(xx);
  document.getElementById("codedRes").innerText = xx;
};

decode = function (event) {
  let text = event.target.value;
  let xx = text
    .split(" ")
    .map((c) => String.fromCharCode(parseInt(c) + 96))
    .reduce((a, b) => a + b);
  document.getElementById("decodedRes").innerText = xx;
};
window.onload = setup;
