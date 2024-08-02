'use strict'

const carousels = document.querySelectorAll('.carousel')
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const addOns = document.querySelectorAll('.add-on');
const total = document.querySelector('.result--total');
const labelErrors = document.querySelectorAll('.l-error');
const additions = document.querySelector('.add')
const arcadePrice = 9
const advancedPrice = 12
const proPrice = 15
var addText = []

let curSlide = 1;
let bill=arcadePrice


total.textContent = `+${bill}/mo`



addOns.forEach(function(a){

    a.addEventListener('click', function(e){
        if(e.target.classList.contains('checkmark'))

         {  
            if(a.classList.contains('checked')){

             a.classList.remove('checked');
             bill -= Number(a.querySelector('.price--addon').textContent.at(2));
             total.textContent = `+${bill}/mo`;
             var price =a.querySelector('.price--addon').textContent 
             var title= a.querySelector('.md-bold').textContent 
            //  if checked then add price and title to the array
            //  else remove price and title from array
            removeElement(addText,title);
             }
         else{
             a.classList.add('checked');
             bill += Number(a.querySelector('.price--addon').textContent.at(2));
             total.textContent = `+${bill}/mo`;
             var price = a.querySelector('.price--addon').textContent 
             var title = a.querySelector('.md-bold').textContent 

             createElement(addText, price, title)
             
         }
        }
       
    })
})
//////// Failures 
// const displayTitleAndPrice = function(price, title, state) {
//     for(var i = 0; i < price.length; i++) {
//         const addText = document.createElement('div')
            
//     }
// }
const createElement = function(addText, price, title) {
    var div = document.createElement('div')
    div.classList.add('add-payment') 
    div.classList.add('flex-between')
    div.innerHTML = 
    `<p class="md-thin">${title}</p>
    <p class="md-month result--o">${price}</p>`
    
    additions.append(div)
    addText.push(div)

}
const removeElement = function(addText,title) {
    console.log(addText.length-1);
    console.log(addText[addText.length]);
    // if(addText.length<1)
    let index=addText.findIndex( div => div.firstChild.textContent===title)
    console.log(index);
    
    additions.removeChild(addText[index])
    addText.splice(index, 1)
}

const forwardSlide = function(e){
    e.preventDefault(); 
    if(validateInfo())
    showSlide(1)
    // checkPrevBtn()
    if(curSlide===0)
        prevBtn.style.display='none'
    else
    prevBtn.style.display='inline-block'
}
const backwardSlide = function(e){
e.preventDefault();
 showSlide(-1)
//  checkPrevBtn()
if(curSlide===0)
    prevBtn.style.display='none'
else
prevBtn.style.display='inline-block'
}
const showSlide = function(n){
    carousels[curSlide].classList.toggle('active');
    curSlide+=n
    if(curSlide<0)
     curSlide=0;
    checkPrevBtn()
    carousels[curSlide].classList.toggle('active');
    activateDot()
}
const checkPrevBtn = function(){
    if(curSlide===carousels.length-1){ 
        nextBtn.classList.add('confirm');
        nextBtn.textContent = 'Confirm'
        }
        if(curSlide<carousels.length-1&&curSlide>0){
            nextBtn.classList.remove('confirm');
            nextBtn.textContent = 'Next Step'
        }
        // curSlide=0;
   
}

const activateDot = function(){
    
    const numbers = document.querySelectorAll('.number')
    numbers.forEach
     (function(n){
     n.classList.remove('active')
     });
    numbers[curSlide].classList.add('active')
    }

activateDot()

const moveToSlide1 = function(e){
    e.preventDefault()
carousels.forEach(function(carousel){
carousel.classList.remove('active')
})
carousels[1].classList.add('active')
curSlide=1
activateDot()
checkPrevBtn()
}

const validateInfo = function(){
    const input = [...carousels[curSlide].querySelectorAll('input')]
    // console.log(input);
   let valid = true
    input.forEach((i,index) => {
        if(!i.checkValidity()){
            valid = false
            console.log(i.validationMessage)
            labelErrors[index].textContent = i.validationMessage
            i.classList.add('error')
            i.focus()
        }
        else{

            labelErrors[index].textContent = ''
            i.classList.remove('error')
        }
// return true
    })

  return valid
    }
document.querySelector('.reset').addEventListener('click',
        moveToSlide1
    );
prevBtn.addEventListener('click', backwardSlide)
nextBtn.addEventListener('click', forwardSlide)

    //Togle monthly-yearly switch
    const mySwitch = document.querySelector('.switch')
    const monthly = document.querySelector('.billing .month');
    const yearly = document.querySelector('.billing .yearly');
    const slider = document.querySelector('.billing .slider')
    let monthlyPlan=true


    var sliderCounter = 1
    
    
    mySwitch.addEventListener('click', function(e){

        e.preventDefault()
        if(monthly.classList.contains('md-bold')){

            monthly.classList.remove('md-bold')
            yearly.classList.add('md-bold')
            slider.style.transform = 'translateX(11px)'
        }
        else{
            monthlyPlan=false
            monthly.classList.add('md-bold')
            yearly.classList.remove('md-bold')
            slider.style.transform = 'translateX(0px)'
        }

    })

//     const submitBtn = document.querySelector('.submit')







//     let valid = true

//     const labelError = document.querySelectorAll('.l-error')
//     const textInput = document.querySelectorAll('input[type="text"]');

//     textInput.forEach(function(input, i){
//         if(input.value === ''){
//             input.classList.add('error')
//             labelError[i].classList.remove('none')
            
//             valid = false
//         }else{
//             input.classList.remove('error')
//             labelError[i].classList.remove('error')
            
//             valid=true
//         }
//     })
//     console.log(valid);
    
//    return valid
    
    
