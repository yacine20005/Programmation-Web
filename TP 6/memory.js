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
        console.log(`selected : ${this.selectedCards}`);
        console.log(`already : ${this.alreadySelected}`);

        if (this.selectedCards.length === 0 && !this.alreadySelected.includes(img) && !this.selectedCards.includes(img)) {
          this.selectedCards.push(img);
          this.selectedCards[0].src = `ressources/${this.images[element]}`;
        } 

        else if (this.selectedCards.length === 1 && !this.alreadySelected.includes(img) && !this.selectedCards.includes(img)) {
          this.selectedCards.push(img);
          this.selectedCards[1].src = `ressources/${this.images[element]}`;
          if (this.selectedCards[0].src === this.selectedCards[1].src) {
            this.alreadySelected.push(this.selectedCards[0]);
            this.alreadySelected.push(this.selectedCards[1]);
            this.selectedCards = [];
          } 
          else {
            this.selectedCards[0].src = "ressources/blank.png";
            this.selectedCards[1].src = "ressources/blank.png";
            this.selectedCards = [];
          }
        } 
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