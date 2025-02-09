export default nav;

function nav(game1, game2, game3, game4){
   const navIcon = document.querySelector('.header-nav__icon');
   const mobileOverlay = document.querySelector('.header-nav__overlay');
   const desctopNav = document.querySelector('.nav__con');
   const gameTitle = document.querySelector('.header');
    const task = document.querySelector('.game__task');

   function switchGames(text){
    switch (text){
        case "sorting":
            game1();
            break;
        case "count":
            game2();
            break;

        case "addition":
            game3();
            break;     
        case "subtraction":
            game4();
            break;     
            } 
        }
function scrolHide(){
    if(document.body.style.overflow != 'hidden'){
        document.body.style.overflow = 'hidden';
    }else {
        document.body.style.overflow = ''
    }
}

 navIcon.addEventListener('click',(e)=>{
        mobileOverlay.classList.remove('header-nav__overlay--hide');
        mobileOverlay.classList.toggle('header-nav__overlay--show');
        scrolHide();
    })
          

    mobileOverlay.addEventListener('click',(e)=>{
        if(!e.target.matches('.header-nav__link')) return
        
        switchGames(e.target.dataset.link);
        mobileOverlay.classList.add('header-nav__overlay--hide');
        mobileOverlay.classList.remove('header-nav__overlay--show');
        setTimeout(()=>{
            mobileOverlay.classList.remove('header-nav__overlay--hide');
        },500)
        
        scrolHide();
        console.log(gameTitle.getBoundingClientRect())
        window.scrollTo(0,gameTitle.getBoundingClientRect().bottom);
    })

    desctopNav.addEventListener('click',(e)=>{
        if(!e.target.matches('.nav__link')) return
        switchGames(e.target.dataset.link);
    })
}
         
    
        

        
                            