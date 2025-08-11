export function contactForm() {
    //variables
const form = document.querySelector('#updateContactForm');

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

      fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formFields
      })
      .then(response => response.json())
      .catch(error => console.log(error));

};

//event listener
form.addEventListener('submit', submitAjaxForm);
}
