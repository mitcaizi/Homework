const template = document.createElement('template');
template.innerHTML = `
  <style>
  .card_border {
    text-align: center;
    border:rgb(137, 137, 222); 
    border-width:5px; 
    border-style:outset;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: auto;
    font-family: arial;
	}

    .inner {
        display: inline-block;
    }

    .text_color { 
        color:darkorange; 
    }
    
    .btn {
        border:rgb(137, 222, 218); 
        border-style:inset;
    }
  </style>

  <div class="card_border">
      <h1></h1>
      <img width="250" height="300"/>
      <h3></h3>
      <p class="text_color"></p> 
      <form class="inner" action="https://www.facebook.com/" target="_blank">
        <input type="image" src="facebook.png" width="50" height="50" />
      </form>
      <form class="inner" action="https://github.com/" target="_blank">
        <input type="image" src="github.png" width="85" height="50" />
      </form>
      <form class="inner"; action="https://www.linkedin.com/" target="_blank">
        <input type="image" src="linkedin.png" width="50" height="50" />
      </form>
      <p><button class="btn">Personal Website</button></p>
  </div>
`;

class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('img').src = this.getAttribute('picture');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('desc');

  }
}

customElements.define('profile-card', ProfileCard);