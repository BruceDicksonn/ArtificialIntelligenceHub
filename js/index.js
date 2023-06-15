import initDigitacaoAutomatica from "./modules/digitacao-automatica-animacao.js";
import CheckFormContato from "./modules/formulario.js";
import initMenuMobile from "./modules/menu.js";
import initScrollSuave from "./modules/scroll-suave.js";
import Tooltip from "./modules/tooltip.js";

const tooltip = new Tooltip('[data-tooltip]');
const checkFormContato = new CheckFormContato();

initMenuMobile();
initScrollSuave();
initDigitacaoAutomatica();

tooltip.init();
checkFormContato.init();

new SimpleAnime();