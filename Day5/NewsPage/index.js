console.log("...APP Started...");
function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c57fdc7a995b4b42890279ad08b712d8")
    .then((res)=>{
        return res.json()
    }).then((data) => {
        renderUI(data)
        })
}
callAPI()

function renderUI(data){
    const articles = data.articles;
    console.log(articles);

    

    const root = document.getElementById('root');
    for(let i=0;i<articles.length; i++){
    const ar = articles[i];
    console.log(ar);

    const div = document.createElement('div');
    div.setAttribute
    const h3 = document.createElement('h3');
    h3.innerHTML = ar.title;
    div.appendChild(h3);

    const img = document.createElement('img');
    img.src = ar.urlToImage;
    div.appendChild(img);

    const p = document.createElement('p');
    p.innerHTML = ar.description;
    div.appendChild(p);

    root.appendChild(div);
    }
}
renderUI();