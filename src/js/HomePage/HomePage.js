import getShops from '../../../fixtures/shop';
import CreateShop from '../Views/CrerateShop';

export default class HomePage {

    static async displayShops() {
        const shops = await getShops();
        for (let i=0; i<shops.length; i++) {
                document.getElementById('container')
                        .appendChild(this.createShop(shops[i]));
                this.observer(shops[i].name);
        };
    };

    static createShop (shop) {
    const divImage = CreateShop.createDivImage(shop.img);
    const divTitle = CreateShop.createDivTitle(shop.name);

    return CreateShop.createSection(divImage, divTitle);
    };

    static observer(name) {
        console.log(name);
        const title = document.getElementById(name);
        title.addEventListener('click', () => {
            sessionStorage.setItem('page', name);
        });
    }
}

