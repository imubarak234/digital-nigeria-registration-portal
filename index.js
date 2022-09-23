const exhibitor = document.getElementById('exibitor-form');
const master = document.getElementById('master-clas-form');
const participants = document.getElementById('participant-form');

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

const formEmails = (formId, category) => {
  const body = {}
  if(formId != null)
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
  formId.reset();
  console.log(body);
  });

}

formEmails(exhibitor, 'Exhibitor');
formEmails(master, 'Master Class');
formEmails(participants, 'Participants');