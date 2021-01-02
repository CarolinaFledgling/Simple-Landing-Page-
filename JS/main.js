//* Manipulating the DOM exercise.
//* Exercise programmatically builds navigation,
//* scrolls to anchors from navigation,
//* and highlights section in viewport upon scrolling.


// *** A dynamic Navbar 

//  Using DocumentFragment interface because is a lightweight version of the Document, if we make changes to the document fragment it doesnt affect the Document, doesnt change performance.

const ulList = document.querySelector('.nav-list');
const sections = document.querySelectorAll('section')


function createLiElement() {
    const fragment = document.createDocumentFragment();
    sections.forEach((section) => {
        const navListElement = document.createElement('li');
        navListElement.classList.add('nav-list__item');
        const idSection = section.id;
        // console.log(idSection);

        const linkElement = document.createElement('a');
        linkElement.href = `#${idSection}`;
        linkElement.textContent = idSection;
        linkElement.classList.add('nav-list__link');
        // console.log(linkElement);
        navListElement.appendChild(linkElement)
        fragment.appendChild(navListElement)
    })
    ulList.appendChild(fragment)
    console.log(ulList)
}


createLiElement()

// Hamburger menu 

const menuBtn = document.querySelector('.menu-btn');

function hamburgerMenu() {
    menuBtn.classList.toggle('close');
    ulList.classList.toggle('show');
}

menuBtn.addEventListener('click', hamburgerMenu)


//  Button scroll to top the page 

function createBtn() {
    const btnScroll = document.createElement('button')
    btnScroll.textContent = 'TOP'
    btnScroll.classList.add('btn-scroll')
    document.body.appendChild(btnScroll)
}

createBtn();

const btnScrollTop = document.querySelector('.btn-scroll')

//user scrolls down 100px from the top of the document, show the button
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnScrollTop.style.display = "block"
    } else
        btnScrollTop.style.display = "none"
});

//user clicks on the button, scroll to the top of the document

function topPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btnScrollTop.addEventListener('click', topPage)




// Highlighting current section in navbar


function ActiveNavBar(id) {
    const navLinks = document.querySelectorAll('a')
    navLinks.forEach((link) => {
        const linkAttribut = link.getAttribute("href").substring(1);
        console.log(linkAttribut);

        if (linkAttribut === id) {
            link.classList.add('activeBackground')
        } else {
            link.classList.remove('activeBackground')
        };

        if (linkAttribut === null) {
            return
        };

    });
};

function activeSection() {
    sections.forEach((section) => {
        window.addEventListener('scroll', function () {
            if (section.getBoundingClientRect().top + 200 < window.innerHeight && section.getBoundingClientRect().bottom + 200 > window.innerHeight) {
                section.classList.add('activeSection');
                ActiveNavBar(section.id);
            } else {
                section.classList.remove('activeSection');
            };
        });
    });
};

activeSection();



//Add Smooth scroll function to the anchor elements.

const navLinks = document.querySelectorAll('a')

function smoothScroll() {
    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            const LinkAttribut = link.getAttribute("href").substring(1);
            // console.log(LinkAttribut);
            e.preventDefault();
            //prevent the default action of a click, allow to change the behaviour,In this case it will allow to scroll
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const sectionId = section.id
                // console.log(sectionId)
                if (LinkAttribut === sectionId) {
                    section.scrollIntoView({
                        behavior: 'smooth'

                    })
                }
            })
        })
    })
}
smoothScroll()