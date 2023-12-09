const closeDropDownMenu = require('./micromodal.js');
const setDefaultTz = require('./dayjs.js');

// Catalog with some time zones
const timezoneCatalog = [
    { name: setDefaultTz(), location: "Default", offset: "" },
    { name: "Pacific/Auckland", location: "New Zealand", offset: "UTC+13:00" },
    { name: "Pacific/Fiji", location: "Fiji", offset: "UTC+12:00" },
    { name: "Pacific/Norfolk", location: "Australia", offset: "UTC+12:00" },
    { name: "Australia/Sydney", location: "Australia", offset: "UTC+11:00" },
    { name: "Pacific/Guam", location: "Guam", offset: "UTC+10:00" },
    { name: "Asia/Tokyo", location: "Japan", offset: "UTC+09:00" },
    { name: "Asia/Seoul", location: "South Korea", offset: "UTC+09:00" },
    { name: "Asia/Shanghai", location: "China", offset: "UTC+08:00" },
    { name: "Asia/Singapore", location: "Singapore", offset: "UTC+08:00" },
    { name: "Asia/Bangkok", location: "Thailand", offset: "UTC+07:00" },
    { name: "Asia/Almaty", location: "Kazakhstan", offset: "UTC+06:00" },
    { name: "Asia/Karachi", location: "Pakistan", offset: "UTC+05:00" },
    { name: "Asia/Dubai", location: "United Arab Emirates", offset: "UTC+04:00" },
    { name: "Europe/Moscow", location: "Russia", offset: "UTC+03:00" },
    { name: "Africa/Nairobi", location: "Kenya", offset: "UTC+03:00" },
    { name: "Europe/Athens", location: "Greece", offset: "UTC+02:00" },
    { name: "Africa/Cairo", location: "Egypt", offset: "UTC+02:00" },
    { name: "Europe/Paris", location: "France", offset: "UTC+01:00" },
    { name: "Africa/Lagos", location: "Nigeria", offset: "UTC+01:00" },
    { name: "Africa/Casablanca", location: "Morocco", offset: "UTC+01:00" },
    { name: "Europe/London", location: "United Kingdom", offset: "UTC+00:00" },
    { name: "Atlantic/Azores", location: "Azores, Portugal", offset: "UTC-01:00" },
    { name: "America/Noronha", location: "Fernando de Noronha, Brazil", offset: "UTC-02:00" },
    { name: "America/Argentina/Cordoba", location: "Argentina", offset: "UTC-03:00" },
    { name: "America/Caracas", location: "Venezuela", offset: "UTC-04:00" },
    { name: "America/New_York", location: "United States", offset: "UTC-05:00" },
    { name: "America/Lima", location: "Peru", offset: "UTC-05:00" },
    { name: "America/Chicago", location: "United States", offset: "UTC-06:00" },
    { name: "America/Mexico_City", location: "Mexico", offset: "UTC-06:00" },
    { name: "America/Guatemala", location: "Guatemala", offset: "UTC-06:00" },
    { name: "America/Denver", location: "United States", offset: "UTC-07:00" },
    { name: "America/Phoenix", location: "United States", offset: "UTC-07:00" },
    { name: "America/Los_Angeles", location: "United States", offset: "UTC-08:00" },
    { name: "America/Anchorage", location: "Alaska, USA", offset: "UTC-09:00" },
    { name: "Pacific/Honolulu", location: "Hawaii, USA", offset: "UTC-10:00" },
    { name: "Pacific/Midway", location: "Midway Island, USA", offset: "UTC-11:00" },
];

// flex cursor-pointer border-b border-l border-white py-1 pl2 text-sm bg-neutral-900 hover:bg-neutral-950
const classTailwind = [
    'flex',
    'cursor-pointer',
    'border-b',
    'border-l',
    'boder-white',
    'py-1',
    'pl-2',
    'text-sm',
    'bg-neutral-900',
    'hover:bg-neutral-950'
];

// Create the list with all the timezones

const dropDownUl = document.querySelector('#dropDownList');

timezoneCatalog.forEach((tzCatalog) => {

    const li = document.createElement('li');
    const textInfo = `${tzCatalog.name} ${tzCatalog.location} ${tzCatalog.offset}`;
    li.textContent = textInfo;

    classTailwind.forEach((classTailwind) => {
        li.classList.add(classTailwind);
    });

    li.addEventListener('click', () => {
        let tzChosen = tzCatalog.name;
        selectChosenTz(tzChosen);
    })
    dropDownUl.appendChild(li);
});

// Set the dropdown menu with the name of timezone choosen
function selectChosenTz(tzName) {
    const dropDownBtn = document.querySelector('#dropDownBtn');
    const svgArrowDown = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>`;
    dropDownBtn.innerHTML = tzName + svgArrowDown;
    closeDropDownMenu();
}