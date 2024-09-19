// clear form 

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}



// toggel 

const navSlide = () => {
    const burger  = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggel-burger");
    });
};

navSlide();