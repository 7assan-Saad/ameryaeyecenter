
const pathName = window.location.pathname
const pageName = pathName.split('/').pop()

if (pageName === 'index.html')
  document.querySelector('.home').classList.add('active')
    
else if (pageName === 'about.html')
  document.querySelector('.about').classList.add('active')
    
// else if (pageName === 'index.html#services')
//   document.querySelector('.services').classList.add('active')
  
// else if (pageName === 'index.html#testimonials')
//   document.querySelector('.testimonials').classList.add('active')
  
else if (pageName === 'blog.html')
  document.querySelector('.blog').classList.add('active')
  
else if (pageName === 'questions.html')
  document.querySelector('.questions').classList.add('active')