
/**
 * Define Global Variables
 * 
 * 
*/
const sections=document.querySelectorAll('section');
const myUl=document.getElementById('navbar__list');
const fragment=document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
/*the aim of this loop is automatically creating nav links according to the number of sections added in the
html file */ 
sections.forEach((section)=>{
    let text=section.getAttribute("data-nav");
    let newLi=document.createElement('li');
    let newLink=document.createElement('a');
    let textNode=document.createTextNode(text);
    newLi.className=('menu__link');
    newLink.appendChild(textNode);
    newLi.appendChild(newLink);
    fragment.appendChild(newLi);
    newLi.addEventListener('click', function() {

    section.scrollIntoView({"behavior":"smooth" ,"block":"end"});
    });
} );
myUl.appendChild(fragment);


// Add class 'active' to section when near top of viewport

function activateLink(activeSection){
    const links=document.querySelectorAll('a');
    let linkName=activeSection.getAttribute('data-nav');
    links.forEach((link)=>{
if(link.textContent == linkName){

    link.classList.add('active-link');

}else{
    link.classList.remove('active-link');

}
    });
}

    document.addEventListener('scroll',function(){
        sections.forEach((section)=>{
    
            let rectangle =section.getBoundingClientRect();
            let y=rectangle.top;
    if(y>-190 && y<=360){
        section.classList.add('active');
        activateLink(section);
    }else{
        section.classList.remove('active');
    }
})
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


