
let sendBtn = document.querySelector('.send-btn')

sendBtn.addEventListener("click", () => {
  let whatsInput = document.querySelector('.whats-input').value
  let whatsURL = `https://wa.me/message/OI5TOW23MLB7J1?text=${whatsInput}`
  window.open(whatsURL)
  whatsInput.value = ''
})