export default class CreateNav {
  static createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.classList.add('navbar');
    nav.classList.add('p-2');
    nav.classList.add('bg-grey-light');

    nav.appendChild(this.createTitleDiv());
    nav.appendChild(this.createBucketDiv());

    return nav;
  }

  static createBucketDiv() {
    const divBucket = document.createElement('div');
    divBucket.classList.add('p-2');
    divBucket.classList.add('bg-grey-dark');
    divBucket.appendChild(this.createBucketH2());
    return divBucket;
  }

  static createBucketH2() {
    const bucket = document.createElement('h2');
    bucket.setAttribute("id", "bucket");
    bucket.innerText = "PANIER"; 
    const anchor = document.createElement('a');
    anchor.setAttribute("href", "basket.html");
    anchor.appendChild(bucket);
    return anchor;
  }

  static createTitleH1() {
    const titleH1 = document.createElement('h1');
    titleH1.setAttribute("id", "title");
    titleH1.innerText = "MA LISTE DE COURSE";
    const anchor = document.createElement('a');
    anchor.setAttribute("href", "index.html");
    anchor.appendChild(titleH1);
    return anchor;
  }

  static createTitleDiv() {
    const divTitle = document.createElement('div');
    divTitle.classList.add('p-1');
    divTitle.appendChild(this.createTitleH1());
    return divTitle;
  }


}