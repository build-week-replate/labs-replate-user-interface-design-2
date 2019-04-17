class Navbar {
      constructor(element) {
            this.element = element;
            this.button = this.element.querySelector('.dropdown-button');
            this.content = this.element.querySelector('.dropdown-content');
            // Add a click handler to the button reference and call the toggleContent method.
            this.button.addEventListener('click', () => this.toggleContent());
            console.log('click');
      }
    
      toggleContent() {
            this.content.classList.toggle('dropdown-hidden');
      }
}

let navbars = document.querySelectorAll('.dropdown').forEach( navbar => new Navbar(navbar));



// class TabItem {
//       constructor(banana) {
//         this.banana = banana;
//         // console.log(this.banana);
//       }
    
//       select() {
//         const items = document.querySelectorAll('.tabs-item');
//         // Remove the class "tabs-item-selected" from each element
//         Array.from(items).forEach(function (banana) {
//           banana.classList.remove('dropdown-hidden');
//         });
//         this.banana.classList.add('dropdown-hidden');
//       }
//     }
    
//     const links = document.querySelectorAll('.tabs-link');
//     links.forEach(function (banana) {
//       new TabLink(banana);
//     });