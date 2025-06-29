//*********************************Responsive menu toggle script******************************************

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const topMenu = document.querySelector('.topmenu');
  
  mobileMenuIcon.addEventListener('click', function () {
    topMenu.classList.toggle('show-menu');
    
    if (mobileMenuIcon.classList.contains('active')) {
      mobileMenuIcon.classList.remove('active');
    } else {
      mobileMenuIcon.classList.add('active');
    }
  });
});

  /* Nav Links Activation
   Get the current page URL and all navigation links and remove .html
   Loop through links and Add active class to the matching link*/

document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.replace(/\.html$/, ''); // Remove `.html` from the current page
    const links = document.querySelectorAll("#home a");

    links.forEach(link => {
      const linkPath = new URL(link.href).pathname.replace(/\.html$/, ''); // Remove `.html` from the link href
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  });
/* ************************Old JS with .html*********************
  document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll("#home a");

    links.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  });

*/
// Check if the current URL ends with .html and redirect without .html if necessary
if (location.pathname.endsWith('.html')) {
  var newPath = location.pathname.slice(0, -5); 
  history.replaceState({}, document.title, newPath);
}
