let sendButton      = document.querySelector('.send')
let cencelButton    = document.querySelector('.cencel')

let bookingTitle    = document.querySelector(".booking-title").textContent
let customerName    = document.getElementById("name")
let phone           = document.getElementById("phone")
let whatsNum        = document.getElementById("whats-num")
let msg             = document.getElementById("msg")

sendButton.addEventListener("click", () => {

  let whatsURL = `https://wa.me/+201023532156?text=
  ${bookingTitle}%0a
  الاسم : ${customerName.value}%0a
  رقم الموبايل : ${phone.value}%0a
  رقم الواتس : ${whatsNum.value}%0a
  رسالة / استفسار : ${msg.value}
  `
  window.open(whatsURL)
    
})

cencelButton.addEventListener("click", () => {
  customerName.value = ''
  phone.value = ''
  whatsNum.value = ''
  msg.value = ''
})