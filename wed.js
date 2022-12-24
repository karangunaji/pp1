// about shoe more area 

let readMoreBtn = document.querySelector('.Read-more-content')
let readMoreContent;

document.querySelector("#Read").onclick = ()=>{
    readMoreBtn.classList.toggle('show-content');
  
}



// navbar

let navBar = document.querySelector('.navbar')

document.querySelector('.menu-btn').onclick = () =>{
    navBar.classList.toggle('shownav');
}






// skills show more 


const skillsItems = document.querySelectorAll('.skill')


skillsItems.forEach(skill => {
    skill.querySelector('#head').addEventListener('click', () =>{
        skill.querySelector('.items').classList.toggle('show-items')
    })
})


// swipper JS

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    // hashNavigation: {
    //   watchState: true,
    // },
    autoPlay: {
        delay:3000,
        disableOnInteraction:false,
    },
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




