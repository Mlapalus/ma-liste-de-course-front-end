import basketRepository from '../../../fixtures/basket';
export default class Basket {


  static display () {
    const container = document.getElementById('container-basket');
    const h1Title = document.createElement('h1');
    h1Title.innerText = "C'est le panier : " + sessionStorage.getItem("page");

    const quantity = document.createElement('h2');
    quantity.setAttribute("id", "quantity");
    //sessionStorage.setItem("quantity", basketRepository.get().toString());
    quantity.innerText = "Quantité dans le panier: " + sessionStorage.getItem("quantity");
    container.appendChild(h1Title);
    container.appendChild(quantity);
}
  static add() {
      basketRepository.add();
      console.log(basketRepository.get().toString());
      sessionStorage.setItem("quantity", basketRepository.get().toString());
      document.getElementById("quantity").innerText = "Quantité dans le panier: " + sessionStorage.getItem("quantity");
  }
}