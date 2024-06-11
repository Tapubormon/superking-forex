//sticky nav bar
let loc = window.location;

if (loc.pathname !== '/') {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('scrolled');
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    // const toggler = document.querySelector('.navbar-toggler');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const scrollPosition = window.scrollY;
    let currentLocation = window.location;

    if (currentLocation.pathname == '/' && !isMobile) {
        if (scrollPosition >= 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    } else if (currentLocation.pathname == '/' && isMobile) {
        //navbar.classList.add('scrolled');
        if (scrollPosition >= 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        //navbar.classList.add('navbar-toggler-mobile');
    }

    // if (scrollPosition >= 100 && currentLocation.pathname == '/') {
    //     navbar.classList.add('scrolled');
    // } else {
    //     navbar.classList.remove('scrolled');
    // }
});



// image modal
const images = document.querySelectorAll('.image-wraper img')
const popupImage = document.querySelector('.popup-img')
const popup = document.querySelector('.popup-img img')
images.forEach(image => {
    image.onclick = () => {
        popupImage.style.display = 'block'
        popup.src = image.getAttribute('src')
    }
})

document.querySelector('.popup-img span').onclick = () => {
    popupImage.style.display = 'none'
    navbar.classList.add('scrolled');
}



// redirect to the link while click on the menu bar link
function closeOffcanvas(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor element
    var href = event.target.getAttribute('href'); // Get the href attribute of the clicked link
    setTimeout(function () {
        window.location.href = href; // Navigate to the link's destination after a short delay
    }, 300); // Adjust the delay time as needed
}
