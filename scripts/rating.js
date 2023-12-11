const radios = document.querySelectorAll('.rating__radio'),
    rate = document.querySelector('.rating'),
    number = document.querySelector('.number');
radios.length ? initRate() : console.warn('No rate');
// console.log(rate);
// rate.style.right = `${(window.innerWidth - rate.clientWidth /2 ) / 2}px`

rate.style.top = `0px`
// let itemLocalStorage = localStorage.getItem('stars') > 0 ? +localStorage.getItem('stars') : 0
let v = 0

// console.log(number.innerHTML = itemLocalStorage);

function initRate() {

    radios.forEach((radio, q) => {
        radio.addEventListener('click', () => {
            v = radio.getAttribute('value');
            toYellow(v);
        });
    });

    function toYellow(value) {
        for (let i = 0; i < radios.length; i++) {
            if (i < value) {
                radios[i].style.color = 'yellow';
            } else {

                radios[i].style.color = '';
            }
        }
        number.innerHTML = value
        // v = value
    }
}


const submit = document.querySelector('.submit');
submit.addEventListener(`click`, () => {
    // let nInnreHtnl = +number.innerHTML
    // console.log(nInnreHtnl);
    // number.innerHTML = nInnreHtnl += itemLocalStorage
    // localStorage.setItem('stars', `${v += +itemLocalStorage}`)
    radios.forEach(radio => radio.style.color = `black`)
    number.innerHTML = 0
    // console.log();
})