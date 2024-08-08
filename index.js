document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.header-img > div');
    const agencyBlocksImgOdd = document.querySelectorAll('.agency .agency-block:nth-child(odd) > img')
    const agencyBlocksDinOdd = document.querySelectorAll('.agency .agency-block:nth-child(odd) > div')
    const agencyBlocksImgEven = document.querySelectorAll('.agency .agency-block:nth-child(even) > img')
    const agencyBlocksDinEven = document.querySelectorAll('.agency .agency-block:nth-child(even) > div')


        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        agencyBlocksImgOdd.forEach(function(element) {
            observer.observe(element);
        });
        agencyBlocksDinOdd.forEach(function(element) {
            observer.observe(element);
        });
        agencyBlocksImgEven.forEach(function(element) {
            observer.observe(element);
        });
        agencyBlocksDinEven.forEach(function(element) {
            observer.observe(element);
        });
        images.forEach(function(element) {
            observer.observe(element);
        });
});

//Slider
let numberOfClicksRight=0;
let numberOfSlides = 0;
const slideLeft = ()=>{
    const sliderVisible = document.querySelector('.service-cards-visible');
    const slider = document.querySelector('.services-conteiner') 
    const sliderWidth = slider.offsetWidth;
    sliderVisible.style.transform = `translateX(0px)`
    numberOfClicksRight -=1;
    if(numberOfClicksRight > numberOfSlides){
        widthOfSlide = 0;
        numberOfClicksRight = 0;
    } else{
        if(numberOfClicksRight < 0){
            numberOfClicksRight = 0;
        } else{
        widthOfSlide = sliderWidth*numberOfClicksRight;
        }
    }
    sliderVisible.style.transform = `translateX(-${widthOfSlide}px)`;
}

const slideRight = ()=>{
    const sliderVisible = document.querySelector('.service-cards-visible');
    const slider = document.querySelector('.services-conteiner')
    const sliderCards = document.querySelectorAll('.service-card') 
    const sliderCardWidth = sliderCards[1].offsetWidth
    const sliderWidth = slider.offsetWidth;
    numberOfSlides = sliderCards.length / Math.floor(sliderWidth/sliderCardWidth);
    numberOfClicksRight = numberOfClicksRight + 1;
    console.log('nmb',numberOfClicksRight);
    if(numberOfClicksRight < numberOfSlides){
        widthOfSlide = sliderWidth*numberOfClicksRight-10;
    } else{
        widthOfSlide = 0;
        numberOfClicksRight = 0;
    }

    sliderVisible.style.transform = `translateX(-${widthOfSlide}px)`;
}

//footer

const footerStandart = document.querySelector('.footer-standart');
const footerSubmit = document.querySelector('.footer-submit');

function submitRequest(){
    footerStandart.classList.toggle('footer-submit')
    footerStandart.classList.toggle('footer-standart')
    footerSubmit.classList.toggle('footer-standart')
    footerSubmit.classList.toggle('footer-submit')
}

document.querySelector('.custom-checkbox').addEventListener('click', function() {
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change')); // Обновить состояние, чтобы применились стили
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nameTrue = false;
    let telTrue = false;
    let checkboxTrue = false;
    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('error-name');
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error-input');
        nameError.classList.remove('clear');
        nameError.classList.add('error');
    } else {
        nameInput.classList.remove('error-input');
        nameError.classList.remove('error');
        nameError.classList.add('clear');
        nameTrue = true;
    }

    var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('error-tel');
    if (phoneInput.value.trim() === '') {
        phoneInput.classList.add('error-input');
        phoneError.classList.remove('clear');
        phoneError.classList.add('error');
    } else {
        phoneInput.classList.remove('error-input');
        phoneError.classList.remove('error');
        phoneError.classList.add('clear');
        telTrue = true;
    }
    var checkboxInput = document.getElementById('checkbox');
    var checkboxError = document.getElementById('error-checkbox');
    if (!checkboxInput.checked) {
        checkboxError.classList.remove('clear');
        checkboxError.classList.add('error');
    } else {
        checkboxError.classList.remove('error');
        checkboxError.classList.add('clear');
        checkboxTrue = true;
    }

    if(nameTrue & telTrue & checkboxTrue){
        submitRequest()
    } else {
        nameTrue = false;
        telTrue = false;
        checkboxTrue = false;
    }

});

//Menu toggle
const header = document.getElementById('header')
const menuToggle = document.querySelector('.menu-toggle-close')
function openMenuToggle(){
header.classList.remove('header');
header.classList.add('header-menu-toggle')
menuToggle.classList.remove('menu-toggle-close')
menuToggle.classList.add('menu-toggle-open')
}

function closeMenuToggle(){
    header.classList.remove('header-menu-toggle');
    header.classList.add('header')
    menuToggle.classList.add('menu-toggle-close')
    menuToggle.classList.remove('menu-toggle-open')
}


//Scroll

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu-smooth-scroll div');
    const scrollBtns = document.querySelectorAll('.smooth-scroll')
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            closeMenuToggle();
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    scrollBtns.forEach((item)=> {
        item.addEventListener('click',()=>{
            const footer = document.getElementById('footer')
            window.scrollTo({
                top: footer.offsetTop,
                behavior: 'smooth'
            })
        })
    })
});