class Dropdown {
      constructor(element) {
            this.element = element;
            this.button = this.element.querySelector('.dropdown');
            this.content = this.element.querySelector('.dropdown-content');
            // Add a click handler to the button reference and call the toggleContent method.
            this.button.addEventListener('click', this.toggleContent.bind(this));
      }
    
      toggleContent() {
            this.content.classList.toggle('dropdown-hidden');
      }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));