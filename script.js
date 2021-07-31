const modal = document.getElementById("add-modal");
const CARDS = [
    {
        title: "Travel to Grece", 
        img: "https://images.unsplash.com/photo-1606577583855-7887c860e755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
    ,
    {
        title: "t to Grece", 
        img: "https://images.unsplash.com/photo-1606577583855-7887c860e755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
]
const createCard = (title, img)=>{
    modal.style.display="none";
    const newCardElement = document.createElement("div");
    newCardElement.className="card"
    newCardElement.innerHTML = `<img class="img-card" src="${img}" alt="grece">
    <p>${title}</p>
    <ul>
        <li>☐</li>
    </ul>`
    checkbox.addEventListener ("click", () =>{
        checkbox.innerHTML = '<li class="activeCheck">☑︎</li>';         
})
    const cardContainer = document.getElementById("card-container");
    cardContainer.appendChild (newCardElement);
}

let i = 0;
while (i < CARDS.length) {
  const currentElement = CARDS[i]
  createCard(currentElement.title,currentElement.img) 
  // do something with the current element
  i++;
}

const openButton = document.getElementById("open-btn")
openButton.addEventListener ("click", () =>{
    modal.style.display="block";
})
const closeButton = document.getElementById("close-btn")
closeButton.addEventListener ("click", () =>{
    modal.style.display="none";
})
const addButton = document.getElementById("add-btn")
addButton.addEventListener ("click", () =>{
const textArea = document.getElementById("add-text");
const title = textArea.value
const img = "https://images.unsplash.com/photo-1606577583855-7887c860e755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
if (title!=="")
{createCard(title, img)}
})
        





const underline = document.getElementById("underline-themes")
    underline.addEventListener ("click", () =>{
        underline.style.textDecoration= "underline", padding="5px"
    })
const heart = document.getElementById("heart");
        heart.addEventListener ("click", () =>{
            heart.innerHTML = "<li>♥︎</li>";
})
    