function fetchData1() {
  fetch(`http://localhost:5000/users`)
    .then((data) => {
      return data.json();
    })
    .then((users) => {
      users.forEach((user) => {
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.width = "100%";
        // document.body.style.height = "300vh";
        document.body.style.background = "url(../Assets/BackUser.jpg)";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";

        document.body.style.boxSizing = "border";

        document.body.style.flexWrap = "wrap";
        document.body.style.gap = "50px";
        document.body.style.marginTop = "50px";

        let article = document.createElement("article");
        article.style.height = "450px";
        article.style.width = "300px";
        article.style.border = "4px solid black";
        article.style.borderRadius = "30px";
        article.style.boxShadow = "0px 0px 30px black";

        let div1 = document.createElement("div");
        div1.style.height = "50%";
        div1.style.width = "70%";

        let img = document.createElement("img");
        img.src = "../Assets/DogProf.webp";
        img.style.height = "100%";
        img.style.width = "100%";
        img.style.borderRadius = "50%";
        img.style.marginLeft = "50px";
        img.style.border = "2px solid black";

        let div2 = document.createElement("div");
        div2.style.height = "30%";
        div2.style.width = "100%";
        div2.style.display = "flex";
        div2.style.alignItems = "center";
        div2.style.justifyContent = "center";
        div2.style.flexDirection = "column";
        div2.style.marginTop = "20px";
        // div2.style.paddingTop="20px"

        let h1 = document.createElement("h1");
        h1.innerText = `Name:${user.name}`;

        let h2 = document.createElement("h3");
        h2.innerText = `Email:${user.email}`;
        let h3 = document.createElement("h3");
        h3.innerText = `Hi! Welcome to ${user.name} Profile`;

        let div3 = document.createElement("div");
        div3.style.height = "20%";
        div3.style.width = "100%";
        div3.style.display = "flex";
        div3.style.alignItems = "center";
        div3.style.justifyContent = "center";

        let profile = document.createElement("button");
        profile.style.height = "40px";
        profile.style.width = "100px";
        profile.innerText = "Profile";
        profile.style.backgroundColor = "transparent";
        profile.style.border = "2px solid black";
        profile.style.color = "black";
        profile.style.borderRadius = "20px";
        profile.style.boxShadow = "0px 0px 20px black";
        profile.style.fontSize = "20px";
        profile.style.textShadow = "0px 0px 20px black";
        profile.style.cursor = "pointer";

        profile.addEventListener("click", () => {
          window.location.assign(`./details.html?id=${user._id}`);
        });

        div2.append(h1, h2, h3);
        div1.append(img);
        div3.append(profile);
        article.append(div1, div2, div3);
        document.body.appendChild(article);
      });
    })
    .catch(() => {
      console.log("want wrong");
    });
}
fetchData1();
