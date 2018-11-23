// document.querySelector('.form-container input[type="submit"]').addEventListener('click', function () {
//   const input = document.querySelector('.form-container input[type="text"]');
//   if(input.value !== "") {
//     const value = input.value;
//     input.value = "";
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState = 4 && this.status == 200) {
//         debugger;
//       }
//     };
//     xhttp.open('GET', 'http://192.168.33.20', true);
//     xhttp.send();
//   }
// })

document.querySelector('.choice-container').addEventListener('click', (el) =>{
  if (el.target.dataset.action !== undefined) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // alert(this.responseText);
        document.querySelector("#resultat").innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'http://192.168.33.20/move/' + el.target.dataset.action, true);
    xhttp.send();
  }
})
