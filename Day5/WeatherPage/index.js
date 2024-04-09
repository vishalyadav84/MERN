function fetchAPI(){
    const url =("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi%2CUK?unitGroup=us&key=XNMF7S5W4NC3WLW2KHL3TBZQP");
    fetch()
    .then((res)=>res.json())
    .then(console.log) 
}
fetchAPI()




function renderUI(data){
    // const day=data.days;
    // console.log(days);
    const row =document.createElement("tr");
    const cell =document.createElement("th");
    cell.innerText ='Data';
    // let cell1 = document.createElement("th")
    // cell.innerHTML ='Data'
    row.appendChild(cell);

    const cell1 =document.createElement("th");
    cell1.innerText ='maximum tem';
    row.appendChild(cell1);

    const cell2 =document.createElement("th");
    cell2.innerText ='minimum tem';
    row.appendChild(cell2);


    // const cell3 =document.createElement("th");
    // cell3.innerText ='Data';
    // row.appendChild(cell3);
    
    root.appaend(row)

    // ShadowRoot.append(row);
}
// renderUI();