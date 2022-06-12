function towelSort(array) {
    return array.map((e, i) => e = (i % 2) ? e.reverse() : e);
}

function formatDuration(seconds) {
    if (seconds === 0) return "now";
    const totalDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const s = seconds * 1000;        
    const year = new Date(s).getUTCFullYear() - 1970;
    const month = new Date(s).getUTCMonth();
    const day = new Date(s).getUTCDate() - 1;
    
    const time = [
        ["year", year],
        ["day", totalDays[month] + new Date(s).getUTCDate() - 1 + Math.floor((year - 1) / 4) + (year % 4 === 0 && month > 1)],
        ["hour", new Date(s).getUTCHours()],
        ["minute", new Date(s).getUTCMinutes()],
        ["second", new Date(s).getUTCSeconds()]        
    ];
    
    const out = time.filter(e => e[1] > 0).map(e => `${e[1]} ${e[1] > 1 ? `${e[0]}s` : e[0]}`);

    return out.length > 1 ? out.slice(0, out.length - 1).join(", ") + ` and ${out[out.length - 1]}` : out[0];
}
  
// console.log(formatDuration(253374061)); //'8 years, 12 days, 13 hours, 41 minutes and 1 second'
// console.log(formatDuration(132030240)); //'4 years, 68 days, 3 hours and 4 minutes'
// console.log(formatDuration(62)); //'1 minute and 2 seconds'
// console.log(formatDuration(42)); //'42 seconds'
// console.log(formatDuration(205851834)); //'6 years, 192 days, 13 hours, 3 minutes and 54 seconds'
// console.log(formatDuration(242062374)); //'7 years, 246 days, 15 hours, 32 minutes and 54 seconds'
// console.log(formatDuration(33243586)); //'1 year, 19 days, 18 hours, 19 minutes and 46 seconds'


function findMissingNumber(input, n) {
    const absent = [];
    let step = n;
    for (let i = 1; i <= input[input.length - 1]; i++) {        
        if (absent.length === n) return absent[n - 1];
        if (input.indexOf(i) === -1) {
            absent.push(i);
            step--;
        }
    }
    return absent[absent.length - 1] ? step : input[input.length - 1] + step;
}

// Пропущены [5, 6, 7, 8, ...], второе пропущенное число - 6:
console.log(findMissingNumber([1, 2, 3, 4], 2)); // 6.

// Пропущены [1, 5, 6, 8, 9, 10, ...], пятое пропущенное число - 9:
console.log(findMissingNumber([2, 3, 4, 7, 11], 5)); // 9

console.log(findMissingNumber([5, 10, 14], 15)); // 18