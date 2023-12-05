const btn = document.querySelector("#btn")

function validatorEmail(inputEmail) {
  const email = inputEmail.value
  if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    inputEmail.classList.add("erro")
    inputEmail.classList.remove("success")
    const error = new Error("Email Invalido")
    error.input = "email"
    throw error
  } else {
    inputEmail.classList.remove("erro")
    inputEmail.classList.add("success")
    document.querySelector("#email-error").textContent = ""
  }
}

function validatorPassword(inputPassword) {
  const password = inputPassword.value
  if(!password.match(/[A-Z]/g) || !password.match(/[a-z]/g) || !password.match(/\d/) || !password.match(/\W/) || !password.match(/[a-zA-Z\d\W]{8,}/)) {
    inputPassword.classList.add("erro")
    inputPassword.classList.remove("success")
    const error = new Error("Senha Invalida")
    error.input = "password"
    throw error
  } else {
    inputPassword.classList.remove("erro")
    inputPassword.classList.add("success")
    document.querySelector("#password-error").textContent = ""
  }
}

btn.addEventListener("click", (ev) => {
  ev.preventDefault()

  const inputEmail = document.querySelector("#email")
  const inputPassword = document.querySelector("#password")

  try {
    validatorEmail(inputEmail)
    validatorPassword(inputPassword)
  } catch(error) {
    document.querySelector(`#${error.input}-error`).textContent = error.message
  }
})

console.log(btn.getAttribute("id"))
