const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

// set your city as the default time zone to start
let defaultTimeZone = dayjs.tz.guess();
dayjs.tz.setDefault(defaultTimeZone);

// display the default time zone on screen
getTimeZone();

// display the date, hour on screen and start the clock
writeDateOnScreen(dayjs.tz())
writeHourOnScreen(dayjs.tz())
setInterval(() => writeHourOnScreen(dayjs.tz()), 500);

function writeHourOnScreen(clockTime){
    const hourOnHtml = document.querySelector('#hour');
    hourOnHtml.textContent = getHourMinSec(clockTime);
}

function writeDateOnScreen(dateTime){
    const dateOnHtml = document.querySelector('#date');
    dateOnHtml.textContent = getDayMonthYear(dateTime);
}

function getDayMonthYear(timeTz){
    return timeTz.format('dddd, D MMM, YYYY')
}

function getHourMinSec(timeTz){
    return timeTz.format('HH:mm:ss');
}

function formartTimeZone(timeZoneInput) {
    return timeZoneInput.replace(/_/g, ' ');
}

function getTimeZone() {
    const timeZoneHtml = document.querySelector('#timeZone');
    timeZoneHtml.textContent = formartTimeZone(defaultTimeZone);
}
