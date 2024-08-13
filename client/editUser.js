let url = window.location.search;
      let obj = new URLSearchParams(url);
      let id = obj.get("id");

      let section = document.querySelector("section");
      let form = document.querySelector("form");
      let inputs = document.querySelectorAll("input");

      function getData() {
        
        fetch(`http://localhost:5000/users/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            inputs[0].value = data.name;
            inputs[1].value = data.email;
            inputs[2].value = data.phNum;
            inputs[3].value = data.createpass;
          });
      }
      getData();

      function formHandle() {
        let payload = {
          name: inputs[0].value,
          email: inputs[1].value,
          phNum: inputs[2].value,
          createpass: inputs[3].value,
        };
        // console.log(payload);
        fetch(`http://localhost:5000/users/${id}`, {
          methods: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload)
        })

          .then(() => {
            console.log("data Upated");
          })
          .catch(() => {
            console.log("Failure");
          });
      }
      formHandle();
    