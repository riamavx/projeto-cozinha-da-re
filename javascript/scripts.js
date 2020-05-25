const sectionCards = document.querySelector(".cards");

const card = document.querySelector("div.card");

produtos.map(produto => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = produto.imgUrl;
  cardClone.querySelector(".title").innerHTML = produto.nome;
  cardClone.querySelector(".text__description").innerHTML =
    produto.descricao;
  cardClone.querySelector(".info > p.text__price").innerHTML =
    produto.valor;
  sectionCards.appendChild(cardClone);
});

card.remove();


