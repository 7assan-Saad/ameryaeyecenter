
const pathName = window.location.pathname
const pageName = pathName.split('/').pop()

if (pathName === '/' || pageName === 'index.html') {
  document.querySelector('.home').classList.add('active')
  document.querySelector('.bottom-navbar .home').classList.add('active')
}
    
else if (pageName === 'about.html') {
  document.querySelector('.about').classList.add('active')
  document.querySelector('.bottom-navbar .about').classList.add('active')
}
      
else if (pageName === 'blog.html') {
  document.querySelector('.blog').classList.add('active')
  document.querySelector('.bottom-navbar .blog').classList.add('active')
}
  
else if (pageName === 'book-appointment.html') {
  document.querySelector('.bottom-navbar .appointment').classList.add('active')
}