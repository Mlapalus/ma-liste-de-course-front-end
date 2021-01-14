export default class CreateProduct {

  static createSection(divImage, divProduct, button){
    const section = document.createElement('section');
    section.classList.add('shop');
    section.classList.add('m-3');
    section.classList.add('bg-grey-light');
    section.appendChild(divImage);
    section.appendChild(divProduct);
    section.appendChild(button);
    return section;
  }

  static createDivImage(image){
    const divImage = document.createElement('div');
    divImage.innerHTML = '<img src="' + image + '" alt="photo">';
    return divImage;
  }

  static createDivProduct(product){
        const divTitle = document.createElement('div');
        divTitle.appendChild(this.createH2(product.name));
        divTitle.appendChild(this.createH4("Nutriscore : " + product.nutriscore));
        return divTitle;
  }

  static createH2(name){
      const h2Title = document.createElement('h2');
      h2Title.innerText = name;
      return h2Title;
  }

  static createH4(name){
      const h2Title = document.createElement('h6');
      h2Title.innerText = name;
      return h2Title;
  }

  static createButton(name){
    const button = document.createElement('button');
    button.setAttribute("id", name);
    button.value = name;
    button.innerText = "Ajouter";
    return button;
  }

}