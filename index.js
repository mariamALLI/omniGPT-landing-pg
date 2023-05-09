const sidebar = document.getElementById('sidebar')
const clickClose = document.getElementById('click_close')
const clickOpen = document.getElementById('click_open')


clickOpen.addEventListener('click', ()=>{
    sidebar.style.right = '0'
})

clickClose.addEventListener('click', ()=>{
    sidebar.style.right = '-200px'
})