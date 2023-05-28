export default function initCarrossel() {

}

const splide = new Splide('.splide', {
    type: 'fade',
    rewind: true,
    arrows: false,
    pagination: false
});

splide.mount();

