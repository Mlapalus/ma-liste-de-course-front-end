export default class Shop {

  static display () {
    const container = document.getElementById('container-shop');
    console.log("shop : ", container);
    const h1Title = document.createElement('h1');
    h1Title.innerText = "Bienvenu chez " + sessionStorage.getItem("page");

    container.appendChild(h1Title);
}
}