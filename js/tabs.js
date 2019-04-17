
class TabLink {
  constructor(banana) {
    this.banana = banana;
    this.data = this.banana.dataset.tab;
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.item);
    this.banana.addEventListener('click', this.select.bind(this));
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    Array.from(links).forEach(function (banana) {
      banana.classList.remove('tabs-link-selected');
    });
    this.banana.classList.add('tabs-link-selected');
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
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(function (banana) {
      banana.classList.remove('tabs-item-selected');
    });
    this.banana.classList.add('tabs-item-selected');
  }
}

const links = document.querySelectorAll('.tabs-link');
links.forEach(function (banana) {
  new TabLink(banana);
});