export default function initCarrossel() {

    if(document.documentElement.classList.contains('js')) {

        const splide = new Splide('.splide', {
            type: 'fade',
            rewind: true,
            arrows: false,
            pagination: false,
            drag: false,
            speed: 1500,
            interval: 3500,
            autoplay: true
        });
        
        splide.mount();
    

    }

}



