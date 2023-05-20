
 // ------------------------------------------------------------SideMenu

 let gameMenu=document.querySelector(".categories_list_wrapped")
 let showMore=document.querySelector(".list_wrapper")
 let menuList = document.querySelector(".categories_list")
 function insertAfter(newNode, existingNode) {
     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
 }

 showMore.addEventListener('click',() => {
  
   if(showMore.innerHTML==="More"){
     showMore.innerHTML="Less"
    gameMenu.classList.add("showMore") 
    insertAfter(showMore, gameMenu);
  }
    else{ gameMenu.classList.remove("showMore") 
    showMore.innerHTML="More"}
    insertAfter(showMore, menuList);

})


// ----------------------------------------------------banner slide
let bannerInfo = document.querySelector(".banner_info")
let firstBanner = document.querySelector(".banner-first")
let secondBanner=document.querySelector(".banner-second")
let bg=document.querySelector(".game_categories_section")
let countNumber=0


setInterval(()=>{
bg.style.transition="opacity 1s"  

if(countNumber===0){ 
  firstBanner.classList.add("bannerFirst_infoShow")
  secondBanner.classList.remove("bannerSecond_infoShow")
 bg.style.backgroundImage="url(./img/robot-game-banner_2.jpg)" 
countNumber=1 
 }
else if(countNumber===1){
  firstBanner.classList.remove("bannerFirst_infoShow")
  secondBanner.classList.add("bannerSecond_infoShow")
bg.style.backgroundImage="url(./img/main-banner-01.jpg)"    
countNumber=0
}
},6000)


 //------------------------------------------------ promoted elements slider 

let Elslider=document.querySelector(".elementors_list")
let item=document.querySelector(".elementors_item")
let ElWidth=document.querySelector(".elementors_item").offsetWidth+parseInt(getComputedStyle(item).marginRight)
let move=0
setInterval(()=>{
  if(move===0){
    move=1
    Elslider.style.transform="translateX("+(-ElWidth)+"px)"
  Elslider.style.transition="2s"
}

Elslider.addEventListener('transitionend',()=>{
if(move===1){ 
  Elslider.appendChild(Elslider.firstElementChild)
}
  move = 0
  Elslider.style.transform="translateX(0)"
  Elslider.style.transition="none" 
 
  
 })

 }, 3000)


// -----------------------------------------GamesListsSLider

let gamelistSlider = document.querySelectorAll(".slider-list"),
    sliderRect,
    sliderLeft,
    sliderWidth,
    buttonLeft = document.querySelectorAll(".btn-left"),
    buttonRight = document.querySelectorAll(".btn-right"),
    slidermoveIndex, 
    windowPadding =parseInt(getComputedStyle(document.body).paddingRight),
    SlidersLeft=document.querySelectorAll(".slider_lists");
   
    function getIndex(indexNumber){
    gamelistSlider[indexNumber].sliderMove={
        move:0}
    gamelistSlider[indexNumber].moveNumber={
        move:0
    }
    }

    function getSize(indexNumber){
     sliderRect= SlidersLeft[indexNumber].getBoundingClientRect()
    sliderLeft=sliderRect.left

    sliderWidth=gamelistSlider[indexNumber].children[1].offsetWidth+parseInt(getComputedStyle(gamelistSlider[indexNumber].children[indexNumber]).marginRight)    

    slidermoveIndex=Math.round((gamelistSlider[indexNumber].scrollWidth-window.innerWidth+windowPadding+sliderLeft)/sliderWidth)
    
    }
   

    buttonRight.forEach((btn,i)=>{
        getIndex(i)
        btn. addEventListener('click', ()=>{ 
            getSize(i)
            

                gamelistSlider[i].sliderMove.move=gamelistSlider[i].sliderMove.move+sliderWidth
                gamelistSlider[i].style.transform="translate("+(-gamelistSlider[i].sliderMove.move)+ "px)"
                gamelistSlider[i].style.transition="1s"
                gamelistSlider[i].moveNumber.move++

                if(gamelistSlider[i].moveNumber.move>slidermoveIndex){
                gamelistSlider[i].sliderMove.move=0
                gamelistSlider[i].style.transform="translate(0)"
                gamelistSlider[i].moveNumber.move=0}
            })
    }) 
 
    buttonLeft.forEach((btn,i)=>{

        btn.addEventListener('click',()=>{
            getSize(i)

            gamelistSlider[i].sliderMove.move=gamelistSlider[i].sliderMove.move-sliderWidth
            gamelistSlider[i].style.transform="translate("+(-gamelistSlider[i].sliderMove.move)+"px)"
            gamelistSlider[i].style.transition="1s"
            gamelistSlider[i].moveNumber.move--
            
            if( gamelistSlider[i].moveNumber.move<0){
                gamelistSlider[i].sliderMove.move=sliderWidth* slidermoveIndex
                gamelistSlider[i].style.transform="translate("+(-gamelistSlider[i].sliderMove.move)+"px)"
                gamelistSlider[i].moveNumber.move=Math.abs(slidermoveIndex)
                // 
                
            }

        })
    })


