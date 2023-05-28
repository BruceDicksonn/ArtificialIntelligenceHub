/* 

Essa classe é responsável por adaptar os componentes
para qualquer tipo de animação adicionando as classes
exigidas pelas mesmas aos elementos e assim evitando
que o conteúdo fique vazio caso o js do navegador esteja
desativado

*/

import initCarrossel from "./modules/carrossel-imagens.js";

const containerSplide = document.querySelector('#splide');
const containerSplideTrack = document.querySelector('#splide__track');
const containerSplideList = document.querySelector('#splide__list');
const slides = document.querySelectorAll('#splide__slide');

document.documentElement.classList.add('js');

initCarrossel();