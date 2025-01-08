document.addEventListener("DOMContentLoaded", function(){
    const navbarLinks = document.querySelectorAll('.nav div a');
    const sections = document.querySelectorAll('.section');

    window.addEventListener("scroll", function(){
        const currentPos = window.scrollY;

        sections.forEach(function(section){
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (currentPos >= sectionTop && 
                currentPos < sectionTop + sectionHeight) {
                navbarLinks.forEach(function (navbarLink) {
                    navbarLink.classList.remove('active');
                });

                document.querySelector('.navbar a[href="#' 
                    + sectionId + '"]')
                .classList.add('active');
            }
        })
    })
})