// ---------------------------------hover content 

let countdowns=document.querySelectorAll(".game_item > .img_wrapper");
let countdownContent=`
    <ul class="countdown_box flex-row">
        <li class="box_timing countdown_days"> 
            <span>365</span>  <br> Days
            </li>
        <li class="box_timing countdown_days"> 
            <span>24</span>   <br> Hour
            </li>
        <li class="box_timing countdown_days"> 
            <span>60 </span>  <br> Min
            </li>
        <li class=" box_timing countdown_days"> 
            <span>60</span>  <br> Sec
            </li>
    </ul>`
countdowns.forEach((countdown)=>{
    
countdown.insertAdjacentHTML("beforeend",countdownContent);

})


gameItems=document.querySelectorAll(".game_item")
let userInter=`
<span class="product_onHover flex-column">
        <a href="#" class="hover_item"> 
            <object data="img/pro-cart.svg" width="20"  alt=""> </object>
        </a>

        <a  href="#" class="hover_item"> 
            <object data="img/pro-quickview.svg" width="20"  alt=""> </object>
        </a>

        <a  href="#" class="hover_item">
            <object data="img/pro-wishlist.svg" width="20"  alt=""> </object>   
        </a>

        <a href="#" class="hover_item">  
            <object data="img/pro-compare.svg"  width="20" alt=""></object>
        </a>
    </span>`
gameItems.forEach((item)=>{

item.insertAdjacentHTML("beforeend", userInter)

})


// --------------------------------------------articles

let btnLeft=document.querySelector(".art_left"),
    btnRight=document.querySelector(".art_right"),
    sliderArticle=document.querySelector(".blog_articles"),
    articleItem=document.querySelector(".blog_articles > article"),
    sliderArticleWidth=sliderArticle.scrollWidth-window.innerWidth+(windowPadding*2)
     
    btnRight.addEventListener("click", ()=>{

        sliderArticle.style.transform="translateX("+ (-sliderArticleWidth)+"px)"
        sliderArticle.style.transition="1.5s"


    })
    btnLeft.addEventListener("click", ()=>{
        sliderArticle.style.transform="translateX(0px)"
        sliderArticle.style.transition="1s"
            })

// -------------------------------------------------------sideMenu

let menuLogo= document.querySelector(".menu_logo")
menuLogo.addEventListener("click", ()=>{
    document.querySelector(".sideNav").classList.toggle("sideNavOpen")

})

let footerNavItems = document.querySelectorAll(".navItem_container")
let footerNavitem=document.querySelectorAll(".footer_lists")
footerNavItems.forEach((item,i)=>{
item.addEventListener("click", ()=>{
    footerNavitem[i].classList.toggle("footerList_open")
})
})


function myFunction(x) {
   
    if (x.matches) { // If media query matches
        let parentList=document.querySelector(".additional_info")
        let cart = document.querySelector(".userCart")
        let acount = document.querySelector(".account_wishlist")
        parentList.insertBefore(cart, acount)
    }
    if(y.matches){

        footerNavItems.forEach((item)=>{
       
                item.classList.add("menu_items")
       
            })

    }
  }
  
  let x = window.matchMedia("(max-width: 884px)") 
  let y= window.matchMedia("(max-width:593px)")
  myFunction(x) 



