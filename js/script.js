const container = document.querySelector('.container');
const sidebar = container.querySelector('.sidebar');
const navIcon = container.querySelectorAll('.nav-menu ul li a i');

container.addEventListener('click',(e)=>{
    if(e.target.className == 'fas fa-bars'){
        sidebar.classList.add('active');
    } else{
        sidebar.classList.remove('active');
    }
});

navIcon.forEach((icon)=>{
    const link = icon.parentNode.getAttribute('href');
    const title = link.split('#');
    icon.setAttribute('title',title[1]);
});