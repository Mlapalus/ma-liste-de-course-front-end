import getProducts from "../../../fixtures/products";
import Basket from "../BasketPage/Basket";
import CreateProduct from "../Views/CreateProduct";

export default class Shop {

  static async display () {
    this.createTitle();
    const products = await getProducts();
        for (let i=0; i<products.length; i++) {
                document.getElementById('container-shop')
                        .appendChild(this.createProduct(products[i]));
                this.observer(products[i].name);
        };
  }

  static createTitle() {
    const h1Title = document.createElement('h1');
    h1Title.innerText = "Bienvenu chez " + sessionStorage.getItem("page");
    document.getElementById('container-shop').appendChild(h1Title);
  }

  static createProduct (product) {

    const divImage = CreateProduct.createDivImage(product.img);
    const divProduct = CreateProduct.createDivProduct(product);
    const button = CreateProduct.createButton(product.name);
    const productSection = CreateProduct.createSection(divImage, divProduct, button);
    return productSection;
  }

    static observer(name) {
        const title = document.getElementById(name);
        title.addEventListener('click', () => {
            console.log(name);
            Basket.add();
        });
    }
}