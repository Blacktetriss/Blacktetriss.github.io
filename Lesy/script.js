// var tl = anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 15000,
//     autoplay: false
// });

// tl

//     .add({
//         targets: '.img_art',
//         opacity: '1',
//         duration: 2000,
//         delay: 0,
//         direction: 'alternate',
//     }, '-=15000')
//     .add({
//         targets: '.img_art',
//         opacity: '0',
//         duration: 1500,
//         delay: 0,
//         direction: 'normal',
//     }, '-=10500')

//     .add({
//         targets: '.leftred',
//         opacity: '1',
//         duration: 2500,
//         delay: 0,
//         direction: 'alternate',
//     })


// document.querySelector('.play').onclick = tl.play;
// document.querySelector('.pause').onclick = tl.pause;
// document.querySelector('.restart').onclick = tl.restart;

// var seekInput = document.querySelector('.seek');
// seekInput.oninput = function () {
//     tl.seek(tl.duration * (seekInput.value / 100));
// };