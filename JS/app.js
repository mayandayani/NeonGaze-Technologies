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
