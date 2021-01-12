
let shops = {
  1: {
    id : 1,
    name: "Leclerc",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",     //'../fixtures/img-placeholders/widget/widget2.jpg'
  },
  2: {
    id : 2,
    name: "Auchan",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",     //'../fixtures/img-placeholders/widget/widget2.jpg'
  },
  3: {
    id : 3,
    name: "InterMarché",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",     //'../fixtures/img-placeholders/widget/widget2.jpg'
  },
  4: {
    id : 4,
    name: "Careffour",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",     //'../fixtures/img-placeholders/widget/widget2.jpg'
  },
  5: {
    id : 5,
    name: "Franprix",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",     //'../fixtures/img-placeholders/widget/widget2.jpg'
  },
  6: {
    id : 6,
    name: "Lidl",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",     //'../fixtures/img-placeholders/widget/widget2.jpg'
  }
};

const getShops = () => 
  new Promise( (resolve, reject ) => 
  {
    if(!shops) {
      return setTimeout(
        () => reject(new Error('Shps not found')),
        250
      );
    }
    setTimeout( () => resolve(Object.values(shops)), 250);
  });

  export default getShops;