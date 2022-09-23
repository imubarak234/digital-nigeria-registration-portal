const exhibitor = document.getElementById('exibitor-form');

const postToSheat = (info) => {

  fetch("https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(info)
})
  .then(response => response.json())
  .then(data => console.log('success: ', data))
  .catch((error) => {
    console.error('Error: ', error)
  })
}

// exhibitor.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const body = {}
//   let info = e.target
//   let forms = info.querySelectorAll('.col-md-12');
//   Array.prototype.slice.call(forms)
//   .forEach((e) => {
//     let valueing = e.getElementsByTagName('input')[0].value;
//     let keying = e.getElementsByTagName('label')[0].innerText;
//     body[keying] = valueing; 
//   })
  
//   console.log(body);
//   console.log(info);
//   console.log(info.querySelector("input[name='email']").value);
// })

const formEmails = (formId, category) => {
  const body = {}
  formId.addEventListener('submit', (e) => {
    e.preventDefault();
    let info = e.target
  let forms = info.querySelectorAll('.col-md-12');
  Array.prototype.slice.call(forms)
  .forEach((e) => {
    let valueing = e.getElementsByTagName('input')[0].value;
    let keying = e.getElementsByTagName('label')[0].innerText;
    body[keying] = valueing; 
  })

  body['Categories'] = category;

  postToSheat(body)
  console.log(body);
  });

}

formEmails(exhibitor, 'Mike');


// var forms = document.querySelectorAll('.needs-validation')

//       // Loop over them and prevent submission
//       Array.prototype.slice.call(forms)
//         .forEach(function (form) {
//           form.addEventListener('submit', function (event) {
//             if (!form.checkValidity()) {
//               event.preventDefault()
//               event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//           }, false)
//         })