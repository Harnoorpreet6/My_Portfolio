export function contactForm() {
    //variables

  console.log('h2');

const form = document.querySelector('#updateContactForm');
const successMsg = document.querySelector('.success-msg');
const errorMsg = document.querySelector('.error-msg');
console.log(successMsg, errorMsg);
console.log('h1');
//functions
function submitAjaxForm(e) {
    e.preventDefault();

    const currentForm = e.currentTarget;
    const path = "addContactJob.php";
    const formFields =
      "f_name=" +
      currentForm.elements.f_name.value +
      "&l_name=" +
      currentForm.elements.l_name.value +
      "&email=" +
      currentForm.elements.email.value +
      "&message=" +
      currentForm.elements.message.value;

      successMsg.classList.add("hidden");
      

      errorMsg.classList.add("hidden");


      fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formFields
      })
      .then(response => {
        successMsg.classList.remove("hidden");
        console.log('run, ', successMsg);
      })
      .catch(error => {
        errorMsg.classList.remove("hidden");
                console.log('error, ', successMsg);

        console.log(error);
      });

};

//event listener
form.addEventListener('submit', submitAjaxForm);
}
