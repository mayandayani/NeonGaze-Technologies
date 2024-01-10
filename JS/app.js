const buttons = document.querySelectorAll("[data-carousel-button]");// data attribute instead of a class so no concern for overlap between classes and javascript.

//loop through each of the buttons
buttons.forEach(button => { 
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1 //accesses the properties for the buttons within the div carousel. if = next, return 1 else return -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]');//gets the closest parent element that is a carousel. No matter how many carousels we have on the page, all will work.

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset//converts to array,gets the index of active slide in array, adds in offset which is either 1 or -1.
        if(newIndex < 0) newIndex = slides.children.length - 1 //if we are going backwards
        if(newIndex >= slides.children.length) newIndex = 0 //loops back
        
        slides.children[newIndex].dataset.active = true //adds the attribute
        delete activeSlide.dataset.active //removes the attribute
    })
});

// query selectors
console.log('hello');

let myCheckbox = document.querySelector('.switch input'),

    duration = document.querySelector('.month'),
    price = document.querySelector('.price .pricefix'),
    switcher = document.querySelector('.switch'),
    range = document.querySelector('.myRange');

    // create price on switch
    switcher.onclick = function(){
        if(myCheckbox.checked == true){
            let priceInt = parseInt(price.textContent);
            price.textContent = `${(priceInt - (priceInt * .25)) * 12}`; //discount

            duration.textContent = `/year`;
        }else {
            updatePrice()
            duration.textContent = `/month`;
        }
    }

    // add selector to page-view
    let pageViews = document.querySelector('.page-views span');

    // add event listener to input
    range.addEventListener('input', updatePrice());

    // update price
function updatePrice(){
    if(range.value == 1){
        if(myCheckbox.checked == true){
            price.textContent = `${(8 - (8 * .25)) * 12}`; // what it will update to if checked
        }else{
            price.textContent = 8;
        }

        pageViews.textContent = '10k';
    }

    if(range.value == 2){
        if(myCheckbox.checked == true){
            price.textContent = 108; //yearly price
        }else{

            price.textContent = 12; //monthly price
        }

        pageViews.textContent = '50k';

    }

    if(range.value == 3){
        if(myCheckbox.checked == true){
            price.textContent = 144;
        }else{

            price.textContent = 16;
        }

        pageViews.textContent = '100k';
        
    }

    if(range.value == 4){
        if(myCheckbox.checked == true){
            price.textContent = 216;
        }else{

            price.textContent = 24;
        }

        pageViews.textContent = '500k';
        
    }

    if(range.value == 5){
        if(myCheckbox.checked == true){
            price.textContent = 324;
        }else{

            price.textContent = 36;
        }

        pageViews.textContent = '1M';
        
    }
}