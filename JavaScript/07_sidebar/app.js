const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')


sidebarToggle.addEventListener('click', ()=>{

    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('side-bar')
    // }
    // else{
    //     sidebar.classList.add('side-bar')

    // }

    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('show-sidebar')
})