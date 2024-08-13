let url = window.location.search;
console.log(url);
let obj = new URLSearchParams(url);
let id = obj.get("id");
let section = document.querySelector("section");
let article = document.querySelector("article");
let h1 = document.querySelector("h1");

function fetchDetails() {
  fetch(`http://localhost:5000/users/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let div1 = document.createElement("div");
      div1.style.height = "40%";
      div1.style.width = "60%";
      div1.style.display = "flex";
      div1.style.alignItems = "center";
      div1.style.justifyContent = "center";
      // div1.style.backgroundColor = "white";
      let img = document.createElement("img");
      img.src = "../Assets/Peppa.jpg";
      img.style.height = "92%";
      img.style.width = "50%";
      img.style.borderRadius = "50%";
      img.style.marginLeft = "50px";
      img.style.border = "2px solid black";

      let div2 = document.createElement("div");
      div2.style.height = "30%";
      div2.style.width = "90%";
      // div2.style.backgroundColor = "pink";
      div2.style.display = "flex";
      div2.style.alignItems = "center";
      div2.style.justifyContent = "space-evenly";
      div2.style.flexDirection = "column";
      div2.style.color="white"

      let h1 = document.createElement("h2");
      let h2 = document.createElement("h3");
      let h3 = document.createElement("h3");

      h1.innerText = `Name:${data.name}`;
      h2.innerText = `Email:${data.email}`;
      h3.innerText = `PH.No:${data.phNum}`;

      let div3 = document.createElement("div");
      div3.style.height = "20%";
      div3.style.width = "90%";
      // div3.style.backgroundColor = "pink";
      div3.style.display = "flex";
      div3.style.alignItems = "center";
      div3.style.justifyContent = "center";
      div3.style.gap="20px"
    
      let btn1 = document.createElement("button");
      let btn2 = document.createElement("button");
      btn1.style.height="50%"
      btn1.style.width="20%"
      btn1.style.background="transparent"
      btn1.style.color="white"
      btn1.style.border="2px solid white"
      btn1.style.fontFamily="cursive"


      btn1.addEventListener("click", () => {
        window.location.assign(`./editUser.html?id=${data._id}`);
        
      });


      btn2.style.height="50%"
      btn2.style.width="20%"
      btn2.style.background="transparent"
      btn2.style.color="white"
      btn2.style.border="2px solid white"
      btn2.style.fontFamily="cursive"



      btn1.innerText = "Edit";
      btn2.innerText = "Delete";

      article.append(div1, div2,div3);
      div1.append(img);
      div2.append(h1, h2, h3);
      div3.append(btn1, btn2);
    })
    .catch(() => {
      console.log("want wrong");
    });
}
fetchDetails();
