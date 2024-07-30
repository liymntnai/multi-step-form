'use strict'

const carousels = document.querySelectorAll('.carousel')
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const addOns = document.querySelectorAll('.add-on');
const total = document.querySelector('.result--total');
const additions = document.querySelector('.add')
const arcadePrice = 9
const advancedPrice = 12
const proPrice = 15


let price=[]
let title=[]
let curSlide = 1;
let bill=arcadePrice
// let ex



total.textContent = `+${bill}/mo`
addOns.forEach(function(a){

    a.addEventListener('click', function(e){
        if(e.target.classList.contains('checkmark'))
         {  if(a.classList.contains('checked')){

             a.classList.remove('checked');
             bill -= Number(a.querySelector('.price--addon').textContent.at(2));
             total.textContent = `+${bill}/mo`;
             price.pop( a.querySelector('.price--addon').textContent )
             title.pop( a.querySelector('.md-bold').textContent )
         
        console.log(price);
        
         }
         else{
             a.classList.add('checked');
             bill += Number(a.querySelector('.price--addon').textContent.at(2));
             total.textContent = `+${bill}/mo`;
             price.push( a.querySelector('.price--addon').textContent )
             title.push( a.querySelector('.md-bold').textContent )
             console.log(price);
             
         }
         for(let i=0; i<title.length; i++) {
            // additions.add(addText())
            const addText = document.createElement('div')
            addText.classList.add('add-payment') 
            addText.classList.add('flex-between')
            addText.innerHTML = 
            `<p class="md-thin">${title[i]}</p>
             <p class="md-month result--o">${price[i]}</p>`

             additions.append(addText)
         }}
       
    })
})
const addText = function(){
    const addText = document.createElement('div')
    addText.classList.add('add-payment') 
    addText.classList.add('flex-between')
    addText.innerHTML = 
    `<p class="md-thin">${a.querySelector('.md-bold').textContent}</p>
     <p class="md-month result--o">${a.querySelector('.price--addon').textContent}</p>`
     return addText;
    }

const checkPrevBtn = function(){
    if(curSlide===0)
        prevBtn.style.display='none'
    else
    prevBtn.style.display='inline-block'
}
const forwardSlide = function(e){
    e.preventDefault(); 
    if(validateInfo())
    showSlide(1)
    checkPrevBtn()
}
const backwardSlide = function(e){
e.preventDefault();
 showSlide(-1)
 checkPrevBtn()
}
const showSlide = function(n){
    carousels[curSlide].classList.toggle('active');
    curSlide+=n
    if(curSlide<0)
     curSlide=0;
    if(curSlide===carousels.length-1){ 
    nextBtn.classList.add('confirm');
    nextBtn.textContent = 'Confirm'
    }
    if(curSlide<carousels.length-1&&curSlide>0){
        nextBtn.classList.remove('confirm');
        nextBtn.textContent = 'Next Step'
    }
    // curSlide=0;
    carousels[curSlide].classList.toggle('active');
    activateDot()
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
prevBtn.addEventListener('click', backwardSlide)
nextBtn.addEventListener('click', forwardSlide)

const validateInfo = function(){
    const input = [...carousels[curSlide].querySelectorAll('input')]
    // console.log(input);
   let valid = true
    input.forEach(i => {
        if(!i.checkValidity()){
            valid = !valid
            console.log(i.validationMessage)
        }
// return true
    })
  return valid
    }

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
    
    
