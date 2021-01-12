export default class Footer {

  static display() {

    const footer = document.getElementById('footer');
    const titleH3 = document.createElement('h3');
    titleH3.innerText = "Ceci est le footer";
    footer.appendChild(titleH3);
  }

}