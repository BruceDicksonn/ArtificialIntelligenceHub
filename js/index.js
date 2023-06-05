import initDigitacaoAutomatica from "./modules/digitacao-automatica-animacao.js";
import initMenuMobile from "./modules/menu.js";
import initScrollSuave from "./modules/scroll-suave.js";
import Tooltip from "./modules/tooltip.js";

const tooltip = new Tooltip('[data-tooltip]');

initMenuMobile();
initScrollSuave();
initDigitacaoAutomatica();
tooltip.init();

new SimpleAnime();