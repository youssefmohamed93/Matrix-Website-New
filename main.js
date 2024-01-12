window.onscroll = function() {
    scrollFunction();
};

scrolltotop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrolltotop").style.display = "block";
    } else {
      document.getElementById("scrolltotop").style.display = "none";
    }
};

function menuToggle(){
    const toggleMenu = document.querySelector('.not-menu');
    toggleMenu.classList.toggle('active')
}
function menuToggle0(){
    const toggleMenu = document.querySelector('.profile-container');
    toggleMenu.classList.toggle('activee')
}
