export default function initCarrossel() {

    if(document.documentElement.classList.contains('js')) {

        const splide = new Splide('.splide', {
            type: 'fade',
            rewind: true,
            arrows: true,
            pagination: false,
            drag: false,
            speed: 1500,
            interval: 3500,
            breakpoints: {
                600: {
                    arrows: true,
                    drag: true
                }
            }

        });
        
        splide.mount();
    

    }

}



