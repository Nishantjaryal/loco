function scroll() {
  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.04
  })
}
 scroll()

function menu() {
  const menus = document.querySelectorAll(".menu");
  const elements = document.querySelectorAll(".HideSmall")
  const drop_menu = document.getElementById("mobile-menu")
  const drop_menu_buttons = document.querySelectorAll(".menu2")
  let win_controller = true
  menus.forEach((menu) => {
    menu.addEventListener("click", () => {


      if (win_controller) {
        menu.style.transform = "rotate(135deg)"
        elements.forEach((element) => {
          element.style.transform = "scale(1)"
        })


        win_controller = false
      }
      else {
        menu.style.transform = "rotate(0deg)"
        elements.forEach((element) => {
          element.style.transform = "scale(0)"
        })


        win_controller = true
      }
    })
  })


  let Mobile_controller = true


  drop_menu_buttons.forEach((menu) => {
    menu.addEventListener("click", () => {
      if (Mobile_controller) {
        drop_menu_buttons.forEach((element)=>{
          element.style.transform = "rotate(135deg)"
        })

        drop_menu.style.top = "0"
        Mobile_controller = false

      }
      else {
        drop_menu_buttons.forEach((element)=>{
          element.style.transform = "rotate(0deg)"
        });
        drop_menu.style.top = "-100vh"
        Mobile_controller = true

      }
    })
  })
} menu()

function presentation() {
  const canvas = document.getElementById("page2")
  const nodeLists = document.querySelectorAll(".headelem")
  const marqueLists = document.querySelectorAll(".moving")
  nodeLists.forEach((node,index) => {
    node.addEventListener("mouseover",()=>{
      marqueLists[index].style.display = "inline-block"
      canvas.style.backgroundImage = `url('${node.dataset.img}')`
    })
    node.addEventListener("mouseout",()=>{
      marqueLists[index].style.display = "none"
      canvas.style.backgroundImage = `url('./public/BOLDLY.jpg')`
    })
  });

}presentation()

function setCards() {
  const cards = document.querySelectorAll(".card")
  const h1 = document.querySelectorAll(".cardh1")
  cards.forEach((ele,index)=>{
    ele.style.backgroundImage = `url("${ele.dataset.card}")`
    ele.addEventListener("mouseover",()=>{
      ele.style.background = "black"
      h1[index].style.color = "white"

    })
    ele.addEventListener("mouseout",()=>{
      ele.style.backgroundImage = `url("${ele.dataset.card}")`
      ele.style.backgroundSize = `cover`
      ele.style.backgroundPosition = `center`
      h1[index].style.color = "transparent"

    })
  })
}setCards()