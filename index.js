const exhibitor = document.getElementById('exibitor-form');
const master = document.getElementById('master-clas-form');
const participants = document.getElementById('participant-form');

const isEmail = (data, inputEmail) => {
  let answer = false;

  for (let x = 0; x < data.length; x++) {
    for (const [key, value] of Object.entries(data[x])) {
      if (key == 'Email') {
        if (inputEmail == value) {
          answer = true;
          break;
        }
      }
    }
  }

  return answer;
};

const postParticipants = async (info) => {
  let answer = true;

  await fetch('https://sheet.best/api/sheets/7d520258-c5f2-4cc6-8644-436ff5e3e6c5')
  .then((res) => (res.json()))
  .then((data) => {
    if ( !isEmail(data, info.Email) ) {
      fetch('https://sheet.best/api/sheets/7d520258-c5f2-4cc6-8644-436ff5e3e6c5', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('success: ', data);
        })
        .catch((error) => {
          console.error('Error: ', error);
        });
    }
    else {
      answer = false;
    }
  });

  return answer;
} 

const postToSheat = async (info) => {
  let answer = true;

  await fetch('https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67')
  .then((res) => (res.json()))
  .then((data) => {
    if ( !isEmail(data, info.Email) ) {
      fetch('https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('success: ', data);
        })
        .catch((error) => {
          console.error('Error: ', error);
        });
    }
    else {
      answer = false;
    }
  });

  return answer;
};

const getSheat = () => {
  fetch('https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67')
    .then((res) => (res.json()))
    .then((data) => console.log(data));
};

const templateId = (args) => {

  let id;

  if ( args == "Participant" ){
    id = "d-3e8098258c3d4124b66e8484a78e9b74";
  }
  else if ( args == "Exhibitor" ){
    id = "d-6af0f0aab90e44378eb8b8c7c16b655a";
  }
  else if ( args == "Master Class" ){
    id = "d-b00b41d90a9d4c7abf647a3b5353f3d0";
  }
  else {
    id = "d-3e8098258c3d4124b66e8484a78e9b74";
  }

  return id;
}

// http://localhost:3000/api/v1/emails

const emailForm = async (email, name, category) => {

  await fetch('https://digitalnigeria.herokuapp.com/api/v1/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email" : email,
      "name" : name,
      "category" : category,
      "template" : templateId(category)
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('success: ', data);
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
};


const formEmails = (formId, category) => {
  const body = {};

  if (formId != null) {
    formId.addEventListener('submit', (e) => {

      e.preventDefault();
      const info = e.target;
      const forms = info.querySelectorAll('.col-md-12');
      Array.prototype.slice.call(forms)
        .forEach((e) => {
          const valueing = e.getElementsByTagName('input')[0].value;
          const keying = e.getElementsByTagName('label')[0].innerText;
          body[keying] = valueing;
        });

      body.Categories = category;

      const recentDate = new Date();
      body.Date = recentDate;

      (async () => {
        formId.reset();

        const waiting = document.getElementById('pops-wait');
        waiting.classList.add('flex');
        waiting.classList.remove('displays');

        if(body.Categories != 'Participant'){
          if (await postToSheat(body)) {
           
            waiting.classList.remove('flex');
            waiting.classList.add('displays');
  
            emailForm(body.Email, `${body["Last Name"]} ${body["First Name"]}`, body.Categories);
  
            const popping = document.getElementById('pops');
            popping.classList.add('flex');
            popping.classList.remove('displays');
  
            const close = document.getElementById('close-button');
  
            close.addEventListener('click', () => {
              popping.classList.add('displays');
              popping.classList.remove('flex');
            });
          } else {
            waiting.classList.remove('flex');
            waiting.classList.add('displays');
  
            const poppingFalse = document.getElementById('pops-false');
            poppingFalse.classList.add('flex');
            poppingFalse.classList.remove('displays');
  
            const closeFalse = document.getElementById('close-button-false');
  
            closeFalse.addEventListener('click', () => {
              poppingFalse.classList.remove('flex');
              poppingFalse.classList.add('displays');
            });
          }
        }
        else{
          if (await postParticipants(body)) {
           
            waiting.classList.remove('flex');
            waiting.classList.add('displays');
  
            emailForm(body.Email, `${body["Last Name"]} ${body["First Name"]}`, body.Categories);
  
            const popping = document.getElementById('pops');
            popping.classList.add('flex');
            popping.classList.remove('displays');
  
            const close = document.getElementById('close-button');
  
            close.addEventListener('click', () => {
              popping.classList.add('displays');
              popping.classList.remove('flex');
            });
          } else {
            waiting.classList.remove('flex');
            waiting.classList.add('displays');
  
            const poppingFalse = document.getElementById('pops-false');
            poppingFalse.classList.add('flex');
            poppingFalse.classList.remove('displays');
  
            const closeFalse = document.getElementById('close-button-false');
  
            closeFalse.addEventListener('click', () => {
              poppingFalse.classList.remove('flex');
              poppingFalse.classList.add('displays');
            });
          }
        }

        
      })();
    });
  }
};

formEmails(exhibitor, 'Exhibitor');
formEmails(master, 'Master Class');
formEmails(participants, 'Participant');
