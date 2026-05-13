const menuBtns = document.querySelectorAll(".fa.fa-bars");
const aside = document.querySelector("aside");

const apiKey = "a906f33312e946fdaa08db4ce05fa91f";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
const contents = document.querySelector(".content");
contents.innerHTML = "";


menuBtns.forEach(menuBtn => {menuBtn.addEventListener("click", () => {
    console.log("click");
    aside.classList.toggle("active");
})});

async function fetchNews() {
    try{
        const response = await fetch(apiUrl);
        const newsData = await response.json();
        console.log(newsData);
        displayNews(newsData.articles);
        
    }catch(error){
        console.error("Something went wrong",error);
    }
    
}
 
fetchNews();

function displayNews(articles){
    articles.forEach((article) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = article.urlToImage;

        const info = document.createElement("h1");
        info.textContent = article.title;

        const text = document.createElement("p");
        text.textContent = article.content;

        contents.appendChild(card);
        card.appendChild(image);
        card.appendChild(info);
        card.appendChild(text);


    })


}
    
