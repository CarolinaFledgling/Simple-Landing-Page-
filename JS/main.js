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


// Sticky navbar 

const navMain = document.querySelector('.nav-main')

function stickyFunction() {
    if (window.scrollY > 0) {
        navMain.classList.add('sticky');
    } else if (window.scrollY <= 0) {
        navMain.classList.remove('sticky')
    }
}


window.addEventListener('scroll', stickyFunction)