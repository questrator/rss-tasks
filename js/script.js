// const re = /^([a-z0-9]{2}-){5}[a-z0-9]{2}$/gi;
// const mac = "45-67-89-AB-12-CD";
// console.log(re.test(mac));


function duplicateEncode(word) {
  return [...word.toLowerCase()].map((e, i, a) => a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")").join("")
}

console.log(duplicateEncode("RecedE"));