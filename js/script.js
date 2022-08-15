$(window).scroll(function () {
    let wScroll = $(this).scrollTop()
    console.log(wScroll);
    $('.container1').css({
        'transform': 'translate(0px,-' + wScroll / 100 + '%)'

    })
    $('h1').css({
        'transform': 'translate(0px,-' + wScroll / 10 + '%)'
    })

    $('h2').css({
        'transform': 'translate(0px,-' + wScroll / 3 + '%)'
    })
    $('.about').css({
        'transform': 'translate(0px,-' + wScroll / 25 + '%)'
    })
    $('.trailer').css({
        'transform': 'translate(0px,-' + wScroll / 40 + '%)'
    })
    $('.tombol').css({
        'transform': 'translate(' + wScroll / 40 + '%,0px)'
    })

    $('.tombol1').css({
        'transform': 'translate(-' + wScroll / 40 + '%,0px)'
    })
})


const tombol = document.querySelector('.tombol')
tombol.addEventListener('click', function () {
    const film = document.querySelector('.film')
    let data = 'http://127.0.0.1:5500/data/vidio/trailer_demon.mp4'
    if (film.src === data) {
        film.removeAttribute('src')
        film.setAttribute('src', ('http://127.0.0.1:5500/data/vidio/film_demon.mp4'))
        tombol.removeAttribute('class')
        tombol.setAttribute('class', 'tombol1')

    }
})
