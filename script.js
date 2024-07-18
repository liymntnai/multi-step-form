'use strict'

const carousels = document.querySelectorAll('.carousel')
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const addOns = document.querySelectorAll('.add-on');
const total = document.querySelector('.result--total');
const additions = document.querySelector('add')


addOns.forEach(function(a){
    a.addEventListener('click', function(e){
        if(e.target.classList.contains('checkmark'))
            a.classList.toggle('checked');
       
    })
})
let curSlide = 0;

const forwardSlide = function(e){
    e.preventDefault(); 
    if(validateInfo())
    showSlide(1)
}
const backwardSlide = function(e){
e.preventDefault();
 showSlide(-1)
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
    
    
