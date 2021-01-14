
/**
 * Define Global Variables
 * 
 * 
*/

/**
 * we create a list of the sections using .querySelectorAll method then we assign this list to
 the variable (sections) so we will be able to loop through it in the future
 */
const sections=document.querySelectorAll('section');
const myUl=document.getElementById('navbar__list');
/**
 * we create a fragment that will carry all the created elements before we add them to the ul element
 * by doing this the browser will not have to reflow and repaint every time it adds a new link,cuz the fragment
 is hidden and not displayed 
 *this helps in enhancing the performance
 */
const fragment=document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav

/**
 * the aim of this loop is automatically creating nav links equal to the number of sections added in the
html file , using forEach method to loop through the list of sections we created before 
*/ 

sections.forEach((section)=>{
    /**
     * we create a variable that carries the value of data-nav attribute ,
    that text will be used as the name of each link,
     and we do that using .getAttribute method
     */ 
    let text=section.getAttribute("data-nav");
    let newLi=document.createElement('li');
    let newLink=document.createElement('a');
    /**
     * we give a class to the new 'a' element we created ,to be able to style it , using .className
     */
    newLi.className=('menu__link');
    let textNode=document.createTextNode(text);
    newLink.appendChild(textNode);
    newLi.appendChild(newLink);
    fragment.appendChild(newLi);
    /**
     * now we add an event listener to each of the created nav links ,
     * we use .scrollIntoView method 
     */
    newLi.addEventListener('click', function() {
/**
 * we set behavior to smooth so it will not jump instantly to the section
 * we also set block to end so the bottom of the section will be aligned to the bottom of the viewport
 */
    section.scrollIntoView({"behavior":"smooth" ,"block":"end"});
    });
} );
/**
 * after we created all the links and appended them to the fragment , now we append the fragment to the ul element
 * so we add all the links at once and reflow and repaint happens once 
 */
myUl.appendChild(fragment);

//giving a style to the active link

/**
 * this function takes a section as a parameter 
 * we loop through all 'a' elements , and if the textContent of the 'a' element is equal to
 the value of data-nav attribute of the section then we add the active-link class so the link will have a distingishable style
 *if it doesn't we remove the active-link class 
 *now only the active link will have the distingishable style
 */

function activateLink(activeSection){
    const links=document.querySelectorAll('a');
    let linkName=activeSection.getAttribute('data-nav');
    links.forEach((link)=>{
      if(link.textContent == linkName){
          /**
           * to add or remove classes from an element we use the method .classList.add/remove 
           */
       link.classList.add('active-link');
      }else{
       link.classList.remove('active-link');
      }
      });
}

//highlight the active section
/**
 * we add an event listener of a 'scroll' type 
 * on scrolling the page the section that's displayed in the viewport should be highlighted
 * javascript knows that section by using .getBoundingClientRect() method
 * By giving this method to an element it returns the dimensions of this element in the viewport
 * we use these dimensions to know if the whole section is in the view port
 */
 document.addEventListener('scroll',function(){
    sections.forEach((section)=>{    
        let rectangle =section.getBoundingClientRect();
        let y=rectangle.top;
            /**
             * after getting the dimensions we use the if statement to decide what to do withe section
             * if it's in the viewport then we add the active class that's gonna change its style to look highlighted
             */
        if(y>-400 && y<=170){
          section.classList.add('active');
        /**
         * if the section is inside the viewport we use the 'activateLink' function we declared before
         * it will highlight the nav-link that has a textContent equals to the data-nav value of that section
         */
          activateLink(section);
        }else{
         section.classList.remove('active');
        }
    })
});
//scroll to top 
/**
 * we use the scrollto method to scroll to the top of the page on clicking on the scrollButton
 * we also give it a smooth behavior in order not to jump to top instantly
 */
const scrollButton= document.getElementById('scroll-top');
scrollButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});    
})
   
       


