'use strict'

const leftButton = document.querySelector('#left')
const rightButton = document.querySelector('#right')
const images = document.querySelectorAll('.slider_component')
const maxLength = images.length - 1
let currentIndex = 0

const updateSlider = function(){
    images.forEach( (element, index) => {
        element.style.transform = `translateX( ${ (index - currentIndex) * 100 }% )`
    } )
}

leftButton.addEventListener('click', function(){
    if(currentIndex === 0){
        currentIndex = maxLength
    }
    else {
    currentIndex--;
    }
    updateSlider()
})

rightButton.addEventListener('click', function(){
    if(currentIndex === maxLength){
        currentIndex = 0
    }else{
    currentIndex++;
    }
    updateSlider()
})



