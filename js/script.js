// const re = /^([a-z0-9]{2}-){5}[a-z0-9]{2}$/gi;
// const mac = "45-67-89-AB-12-CD";
// console.log(re.test(mac));


function duplicateEncode(word) {
  return [...word.toLowerCase()].map((e, i, a) => a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")").join("")
}

<<<<<<< HEAD
console.log(formatDuration(25456789));


function brightest(colors) {
  const getMax = (s) => Math.max(...s.match(/[A-F0-9]{2}/gi).map(e => parseInt(e, 16)));
  return colors.reduce((r, e, i, a) => {
      r = getMax(e) > r ? i : r;
      return r;
  }, 0);
  // return colors.map(e => [e, Math.max(...e.match(/[A-F0-9]{2}/gi).map(e => parseInt(e, 16)))]);
}

console.log(brightest(["#A010F0", "#100ac0", "#001010"]));
=======
console.log(duplicateEncode("RecedE"));
>>>>>>> da68b8fef116c37d8effb0c4aaf966d71cf141c2
