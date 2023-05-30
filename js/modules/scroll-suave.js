export default function initScrollSuave(){

    const menu  = document.querySelector('.js-menu');
    const links = menu.querySelectorAll('a');
    
    function navegar(event) {
        event.preventDefault();
    
        const target = document.querySelector(this.hash);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    
    }
    
    function addScrollEvent(){
        links.forEach(link => link.addEventListener('click', navegar));
    }
    
    function init() {
        if(menu && links) {
            addScrollEvent();
        }
    }
    
    init();    

}
