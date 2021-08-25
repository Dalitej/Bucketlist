const modal = document.getElementById("add-modal");
const CARDS = [
    {
        title: "Travel to Grece", 
        img: "https://images.unsplash.com/photo-1606577583855-7887c860e755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    }
    ,
    {
        title: "Visit the Eifell Tower", 
        img: "https://images.unsplash.com/photo-1546237769-58c2846e87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80",
    } 
]
const createCard = (title, img)=>{
    modal.style.display="none";

    // Create card container
const newCardElement = document.createElement("div");
    newCardElement.className="card";
    newCardElement.id = title + "-library";

    // Create image
const imageElement = document.createElement("img");
    imageElement.src = img
    imageElement.className = 'img-card'
    // Put image to the card container
    newCardElement.appendChild(imageElement)

    // Create p
const titleElement = document.createElement("p");
    titleElement.innerText = title;
    titleElement.style.fontSize = '16px';
    titleElement.style.paddingTop = '5px';
    //titleElement.style.fontFamily = 'Caveat';

    // Put p to the card container
    newCardElement.appendChild(titleElement)

    // Create empty checkbox
const checkElement = document.createElement("div");
    checkElement.className = 'check';
    checkElement.innerText = '☐'
    // Put empty checkbox to the card container
    newCardElement.appendChild(checkElement)

        // Create delete button
const deleteElement = document.createElement("div");
    deleteElement.className = 'delete';
    deleteElement.innerText = 'x';

// Put empty checkbox to the card container
newCardElement.appendChild(deleteElement)



    // Add a listener to change checked
    checkElement.addEventListener ("click", () =>{
        if  (checkElement.innerText === '☐') {
            checkElement.innerText = '☑︎';         
            checkElement.style.color = 'black'
        }
        else {
            checkElement.innerText = '☐'
            checkElement.style.color = '#8c8c8c'
        }
    })

   // Add a listener to delete button
   deleteElement.addEventListener ("click", () =>{
    const deleteCard = document.getElementById(title + "-library");
    const heartElement = document.getElementById(title + "-heart")
    if (heartElement != null){
        heartElement.innerText = '♡'
        heartElement.style.color = '#8c8c8c'
    }
    
    if (deleteCard != null){
        deleteCard.parentNode.removeChild(deleteCard);
    }
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

//Modal
const openButton = document.getElementById("open-btn")
    openButton.addEventListener ("click", () =>{
    modal.style.display="block";
})
const closeButton = document.getElementById("close-btn")
    closeButton.addEventListener ("click", () =>{
    modal.style.display="none";
})
const addButton = document.getElementById("add-btn")
    addButton.addEventListener ("click", async() =>{
const textArea = document.getElementById("add-text");
const title = textArea.value
textArea.value = "";
const img = await getPicture(title);

if (title!=="") {
    createCard(title, img)}
})


const FEEDCARDS = [
    {
        title: "Adopt a Stray Dog", 
        img: "https://images.unsplash.com/photo-1628031376060-f8534abd0489?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
        user: "Sarah123",
    }
    ,
    {
        title: "Swedish Archipelago", 
        img: "https://images.unsplash.com/photo-1531510382880-7c633627ca80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80",
        user: "JohnB",
    }
    ,
    {
        title: "Ceramic Class", 
        img: "https://images.unsplash.com/photo-1628074958434-3cd4801b421e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        user: "Steve",
    } 
    ,
    {
        title: "Go on a Helicopter", 
        img: "https://images.unsplash.com/photo-1576725386266-5c4b8c63da66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVsaWNvcHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        user: "Steve",
    }
    ,
    {
        title: "Go on a Sailboat", 
        img: "https://images.unsplash.com/photo-1546465608-bec079b9a36d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        user: "JohnB",
    }
    ,
]
const createFeedCard = (title, img, user)=>{

    // Create card container
const newFeedCardElement = document.createElement("div");
    newFeedCardElement.className="card";

    // Create image
const imageElement = document.createElement("img");
    imageElement.src = img
    imageElement.className = 'img-card'
    // Put image to the card container
    newFeedCardElement.appendChild(imageElement)

    // Create p
const titleElement = document.createElement("p");
    titleElement.innerText = title
    titleElement.style.fontSize = '16px'
    titleElement.style.paddingTop = '5px';
    //titleElement.style.fontFamily = 'Caveat';
    // Put p to the card container
    newFeedCardElement.appendChild(titleElement)

    // Create p
const userElement = document.createElement("p");
userElement.className = 'user';
userElement.innerText = user;
// Put p to the card container
newFeedCardElement.appendChild(userElement);

    // Create empty heart
const heartElement = document.createElement("div");
    heartElement.className = 'heart';
    heartElement.id = title +'-heart';
    heartElement.innerText = '♡'
    // Put empty heart to the card container
    newFeedCardElement.appendChild(heartElement)


    // Add a listener to change heart
    heartElement.addEventListener ("click", () =>{
        if  (heartElement.innerText === '♡') {
            heartElement.innerText = '♥︎';         
            heartElement.style.color = 'black'
            createCard(title, img)
        }
        else {
            heartElement.innerText = '♡'
            heartElement.style.color = '#8c8c8c'
            const deleteCard = document.getElementById(title + "-library");
            if (deleteCard != null){
                deleteCard.parentNode.removeChild(deleteCard);
            }
        }
    })
const feedCardContainer = document.getElementById("feed-container");
    feedCardContainer.appendChild (newFeedCardElement);
}

function renderFeedCards(){
let i = 0;
while (i < FEEDCARDS.length) {
  const currentElement = FEEDCARDS[i]
  createFeedCard(currentElement.title,currentElement.img,currentElement.user) 
  // do something with the current element
  i++;
}   
}
renderFeedCards()


const THEMESCARDS = [
    {
        title: "Adopt a Stray Dog", 
        img: "https://images.unsplash.com/photo-1628031376060-f8534abd0489?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
        user: "Sarah123",
    }
    ,
    {
        title: "Swedish Archipelago", 
        img: "https://images.unsplash.com/photo-1531510382880-7c633627ca80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80",
        user: "JohnB",
    }
    ,
    {
        title: "Ceramic Class", 
        img: "https://images.unsplash.com/photo-1628074958434-3cd4801b421e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        user: "Steve",
    } 
    ,
    {
        title: "Go on a Helicopter", 
        img: "https://images.unsplash.com/photo-1576725386266-5c4b8c63da66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVsaWNvcHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        user: "Steve",
    }
    ,
    {
        title: "Go on a Sailboat", 
        img: "https://images.unsplash.com/photo-1546465608-bec079b9a36d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        user: "JohnB",
    }
    ,
]
const createThemesCard = (title, img, user)=>{

    // Create card container
const newThemesCardElement = document.createElement("div");
    newThemesCardElement.className="card";

    // Create image
const imageThemesElement = document.createElement("img");
    imageThemesElement.src = img
    imageThemesElement.className = 'img-card'
    // Put image to the card container
    newThemesCardElement.appendChild(imageThemesElement)

    // Create p
const titleThemesElement = document.createElement("p");
    titleThemesElement.innerText = title
    titleThemesElement.style.fontSize = '16px'
    titleThemesElement.style.paddingTop = '5px';
    //titleThemesElement.style.fontFamily = 'Caveat';
    // Put p to the card container
    newThemesCardElement.appendChild(titleThemesElement)

    // Create p
const userThemesElement = document.createElement("p");
userThemesElement.className = 'user';
userThemesElement.innerText = user;
// Put p to the card container
newThemesCardElement.appendChild(userThemesElement);

    // Create empty heart
const heartThemesElement = document.createElement("div");
    heartThemesElement.className = 'heart';
    heartThemesElement.id = title +'-heart';
    heartThemesElement.innerText = '♡'
    // Put empty heart to the card container
    newThemesCardElement.appendChild(heartThemesElement)


    // Add a listener to change heart
    heartThemesElement.addEventListener ("click", () =>{
        if  (heartThemesElement.innerText === '♡') {
            heartThemesElement.innerText = '♥︎';         
            heartThemesElement.style.color = 'black'
            createThemesCard(title, img)
        }
        else {
            heartThemesElement.innerText = '♡'
            heartThemesElement.style.color = '#8c8c8c'
            const deleteThemesCard = document.getElementById(title + "-library");
            if (deleteThemesCard != null){
                deleteThemesCard.parentNode.removeChild(deleteThemesCard);
            }
        }
    })
const ThemesCardContainer = document.getElementById("themes-container");
ThemesCardContainer.appendChild (newThemesCardElement);
}

function renderThemesCards(){
let i = 0;
while (i < THEMESCARDS.length) {
  const currentElement = THEMESCARDS[i]
  createThemesCard(currentElement.title,currentElement.img,currentElement.user) 
  // do something with the current element
  i++;
}   
}
renderThemesCards()





const getPicture = async (query) => {
    const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
        headers: {
            'Authorization': '563492ad6f9170000100000112fbd68e053e43c2bce381629382d2c1'
        }
    })
   
    const data = await res.json();
    if (Array.isArray(data.photos) && data.photos.length) {
        return data.photos[0].src.large
    }
    return 'https://images.unsplash.com/photo-1605106901227-991bd663255c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
}