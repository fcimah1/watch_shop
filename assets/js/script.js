AOS.init();
//to make navbar is static
const homeSection = document.getElementById("start-nav")
const headSection = document.querySelector(".header")
const moveUpButton = document.getElementById("move-up")
const darkHeadSection = document.querySelector(".navbar-dark")


const observer = new IntersectionObserver(
    (element) => {
        const ele = element[0];
        if (ele.isIntersecting == false) {
            headSection.classList.add("sticky")
            darkHeadSection.classList.add("sticky")
            // darkHeadSection.style.display = "flex"
            moveUpButton.classList.add("move-up")
            moveUpButton.style.display = "block"
        } else {
            headSection.classList.remove("sticky")
            darkHeadSection.classList.remove("sticky")
            // darkHeadSection.style.display = "none"
            moveUpButton.classList.remove("move-up")
            moveUpButton.style.display = "none"
        }
    },
    {
        root: null,
        rootMargin: "",
        threshold: "",
    });

observer.observe(homeSection)

//section search
const searchIcon = document.getElementById("search-icon")
const searchClose = document.getElementById("search-close")
const searchDiv = document.getElementById("search")

searchIcon.addEventListener("click", () => {
    searchDiv.style.display = "block"
    searchDiv.classList.add("search")
})

searchClose.addEventListener("click", () => {
    searchDiv.style.display = "none"
    searchDiv.classList.remove("search")
})

// loading animation
function removeLoader() {
    setTimeout(() => {
        let loader = document.getElementById('preloader-active');
        // hide the loader
        loader.style = 'display: none;';
    }, 1000);
}

// display nice-select 

$(document).ready(function () {
    $("select").niceSelect();
});



//counter of product

const minusSpan = document.querySelector(".number-decrement")
const plusSpan = document.querySelector(".number-increment")
const quantityOfProduct = document.querySelector(".input-number")
// console.log(quantityOfProduct)
minusSpan.addEventListener("click", (e) => {
    e.preventDefault()
    if (quantityOfProduct.value > 0) {
        quantityOfProduct.value -= 1
    }
})
plusSpan.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("error")
    if (quantityOfProduct.value < 10) {
        ++quantityOfProduct.value
    }
})