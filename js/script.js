function towelSort(array) {
    return array.map((e, i) => e = (i % 2) ? e.reverse() : e);
}

function formatDuration(seconds) {
    const totalDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const s = seconds * 1000;    
    const month = new Date(s).getUTCMonth();
    const year = new Date(s).getUTCFullYear() - 1970;
    const time = {
        year,
        day: totalDays[month] + new Date(s).getUTCDate() + Math.floor(year / 4) - !(year % 4 === 1 && month > 2),
        hour: new Date(s).getUTCHours(),
        minute: new Date(s).getUTCMinutes(),
        second: new Date(s).getUTCSeconds()        
    };
    
    return time;
}
  
console.log(formatDuration(253374061)); //'8 years, 12 days, 13 hours, 41 minutes and 1 second'