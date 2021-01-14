
let products = {
  1: {
    id : 1,
    name: "Céréales",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",  
    price: 5.4,
    nutriscore: "B"
  },
  2: {
    id : 2,
    name: "Nutella",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",
    price: 4.5,
    nutriscore: "E"
  },
  3: {
    id : 3,
    name: "Bananes",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",
    price: 1.3,
    nutriscore: "C"    
  },
  4: {
    id : 4,
    name: "Pates",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",   
    price: 1.1,
    nutriscore: "C"  
  },
  5: {
    id : 5,
    name: "Riz",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",
    price: 0.9,
    nutriscore: "B"   
  },
  6: {
    id : 6,
    name: "Poulet roti",
    img: "https://via.placeholder.com/60/0000FF/FFFFFF?Text=LOGO",
    price: 5.7,
    nutriscore: "C"
  }
};

const getProducts = () => 
  new Promise( (resolve, reject ) => 
  {
    if(!products) {
      return setTimeout(
        () => reject(new Error('Products not found')),
        150
      );
    }
    setTimeout( () => resolve(Object.values(products)), 250);
  });

  export default getProducts;
