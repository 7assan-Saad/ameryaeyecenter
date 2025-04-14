let sendButton      = document.querySelector('.send')
let cencelButton    = document.querySelector('.cencel')

let bookingTitle    = document.querySelector(".booking-title").textContent
let customerName    = document.getElementById("name")
let phone           = document.getElementById("phone")
let whatsNum        = document.getElementById("whats-num")
let msg             = document.getElementById("msg")

// service
let service        = document.getElementsByName("service")
let serviceChecked = document.getElementById("revealed").nextElementSibling.textContent.trim()

// branch
let branch        = document.getElementsByName("branch")
let branchChecked = document.getElementById("amerya-branch").nextElementSibling.textContent.trim()

// console.log(service[0])

// check radio function
function checkRadio(nameAttr, updateCallback) {
  nameAttr.forEach(selected => {
    selected.addEventListener('change', (e) => {
      nameAttr.forEach( uncheck => { 
        uncheck.removeAttribute('checked')
      })
      e.target.setAttribute('checked', '')
      updateCallback( e.target.nextElementSibling.textContent.trim() )
    })
  })
}

checkRadio(branch, (newValue) => { branchChecked = newValue }) // branch
checkRadio(service, (newValue) => { serviceChecked = newValue }) // service


sendButton.addEventListener("click", () => {

  let whatsURL = `https://wa.me/+201023532156?text=
  ${bookingTitle}%0a
  الاسم : ${customerName.value}%0a
  رقم الموبايل : ${phone.value}%0a
  رقم الواتس : ${whatsNum.value}%0a
  الخدمة : ${serviceChecked}%0a
  الفرع : ${branchChecked}%0a
  رسالة / استفسار : ${msg.value}
  `
  window.open(whatsURL)
    
})

cencelButton.addEventListener("click", () => {
  customerName.value = ''
  phone.value = ''
  whatsNum.value = ''
  msg.value = ''
  service[0].click()
  branch[0].click()
})