//const questionRE = /\[([A-Z]+[\w]*)\](.*)$/;
const questionRE = /(.$)/;

exports.makeHTML = function (buffer) {
  text = buffer.toString();
  text.match(questionRE).forEach((x) => {
    console.log(x);
  });

  //  console.log(text);
};
