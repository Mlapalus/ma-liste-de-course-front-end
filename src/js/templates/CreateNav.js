export default class CreateNav {
  static createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.classList.add('navbar');
    nav.classList.add('p-2');
    nav.classList.add('bg-grey-light');

    const divTitle = document.createElement('div');
    divTitle.classList.add('p-1');

    const title = document.createElement('h1');
    title.setAttribute("id", "title");
    title.innerText = "MA LISTE DE COURSE"; 


    const divBucket = document.createElement('div');
    divBucket.classList.add('p-2');
    divBucket.classList.add('bg-grey-dark');
    divBucket.classList.add('text-white');

    const bucket = document.createElement('h2');
    bucket.setAttribute("id", "bucket");
    bucket.innerText = "PANIER"; 

    divTitle.appendChild(title);
    divBucket.appendChild(bucket);
    nav.appendChild(divTitle);
    nav.appendChild(divBucket);

    return nav;
  }


}