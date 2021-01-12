export default class Basket {

  static display () {
    const container = document.getElementById('container-basket');
    const h1Title = document.createElement('h1');
    h1Title.innerText = "C'est le panier : " + sessionStorage.getItem("page");

    container.appendChild(h1Title);
}
}