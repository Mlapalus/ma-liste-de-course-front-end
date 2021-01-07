import '../templates/CreateNav';
import CreateNav from '../templates/CreateNav';
// To Do 
// when click on "Pannier" go to page Panier
export default class Navbar {

  static loadNavbar() {
    document.getElementById('header').appendChild(CreateNav.createNav());
  }

}