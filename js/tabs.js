
class TabLink {
  constructor(banana) {
    // Assign this.element to the passed in DOM element
    this.banana = banana;

    // Get the custom data attribute on the Link
    this.data = this.banana.dataset.tab;
    //console.log(this.link.dataset.tab);

    // Using the custom data attribute get the associated Item element
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);

    // Add a click event listener on this instance, calling the select method on click
    this.banana.addEventListener('click', this.select.bind(this));

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    Array.from(links).forEach(function (banana) {
      banana.classList.remove('tabs-link-selected');
    });
    // Add a class named "tabs-link-selected" to this link
    this.banana.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(banana) {
    // Assign this.element to the passed in element
    this.banana = banana;
    console.log(this.banana);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(function (banana) {
      banana.classList.remove('tabs-item-selected');
    });
    // Add a class named "tabs-item-selected" to this element
    this.banana.classList.add('tabs-item-selected');
  }
}

const links = document.querySelectorAll('.tabs-link');
links.forEach(function (banana) {
  new TabLink(banana);
});