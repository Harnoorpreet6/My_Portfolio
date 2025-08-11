export function hamburgerMenu() {
    console.log('hello');
    const hamburger = document.querySelector("#hamburger");
    const mobileMenu = document.querySelector("#mobile-menu");

    if (!hamburger || !mobileMenu) {
        return;
    } 

    function toggleMobileMenu() {
        mobileMenu.classList.toggle("hidden");
    }

    hamburger.addEventListener("click", toggleMobileMenu);
}

