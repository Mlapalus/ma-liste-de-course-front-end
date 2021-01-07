export default class CreateShop {


  static createSection(divImage, divTitle){
    const section = document.createElement('section');
    section.classList.add('shop');
    section.classList.add('m-3');
    section.classList.add('bg-grey-light');
    section.appendChild(divImage);
    section.appendChild(divTitle);
    return section;
  }

  static createDivImage(image){
    const divImage = document.createElement('div');
    divImage.innerHTML = '<img src="' + image + '" alt="photo">';
    return divImage;
  }

  static createDivTitle(name){
        const divTitle = document.createElement('div');
        const title = this.createH2(name);
        divTitle.appendChild(title);
        return divTitle;
  }

  static createH2(name){
      const h2Title = document.createElement('h2');
      h2Title.innerText = name;
      return h2Title;
  }

}