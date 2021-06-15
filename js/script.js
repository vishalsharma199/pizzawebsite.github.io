const counter = document.querySelectorAll('.counters');
counter.forEach((counters) =>{
    counters.innerHTML= 0;


    const updateCounters = () =>{
        const targetCount = +counters.getAttribute('data-target');

        const startingCount = Number(counters.innerHTML);

        const incr = targetCount /15;
        if(startingCount < targetCount){
            counters.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounters, 200)
        }else{
            counters.innerHTML =targetCount;
        }
    }


    updateCounters();
} )


const mainMenu =document.querySelector('.mainMenu')
const closeMenu =document.querySelector('.closeMenu')
const openMenu =document.querySelector('.openMenu')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(params) {
    mainMenu.style.display = 'flex';
    mainMenu.style.top ='0';
    
}

function close(params) {
    mainMenu.style.top = '-100%';
}

