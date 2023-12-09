const MicroModal = require('micromodal');
const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone');
const { setDefaultTz, formartTimeZone } = require('./dayjs.js');
dayjs.extend(timezone);

const dropDownMenu = document.querySelector('#dropDownMenu');
const dropDownBtn = document.querySelector('#dropDownBtn');
const svgArrowDown = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>`;
const defaultChangeTzText = 'Pick a timezone' + svgArrowDown;

// Button on top of clock with the time zone on the left
const changeTzBtn = document.querySelector('#changeTz');
changeTzBtn.addEventListener('click', () => {
    MicroModal.show('modal-1');
    dropDownBtn.innerHTML = defaultChangeTzText;
});

// Change time zone button
dropDownBtn.addEventListener('click', closeDropDownMenu)

// Apply button
const applyTzBtn = document.querySelector('#applyBtn');
applyTzBtn.addEventListener('click', () => {
    const tzChoosen = dropDownBtn.innerText;

    if(tzChoosen != 'Pick a timezone'){
        dayjs.tz.setDefault(tzChoosen);
        const timeZoneHtml = document.querySelector('#timeZone');
        timeZoneHtml.textContent = formartTimeZone(tzChoosen);
    }

    if(!dropDownMenu.classList.contains('hidden')){
        dropDownMenu.classList.add('hidden');
    }
    MicroModal.close('modal-1');
})

function closeDropDownMenu() {
    dropDownMenu.classList.toggle('hidden');
}

module.exports = closeDropDownMenu;