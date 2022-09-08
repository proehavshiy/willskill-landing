// * custom scripts
import * as browserWebp from "./modules/functions.js"
import * as navbar from "../components/Navbar/navbar.js"
// import 'bootstrap';

// подключение бургера
navbar.burgerMenu()
window.addEventListener('scroll', navbar.fixedNav)

// webp
browserWebp.isWebp()
