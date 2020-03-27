function Game() {

    //variable

    let Sun = $('.sun');

    let OakShadow = $('.shodow_big');
    let ElmShadow = $('.shodow_small');

    let TimeBtn = document.getElementsByClassName("btn");

    //Func

    Array.from(TimeBtn).forEach(Element => {
        Element.onclick = event => {
            document.getElementsByClassName("btn-time")[0].classList.remove("btn-time");

            event.target.classList.add("btn-time");

            let Time = Number(event.target.innerText.replace("სთ", ""));

            this.SetSun(Time);
        };
    });

    this.SetSun = function (Time) {
        switch (Time) {
            case 6:
                Sun.animate({
                    top: '28%',
                    left: '6%'
                }, 700);
                OakShadow.css({
                    transition: 'all 0.7s',
                    transform: 'rotate(0deg) translate(0, 0) skew(0deg, 0deg)'
                });
                ElmShadow.css({
                    transition: 'all 0.7s',
                    transform: 'rotate(0deg) translate(-1px, 1px) skew(0deg, 0deg)'
                });
                break;

            case 8:
                Sun.animate({
                    left: '14%',
                    top: '17%'
                }, 1000);
                OakShadow.css({
                        transition: 'all 1s',
                        transform: 'rotate(45deg) translate(35px, 15px) skew(1deg, -16deg)'
                    });
                    ElmShadow.css({
                        transition: 'all 1s',
                        transform: 'rotate(45deg) translate(28px, 17px) skew(1deg, -16deg)'
                    });
                break;

            case 10:
                Sun.animate({
                    left: '26%',
                    top: '4%'
                }, 1000);
                OakShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(71deg) translate(67px, 20px) skew(-1deg, -18deg)'
                });
                ElmShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(71deg) translate(50px, 22px) skew(-1deg, -18deg)'
                });
                break;

            case 12:
                Sun.animate({
                    left: '45%',
                    top: '-4%'
                }, 1000);
                OakShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(130deg) translate(91px, 22px) skew(-3deg, -12deg)'
                });
                ElmShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(130deg) translate(71px, 10px) skew(-3deg, -12deg)'
                });
                break;

            case 14:
                Sun.animate({
                    left: '60%',
                    top: '6%'
                }, 1000);
                OakShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(159deg) translate(136px, -50px) skew(-3deg, -12deg)'
                });
                ElmShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(130deg) translate(92px, 0px) skew(-3deg, -12deg)'
                });
                break;

            case 16:
                Sun.animate({
                    left: '67%',
                    top: '15%'
                }, 1000);
                OakShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(177deg) translate(131px, -72px) skew(-3deg, -12deg)'
                });
                ElmShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(156deg) translate(106px, -30px) skew(-3deg, -12deg)'
                });
                break;

            case 18:
                Sun.animate({
                    left: '71%',
                    top: '20%'
                }, 1000);
                OakShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(190deg) translate(117px, -84px) skew(-3deg, -12deg)'
                });
                ElmShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(160deg) translate(103px, -31px) skew(-3deg, -12deg)'
                });
                break;

            case 20:
                Sun.animate({
                    left: '78%',
                    top: '28%'
                }, 1000);
                OakShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(209deg) translate(96px, -95px) skew(-3deg, -12deg)'
                });
                ElmShadow.css({
                    transition: 'all 1s',
                    transform: 'rotate(184deg) translate(94px, -54px) skew(-3deg, -12deg)'
                });
                break;
        }
    };
}

let init = new Game();
