// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main")
console.log(mainEl)

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>. 
mainEl.innerHTML="<h1>DOM Manipulation</h1>"

// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

/** === Part 2: Creating a Menu Bar === */

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("nav")
console.log(topMenuEl)

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");






/** Part 3: Adding Menu Buttons */
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

for (const key in menuLinks) {
  //console.log(menuLinks[key].text)
  let nav_menu = (document.createElement("a"));
  nav_menu.innerHTML = menuLinks[key].text;
  nav_menu.setAttribute('href', menuLinks[key].href);
  topMenuEl.append(nav_menu);  
}