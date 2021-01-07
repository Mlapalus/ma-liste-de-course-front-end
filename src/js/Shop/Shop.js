import getShops from '../../../fixtures/shop';
import CreateShop from '../templates/CrerateShop';

export default class Shop {

    static async loadShops() {
        const shops = await getShops();
        for (let i=0; i<shops.length; i++) {
                document.getElementById('container')
                        .appendChild(this.createShop(shops[i]));
        };
    };

    static createShop (shop) {
    const divImage = CreateShop.createDivImage(shop.img);
    const divTitle = CreateShop.createDivTitle(shop.name);

    return CreateShop.createSection(divImage, divTitle);
    };
}

