import '../scss/main.scss';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import Basket from './BasketPage/Basket';
import Shop from './ShopPage/Shop';

let page = sessionStorage.getItem('page') || "homepage";

const displayPage = (page) => {

  if (page == "homepage") {
    HomePage.displayShops();
  } else 
    { 
      if (page == "bucket") {
        Basket.display();
      }
      else 
      {
        Shop.display();
      }
};
}

Navbar.displayNavbar();
displayPage(page);
Footer.display();
