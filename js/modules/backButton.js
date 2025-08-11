export function backButton() {
    const back = document.querySelector('#back');
    
    if (!back) {
        return;
    }

    function scrollToTop() {
       //console.log(window.scrollY);
        //console.log(window);
        //window.scrollTo({
            //top: 0,
            //behavior: "smooth",
       // }); 
       window.scroll(0, 0);
    }

    back.addEventListener("click", scrollToTop);

}



