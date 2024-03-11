class MemoryGame {
  constructor(images, blank) {
    this.images = images;
    this.blank = blank;
    this.positionsCartes = shuffleCards(images.length);
  }
  build(div) {
    div.innerHTML = this.images.length
    this.positionsCartes.forEach(element => {
      let img = document.createElement('img');
      //img.src = `ressources/lego${element + 1}.png`;
      img.src = "ressources/blank.png";
      img.alt = element
      img.id = element
      div.appendChild(img);
    });
    div.onclick =()=> {
    }
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