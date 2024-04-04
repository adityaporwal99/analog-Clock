//  dark mode code
let mode_btn = document.querySelector('#mode-btn');
let modeVal = document.querySelector('#mode');
let icon = document.querySelector('#icon');

const current_mode = () => {
    //  switch body mode
    document.querySelector('body').classList.toggle('dark-mode');

    //  switch analog mode
    document.querySelector('#analog-1').classList.toggle('analog-dark');
    document.querySelector('#analog-2').classList.toggle('analog-dark');

    document.querySelector('#hour-1').classList.toggle('hour-dark');
    document.querySelector('#hour-2').classList.toggle('hour-dark');

    document.querySelector('#minute-1').classList.toggle('minute-dark');
    document.querySelector('#minute-2').classList.toggle('minute-dark');

    // switch digital mode
    document.querySelector('#digi-1').classList.toggle('digi-dark');
    document.querySelector('#digi-2').classList.toggle('digi-dark');

    if (modeVal.innerHTML === 'Light') {
        modeVal.innerHTML = 'Dark';
        icon.innerHTML = 'dark_mode';
    }
    else {
        modeVal.innerHTML = 'Light';
        icon.innerHTML = 'light_mode';
    }
}

mode_btn.addEventListener('click', current_mode);


//  analog time code
let hour1 = document.querySelector('#hour-1'), hour2 = document.querySelector('#hour-2');
let minute1 = document.querySelector('#minute-1'), minute2 = document.querySelector('#minute-2');
let second1 = document.querySelector('#second-1'), second2 = document.querySelector('#second-2');

const analogTime = () => {
    //  timezone 1
    let time1 = new Date();

    let hh1 = time1.getHours();
    let mm1 = time1.getMinutes();
    let ss1 = time1.getSeconds();

    hour1.style.transform = `rotate(${30 * hh1 + mm1 / 2}deg)`;
    minute1.style.transform = `rotate(${6 * mm1}deg)`;
    second1.style.transform = `rotate(${6 * ss1}deg)`;

    //  timezone 2
    let time2 = new Date();
    time2.setUTCMinutes(time2.getUTCMinutes() - 630);

    let hh2 = time2.getHours();
    let mm2 = time2.getMinutes();
    let ss2 = time2.getSeconds();

    hour2.style.transform = `rotate(${30 * hh2 + mm2 / 2}deg)`;
    minute2.style.transform = `rotate(${6 * mm2}deg)`;
    second2.style.transform = `rotate(${6 * ss2}deg)`;
}

setInterval(analogTime, 1000);


//  digital time code
const digiTime = () => {
    document.querySelector('#digi-1').innerHTML = new Date().toLocaleTimeString();

    let chicago = new Date();
    chicago.setUTCMinutes(chicago.getUTCMinutes() - 630);
    document.querySelector('#digi-2').innerHTML = chicago.toLocaleTimeString();
}

setInterval(digiTime, 1000);
