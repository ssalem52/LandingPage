/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll('section');
const menuBar = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// Build menu 
  allSections.forEach((section) => {
    menuLinkName = section.getAttribute('data-nav');
    li = document.createElement('li');
    li.innerHTML = `<a class="menu__link" href="#${section.id}">${menuLinkName}</a>`;
    menuBar.appendChild(li);
    scrollToView(li,section);

  })

// Scroll to section on link click
function scrollToView(li, section){
	li.addEventListener("click", function(evt){
		evt.preventDefault();
		section.scrollIntoView({behavior: "smooth"})
	})
}


// Set sections as active
function makeActive(){
  allSections.forEach(function(section, SectionIndex){
    console.log("Section " + SectionIndex);
      const box = section.getBoundingClientRect();
      if (box.top <= 150 && box.bottom >= 150) {
          section.classList.add("your-active-class");
          
          const AllLinks = document.querySelectorAll('li');

          AllLinks.forEach(function(link, index){
            console.log("link " + index);
            if(SectionIndex === index){
              link.classList.add('active-class');
            }else{
              link.classList.remove('active-class');
            }
        });

      } else {
          section.classList.remove("your-active-class");
      }
   });
}
document.addEventListener("scroll", function() { makeActive();});