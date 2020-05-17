let loginForm = document.querySelector('form')
loginForm.addEventListener('submit', e => {
    e.preventDefault()

    let emailField = document.querySelector('#ebar')
    let emailFeedbackField = document.querySelector('#email-feedback')
    let email = emailField.value

    if (!email) {
        emailFeedbackField.innerText = "Email is required"
        emailField.classList.add('invalid-border')
        return
    }

    let emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (!emailPattern.test(email)) {
        emailFeedbackField.innerText = "Email is invalid"

        emailField.classList.add('invalid-border')
        return
    }
    emailField.classList.remove('invalid-border')
    emailFeedbackField.innerText = ""

})


let pass = document.querySelector('form')
pass.addEventListener('submit', e => {
    e.preventDefault()

    let password = document.querySelector('#pbar')
    let passwordFeedbackField = document.querySelector('#password-feedback')
    let pass = password.value

    if (!pass) {
        passwordFeedbackField.innerText = "Password is required"
        password.classList.add('invalid-border')
        return
    }
    passwordFeedbackField.innerText = ""

})

let passs = document.querySelector('form')
passs.addEventListener('submit', e => {

    let pass1 = document.querySelector('#pbar')
    let email1 = document.querySelector('#ebar')
    let pass2 = pass1.value

    let emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (emailPattern.test(email1.value) && (pass2)) {

        window.location.href = "./welcome.html";


    }

})
