let inputs = document.querySelectorAll("input");

function formHandle() {
  event.preventDefault();
  let payload = {
    name: inputs[0].value,
    email: inputs[1].value,
    phNum: inputs[2].value,
    createpass: inputs[3].value,
  };
  fetch(`http://localhost:5000/formData`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      if(inputs[0].value== ""||inputs[1].value==""||inputs[2].value==""||inputs[3].value==""){
          alert(`Fill The Form`)
      }else{
        console.log(res);
      inputs[0].value= "";
      inputs[1].value=""
      inputs[2].value=""
      inputs[3].value=""
      }
      
    })
    .catch((err) => {
      console.log(err);
    });
}
