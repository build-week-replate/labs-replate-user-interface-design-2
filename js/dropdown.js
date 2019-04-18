class Navbar {
      constructor(element) {
            this.element = element;
            // console.log("element", element);
            this.button = this.element.querySelector('.hamburger');
            // console.log("button", this.button);
            this.content = this.element.querySelector('.dropdown-content');
            // Add a click handler to the button reference and call the toggleContent method.
            // console.log("content", this.content);
            this.button.addEventListener('click', () => this.dropdown());
            
      }
    
      dropdown() {
            this.content.classList.toggle('dropdown-hidden');
            // console.log('click');
      }
}

let navbars = document.querySelectorAll('.dropdown').forEach( navbar => {new Navbar(navbar)});



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