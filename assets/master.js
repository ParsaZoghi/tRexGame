function start() {
    const tRex = document.getElementById('tRex')
    const cactus = document.getElementById('cactus')
    const btn = document.getElementById('start')
    const scoreBoard = document.querySelector('main>div>span')

    let cactusLeft = 0
    let score = 0

    btn.disabled = true
    tRex.classList.add('shake')
    cactus.classList.add('cactusAnime1')

    document.querySelector('main').addEventListener('click', () => {
        if (tRex.classList != 'jump') {
            tRex.classList.add('jump')

            setTimeout(() => {
                tRex.classList.remove('jump')
            }, 750);
        }
    })

    const death1 = setInterval(() => {
        cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

        if (cactusLeft < 70 && cactusLeft > 35 && parseInt(window.getComputedStyle(tRex).getPropertyValue('top')) >= 175) {
            alert('GAME OVER!')
            btn.disabled = false
            tRex.classList.remove('shake')
            cactus.classList.remove('cactusAnime1')
            scoreBoard.innerHTML = 0
            score = 0
            clearInterval(death1)
        } else {
            scoreBoard.innerHTML = parseInt((score++) / 100)
        }
    }, 10)

    // const stage2 = setInterval(() => {
    //     if (parseInt((score) / 100) > 5) {
    //         // clearInterval(death1)
    //         cactus.classList.remove('cactusAnime1')
    //         cactus.classList.add('cactusAnime2')

    //         const death2 = setInterval(() => {
    //             if (cactusLeft < 70 && cactusLeft > 35 && parseInt(window.getComputedStyle(tRex).getPropertyValue('top')) >= 175) {
    //                 alert('GAME OVER!')
    //                 btn.disabled = false
    //                 tRex.classList.remove('shake')
    //                 cactus.classList.remove('cactusAnime2')
    //                 scoreBoard.innerHTML = 0
    //                 score = 0
    //                 clearInterval(death2)
    //             } else {
    //                 scoreBoard.innerHTML = parseInt((score++) / 100)
    //             }
    //         }, 9)
    //         clearInterval(stage2)
    //     }
    // }, 9);

    // if (parseInt((score) / 100) == 10) {
    //     clearInterval(death2)
    //     cactus.classList.remove('cactusAnime2')
    //     cactus.classList.add('cactusAnime3')

    //     const death3 = setInterval(() => {
    //         if (cactusLeft < 70 && cactusLeft > 35 && parseInt(window.getComputedStyle(tRex).getPropertyValue('top')) >= 175) {
    //             alert('GAME OVER!')
    //             btn.disabled = false
    //             tRex.classList.remove('shake')
    //             cactus.classList.remove('cactusAnime3')
    //             scoreBoard.innerHTML = 0
    //             score = 0
    //             clearInterval(death3)
    //         } else {
    //             scoreBoard.innerHTML = parseInt((score++) / 100)
    //         }
    //     }, .5)
    // }
}

