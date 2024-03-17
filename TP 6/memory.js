class MemoryGame {
  constructor(images, blank) {
    this.images = images;
    this.blank = blank;
    this.positionsCartes = shuffleCards(images.length);
    this.selectedCards = [];
    this.alreadySelected = [];
  }
  build(div) {
    //div.innerHTML = this.images.length;
    let compteur = 0;
    this.positionsCartes.forEach(element => {
      let img = document.createElement('img');
      img.src = "ressources/blank.png";
      img.id = compteur;
      compteur++;
      div.appendChild(img);
      img.onclick = () => {
        if (this.selectedCards.length < 2 && (this.alreadySelected.indexOf(img.id) === -1)) {
          this.selectedCards.push(img);
          img.src = `ressources/${this.images[element]}`;
        }
        if (this.selectedCards.length === 2 && this.alreadySelected.indexOf(img.id) === -1) {
          if (this.selectedCards[0].src === this.selectedCards[1].src) {
            this.alreadySelected.push(this.selectedCards[0].id);
            this.alreadySelected.push(this.selectedCards[1].id);
            this.selectedCards = [];
          }
          else {
            this.selectedCards[0].src = "ressources/blank.png";
            this.selectedCards[1].src = "ressources/blank.png";
          }
        }
        // img.src = `ressources/${this.images[element]}`;
        // console.log("id:", img.id);
        // console.log("numéro de la carte:", element);
      };
    });
  }
}

const shuffleCards = function(length) {
  let cards = [];
  for(let i = 0; i < length; i++) {
    cards.push(i);
    cards.push(i);
  }
  return cards;
};