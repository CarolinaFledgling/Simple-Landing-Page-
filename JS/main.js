// *** A dynamic Navbar with Js 

//  Useing DocumentFragment interface because is a lightweight version of the Document, if we make changes to the document fragment it doesnt affect the Document doesnt change performance.

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