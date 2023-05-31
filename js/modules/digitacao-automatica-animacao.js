export default function initDigitacaoAutomatica(){
    const textos = document.querySelectorAll('[data-anime-digitacao]');

    function animate() {
    
        let indice = 0;
        const texto = this.innerText;
        this.innerText = "";
    
        const interval = setInterval(() => {
    
            this.textContent += texto[indice];
            indice++;
    
            if(indice === texto.length) {
                clearInterval(interval);
            }
    
        }, 60);
    
    }
    
    function addAnimation(e) {
        textos.forEach(texto => animate.call(texto));
    }
    
    function init() {
        if(textos) {
            addAnimation();
        }
    }
    
    init();
}
