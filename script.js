// const accesskey = "FSLFKJaNoO__NCfK29evuq54kcySAOfkTotxqOx19dE";
// const accesskey = "Ou0baKCO9pnofnOdzZhEQ-ulg9jTXp3OdM6lhmOO05g";
const accesskey = "RkxAbKzTITVFghZWbEMtwD5Iaao9nTNx6gaWORnSg3A";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchresults = document.querySelector(".search-results");
const showmore = document.getElementById("show-more");

let inputdata = "";
let page = 1;

async function searchimages(){
    inputdata = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchresults.innerHTML = "";
    }

    results.map((result) =>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        // const imagecontent = document.createElement("div");
        // imagecontent.classList.add("card-body");
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        // imageWrapper.appendChild(imagecontent);
        imageWrapper.appendChild(imagelink);
        searchresults.appendChild(imageWrapper);
    });

    page++;
    if(page > 1){
        showmore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event)=>{
    console.log("hello");
    event.preventDefault();
    page = 1;
    searchimages();
});

showmore.addEventListener("click",()=>{
    console.log("hello");

    searchimages();
})


