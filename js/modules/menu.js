export default function initMenuMobile(){

    const $menu = document.querySelector('.js-menu');
    const $button = document.querySelector('.js-toggle-button');
    
    function showMenuMobile(){
        $button.ariaExpanded = $button.ariaExpanded === "true" ? "false":"true";
        $menu.classList.toggle('active');
    }
    
    function ativarToggleMenu(event) {
        this.classList.toggle('active');
        showMenuMobile();
    }
    
    function addMenuEvents(){
        $button.addEventListener('click', ativarToggleMenu);
    }
    
    function init(){
        if($button && $button) {
            addMenuEvents();
        }
    }
    
    init();    

}