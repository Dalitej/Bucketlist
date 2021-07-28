const modal = document.getElementById("add-modal");
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
    modal.style.display="none";
    const newCardElement = document.createElement("div");
    newCardElement.className="card"
    const textArea = document.getElementById("add-text");
    const title = textArea.value
    newCardElement.innerHTML = `<img class="img-card" src="https://images.unsplash.com/photo-1606577583855-7887c860e755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="grece">
    <p>${title}</p>
    <ul>
        <li>+</li>
        <li>⤿</li>
        <li>...</li>
    </ul>`
    const cardContainer = document.getElementById("card-container");
    cardContainer.appendChild (newCardElement);
})