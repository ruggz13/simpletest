let x = `[Q1] how many kids
|__|__|NKIDS|

<loop max=5>

[Q2,displayif=greaterThanOrEqual(NKIDS,#loop)] is your child # #loop alive?
(1) Yes
(0) No -> _CONTINUE

[Q3,,displayif=greaterThanOrEqual(NKIDS,#loop)] how old is child # #loop?
|__|__|KIDAGE|

</loop>

[DONE]
THANK YOU!!!
`;
console.log(x);
console.log("\xA9");
// convert all the newlines to (c)
let x1 = x.replace(/\n/g, "\xA9");
console.log(x1);
let loopRegex = /<loop max=(\d+)\s*>(.*?)<\/loop>/g;
let res = [...x1.matchAll(loopRegex)].map(function (x, indx) {
  return { cnt: x[1], txt: x[2], indx: indx + 1, orig: x[0] };
});
console.log(res);

let idRegex = /\[([A-Z_][A-Z0-9_#]*)[?!]?(,.*?)?\]/g;
let cleanedText = res.map(function (x) {
  let ids = [...x.txt.matchAll(idRegex)].map((y) => ({
    label: y[0],
    id: y[1],
    indx: x.indx,
  }));
  console.log(ids);
  return ids;
});

console.log(x1);
x1 = x1.replace(/\xA9/g, "\n");
console.log(x1);
