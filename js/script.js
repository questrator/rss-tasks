function towelSort(array) {
    return array.map((e, i) => e = (i % 2) ? e.reverse() : e);
}

function formatDuration(seconds) {
    if (seconds === 0) return "now";
    const totalDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const s = seconds * 1000;    
    const month = new Date(s).getUTCMonth();
    const year = new Date(s).getUTCFullYear() - 1970;
    
    const time = [
        ["year", year],
        ["day", totalDays[month] + new Date(s).getUTCDate() + Math.floor(year / 4) - !(year % 4 === 1 && month > 2)],
        ["hour", new Date(s).getUTCHours()],
        ["minute", new Date(s).getUTCMinutes()],
        ["second", new Date(s).getUTCSeconds()]        
    ];
    
    const out = time.filter(e => e[1] > 0).map(e => `${e[1]} ${e[1] > 1 ? `${e[0]}s` : e[0]}`);

    return out.length > 1 ? out.slice(0, out.length - 1).join(", ") + ` and ${out[out.length - 1]}` : out[0];
}
  
console.log(formatDuration(253374061)); //'8 years, 12 days, 13 hours, 41 minutes and 1 second'

console.log(formatDuration(132030240)); //'4 years, 68 days, 3 hours and 4 minutes'
console.log(formatDuration(62)); //'1 minute and 2 seconds'
console.log(formatDuration(42)); //'42 seconds'
