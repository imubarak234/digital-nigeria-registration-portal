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

const postToSheat = async (info) => {
  let answer = true;

  await fetch('https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67')
    .then((res) => (res.json()))
    .then((data) => {
      if (!isEmail(data, info.Email)) {
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
      } else {
        answer = false;
      // console.log("email already exists");
      }
    });

  return answer;
};

const getSheat = () => {
  fetch('https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67')
    .then((res) => (res.json()))
    .then((data) => console.log(data));
};

const emailForm = (email) => {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'digitalnigeria2022@gmail.com',
    Port: '2525',
    Password: 'ED930F949049591E09AB981289F0BCD48F52',
    To: email,
    From: 'digitalnigeria@nitda.gov.ng',
    Subject: 'Digital Nigeria registration',
    Body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>
      <title>
      </title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <style type="text/css">body, html {
        margin: 0px;
        padding: 0px;
        -webkit-font-smoothing: antialiased;
        text-size-adjust: none;
        width: 100% !important;
      }
        table td, table {
        }
        #outlook a {
          padding: 0px;
        }
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
          line-height: 100%;
        }
        .ExternalClass {
          width: 100%;
        }
        @media only screen and (max-width: 480px) {
           table tr td table.edsocialfollowcontainer {width: auto !important;} table, table tr td, table td {
            width: 100% !important;
          }
          img {
            width: inherit;
          }
          .layer_2 {
            max-width: 100% !important;
          }
          .edsocialfollowcontainer table {
            max-width: 25% !important;
          }
          .edsocialfollowcontainer table td {
            padding: 10px !important;
          }
        }
      </style>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">
    </head><body style="padding: 0px; margin: 0px; background: url(&quot;https://api.smtprelay.co/userfile/0d0b99ac-bce0-488d-8237-ac5e2e4f9c73/Digital_Nigeria_Banner_2022_mub_1.jpg&quot;);" data-new-gr-c-s-check-loaded="14.1022.0" data-gr-ext-installed="" data-new-gr-c-s-loaded="14.1022.0">
      <table style="height: 100%; width: 100%;" align="center">
        <tbody>
          <tr>
            <td valign="top" id="dbody" data-version="2.31" style="width: 100%; height: 100%; padding-top: 30px; padding-bottom: 30px;">
              <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
              <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; box-sizing: border-box; width: 100%; margin: 0px auto;">
                <tbody>
                  
                  <tr><td class="drow" valign="top" align="center" style="background-color: #efefef; box-sizing: border-box; font-size: 0px; text-align: center;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="edimg" style="padding: 0px; box-sizing: border-box; text-align: center;"><img src="https://api.smtprelay.co/userfile/0d0b99ac-bce0-488d-8237-ac5e2e4f9c73/digital_Nigeria_logo32022-09-24T16_33_54.png" alt="Obraz" style="border-width: 0px; border-style: none; max-width: 198px; width: 100%;" width="198"></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" class="emptycell" style="padding: 10px;">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse; width: 100%;">
                          <tbody>
                            <tr>
                              <td valign="top" class="edimg" style="padding: 0px; box-sizing: border-box; text-align: center;">
                                <img src="https://api.elasticemail.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/geometric_divider1.png" alt="Image" width="576" style="border-width: 0px; border-style: none; max-width: 576px; width: 100%;">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" class="emptycell" style="padding: 20px;">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                <p class="style1 text-center" style="text-align: center; margin: 0px; padding: 0px; color: #f24656; font-size: 36px; font-family: Helvetica, Arial, sans-serif;">
                                  <strong>THANK YOU
                                  </strong>
                                </p>
                                <p class="text-center" style="text-align: center; margin: 0px; padding: 0px;">for registering with Digital Nigeria 2022</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  
                  
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" class="emptycell" style="padding: 20px;">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                <p class="text-center" style="text-align: center; margin: 0px; padding: 0px;">Have a question? Contact us: digitalnigeria@nitda.gov.ng</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" class="emptycell" style="padding: 20px;">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 14px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                <p class="text-center" style="text-align: center; margin: 0px; padding: 0px;">More Details will be sent to you shortly</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;">
                      <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                      <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                        <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                          <tbody>
                            <tr>
                              <td valign="top" class="edimg" style="padding: 0px; box-sizing: border-box; text-align: center;">
                                <img src="https://api.elasticemail.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/geometric_footer1.png" alt="Image" width="587" style="border-width: 0px; border-style: none; max-width: 587px; width: 100%;">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  
                </tbody>
              </table>
              <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </body></html>`,
  })
    .then((message) => {
      console.log('mail sent successfully', message);
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

        if (await postToSheat(body)) {
          // console.log(body);

          emailForm(body.Email);

          const popping = document.getElementById('pops');
          popping.classList.add('flex');
          popping.classList.remove('displays');

          const close = document.getElementById('close-button');

          close.addEventListener('click', () => {
            popping.classList.add('displays');
            popping.classList.remove('flex');
          });
        } else {
          const poppingFalse = document.getElementById('pops-false');
          poppingFalse.classList.add('flex');
          poppingFalse.classList.remove('displays');

          const closeFalse = document.getElementById('close-button-false');

          closeFalse.addEventListener('click', () => {
            poppingFalse.classList.remove('flex');
            poppingFalse.classList.add('displays');
          });
        }
      })();
    });
  }
};

formEmails(exhibitor, 'Exhibitor');
formEmails(master, 'Master Class');
formEmails(participants, 'Participants');
