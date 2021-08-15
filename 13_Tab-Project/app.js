const tabBtns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content') 

about.addEventListener('click', (e)=>{
    // console.log(e.target.dataset.id)
    const myId = e.target.dataset.id;
    if(myId){
        // remove active from all button
        tabBtns.forEach((btn)=>{
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
  // hide all articles and show which one is match
    articles.forEach((article)=>{
        article.classList.remove('active')
    })
    const element = document.getElementById(myId)
    element.classList.add('active')
    }
})