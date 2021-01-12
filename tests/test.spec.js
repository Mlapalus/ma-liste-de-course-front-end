import CreateNav from "../src/js/Views/CreateNav.js";

let navbar;

describe('tests for the Navbar component', () => {
  beforeAll(() => {
      navbar = CreateNav.createNav();
  });

it('should be create a HTML element', () => {
      expect(navbar).toBeInstanceOf(HTMLElement);
  });
  
it('sould have a class nav', () => {
    expect(navbar.classList.contains("nav")).toBe(true);
    });

it('sould have a class navbar', () => {
      expect(navbar.classList.contains("navbar")).toBe(true);
  });

  it('should have 2 childs', () => {
      expect(navbar.children.length).toBe(2);
  });

  it('should have 2 HTMLelements children', () => {
      expect(navbar.children[0]).toBeInstanceOf(HTMLElement);
      expect(navbar.children[1]).toBeInstanceOf(HTMLElement);
  });

    it('should go to the basket page when click on "bucket" div', () => {
      const basket = navbar.children[1];
      const goToBasketPage = jest.fn();


    })


});
