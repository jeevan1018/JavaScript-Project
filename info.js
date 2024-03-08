function goBack() {
    window.history.back();
}

//all
var dataGetting = localStorage.getItem("addingind");
console.log(dataGetting);
        let dataGetting1 = JSON.parse(dataGetting);
        console.log(dataGetting1);

        let lists = document.querySelectorAll("li");
        
        lists[0].innerHTML = dataGetting1["id"];
        lists[1].innerText = dataGetting1["category"];
        lists[2].innerText = dataGetting1["description"];
        lists[3].innerText = dataGetting1["price"];
        lists[4].innerText = dataGetting1["title"];

        let imgg = document.querySelector("img");
        imgg.setAttribute("src", dataGetting1["image"]);
        imgg.style.width = "200px";
        imgg.style.height = "200px";