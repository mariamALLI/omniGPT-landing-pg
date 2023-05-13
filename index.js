const sidebar = document.getElementById('sidebar')
const clickClose = document.getElementById('click_close')
const clickOpen = document.getElementById('click_open')


clickOpen.addEventListener('click', ()=>{
    sidebar.style.right = '0'
})

clickClose.addEventListener('click', ()=>{
    sidebar.style.right = '-200px'
})

// This is script file

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    // navText:["<i class='fa-solid fa-arrow-left'></i>",
    //          "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})

