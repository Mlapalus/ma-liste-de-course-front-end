import CreateNav from '../Views/CreateNav';

// To Do 
// when click on "Pannier" go to page Panier
export default class Navbar {

  static displayNavbar() {
    document.getElementById('header').appendChild(CreateNav.createNav());
    this.observer();
  }

  static observer() {
      const bucket = document.getElementById('bucket');
      bucket.addEventListener('click', () => {
            sessionStorage.setItem('page', 'bucket');
      });

      const title = document.getElementById('title');
      title.addEventListener('click', () => {
        sessionStorage.setItem('page', 'homepage');
      });
  } 

}