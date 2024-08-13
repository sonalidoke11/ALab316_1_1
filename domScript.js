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