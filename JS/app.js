let ubicacionPrincipal = window.pageYOffset;

window.addEventListener('scroll', () => {
    let ubicacionActual = window.pageYOffset;
    if (ubicacionPrincipal >= ubicacionActual) {
        document.getElementById('navegador').style.top = '0px'
    } else {
        document.getElementById('navegador').style.top = '-150px'
    }
    console.log(ubicacionPrincipal, "->", ubicacionActual);

    ubicacionPrincipal = ubicacionActual
})

window.onload = () => {
    const btnSwitch = document.querySelector(".switch")
    btnSwitch.addEventListener("click", () => {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');
    })
}
// document.querySelectorAll('.photo__ img').forEach(el => {
//     el.addEventListener('click', function (ev) {
//         ev.stopPropagation();
//         console.log('click');

//         this.parentNode.classList.add('active')
//     })
// })
// document.querySelectorAll('.photo__ img').forEach(el => {
//     el.addEventListener('click', function (ev) {
//         this.parentNode.classList.remove('active')
//     })

// })