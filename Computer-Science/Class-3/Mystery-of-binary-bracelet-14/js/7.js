function computerGames(){
    var checkmarkJS = document.querySelectorAll('.checkmarkJS');
    var checkmarkJS1 = document.querySelectorAll('.checkmarkJS1');
    var checkmarkJS2 = document.querySelectorAll('.checkmarkJS2');
    var checkmarkJS3 = document.querySelectorAll('.checkmarkJS3');
    var checkmarkJS4 = document.querySelectorAll('.checkmarkJS4');
    var checkmarkJS5 = document.querySelectorAll('.checkmarkJS5');
    var checkmarkJS6 = document.querySelectorAll('.checkmarkJS6');
    var checkmarkJS7 = document.querySelectorAll('.checkmarkJS7');
    var checkmarkJS8 = document.querySelectorAll('.checkmarkJS8');
    var checkmarkJS9 = document.querySelectorAll('.checkmarkJS9');
    var checkmarkJS10 = document.querySelectorAll('.checkmarkJS10');

    var resetBtn = document.getElementById('resetBtn');
    $(checkmarkJS).on('click', (e) => this.clickMe(e));

    function reset(){
        document.getElementById(1).innerText = '';
        document.getElementById(2).innerText = '';
        document.getElementById(3).innerText = '';
        document.getElementById(4).innerText = '';
        document.getElementById(5).innerText = '';
        document.getElementById(6).innerText = '';
        document.getElementById(7).innerText = '';
        document.getElementById(8).innerText = '';
        document.getElementById(9).innerText = '';
        document.getElementById(10).innerText = '';
    }

    function byIdchekmarkJS(el, letterhead){
        if(el.classList.contains('checkmarkJS1')){
            document.getElementById(1).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS2')){
            document.getElementById(2).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS3')){
            document.getElementById(3).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS4')){
            document.getElementById(4).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS5')){
            document.getElementById(5).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS6')){
            document.getElementById(6).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS7')){
            document.getElementById(7).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS8')){
            document.getElementById(8).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS9')){
            document.getElementById(9).innerText = letterhead
        }
        if(el.classList.contains('checkmarkJS10')){
            document.getElementById(10).innerText = letterhead
        }
    }

    function lettering(element){
        if(element.children[1].classList.contains('active') && !element.children[2].classList.contains('active')
            && element.children[3].classList.contains('active')){
                if(element.children[4].classList.contains('active')){
                    if(element.children[5].classList.contains('active')){
                        if(element.children[6].classList.contains('active')){
                            if(element.children[7].classList.contains('active')){
                                if(!element.children[8].classList.contains('active')){
                                    console.log('A', element.classList.contains('checkmarkJS1'))
                                    byIdchekmarkJS(element, 'A')
                                }
                            }
                            else{
                                if(element.children[8].classList.contains('active')){
                                    console.log('B')
                                    byIdchekmarkJS(element, 'B')
                                }
                                else{
                                    console.log("C")
                                    byIdchekmarkJS(element, 'C')
                                }
                            }
                        }
                        else{
                            if(element.children[7].classList.contains('active')){
                                if(element.children[8].classList.contains('active')){
                                    console.log("D")
                                    byIdchekmarkJS(element, 'D')
                                }
                                else{
                                    console.log("E")
                                    byIdchekmarkJS(element, 'E')
                                }
                            }
                            else{
                                if(element.children[8].classList.contains('active')){
                                    console.log('F')
                                    byIdchekmarkJS(element, 'F')
                                }
                                else{
                                    console.log('G')
                                    byIdchekmarkJS(element, 'G')
                                }
                            }
                        }
                    }
                    else{
                        if(element.children[6].classList.contains('active')){
                            if(element.children[7].classList.contains('active')){
                                if(element.children[8].classList.contains('active')){
                                    console.log('H')
                                    byIdchekmarkJS(element, 'H')
                                }
                                else{
                                    console.log('I')
                                    byIdchekmarkJS(element, 'I')
                                }
                            }
                            else{
                                if(element.children[8].classList.contains('active')){
                                    console.log('J')
                                    byIdchekmarkJS(element, 'J')
                                }
                                else{
                                    console.log('K')
                                    byIdchekmarkJS(element, 'K')
                                }
                            }
                        }
                        else{
                            if(element.children[7].classList.contains('active')){
                                if(element.children[8].classList.contains('active')){
                                    console.log('L')
                                    byIdchekmarkJS(element, 'L')
                                }
                                else{
                                    console.log('M')
                                    byIdchekmarkJS(element, 'M')
                                }
                            }
                            else{
                                if(element.children[8].classList.contains('active')){
                                    console.log('N')
                                    byIdchekmarkJS(element, 'N')
                                }
                                else{
                                    console.log('O')
                                    byIdchekmarkJS(element, 'O')
                                }
                            }
                        }
                    }
                }
                else{
                    if(element.children[5].classList.contains('active')){
                        if(element.children[6].classList.contains('active')){
                            if(element.children[7].classList.contains('active')){
                                if(element.children[8].classList.contains('active')){
                                    console.log('P')
                                    byIdchekmarkJS(element, 'P')

                                }
                                else{
                                    console.log('Q')
                                    byIdchekmarkJS(element, 'Q')
                                }
                            }
                            else{
                                if(element.children[8].classList.contains('active')){
                                    console.log('R')
                                    byIdchekmarkJS(element, 'R')
                                }
                                else{
                                    console.log('S')
                                    byIdchekmarkJS(element, 'S')
                                }
                            }
                        }
                        else{
                            if(element.children[7].classList.contains('active')){
                                if(element.children[8].classList.contains('active')){
                                    console.log('T')
                                    byIdchekmarkJS(element, 'T')
                                }
                                else{
                                    console.log('U')
                                    byIdchekmarkJS(element, 'U')
                                }
                            }
                            else{
                                if(element.children[8].classList.contains('active')){
                                    console.log('V')
                                    byIdchekmarkJS(element, 'V')
                                }
                                else{
                                    console.log('W')
                                    byIdchekmarkJS(element, 'W')
                                }
                            }
                        }
                    }
                    else{
                        if(element.children[6].classList.contains('active')){
                            if(element.children[7].classList.contains('active')){
                                if(element.children[8].classList.contains('active')){
                                    console.log('X')
                                    byIdchekmarkJS(element, 'X')
                                }
                                else{
                                    console.log('Y')
                                    byIdchekmarkJS(element, 'Y')
                                }
                            }
                            else{
                                if(element.children[8].classList.contains('active')){
                                    console.log('Z')
                                    byIdchekmarkJS(element, 'Z')
                                }
                            }
                        }
                    }
                }
            }
    }


    this.clickMe = (e) => {
        e.target.classList.add("active")
        e.target.style = "background-color: #000000;"
        checkmarkJS1.forEach(element => {
            lettering(element)
        });
        checkmarkJS2.forEach(element => {
            lettering(element)
        });
        checkmarkJS3.forEach(element => {
            lettering(element)
        });
        checkmarkJS4.forEach(element => {
            lettering(element)
        });
        checkmarkJS5.forEach(element => {
            lettering(element)
        });
        checkmarkJS6.forEach(element => {
            lettering(element)
        });
        checkmarkJS7.forEach(element => {
            lettering(element)
        });
        checkmarkJS8.forEach(element => {
            lettering(element)
        });
        checkmarkJS9.forEach(element => {
            lettering(element)
        });
        checkmarkJS10.forEach(element => {
            lettering(element)
        });
    }
    

    this.init = (e) =>{
        reset();
        checkmarkJS.forEach(element => {
            $(element).removeClass("active");
            element.style = '';
        });
    }

    resetBtn.addEventListener('click', () => this.init());
}

const computergame = new computerGames();