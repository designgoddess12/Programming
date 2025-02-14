// select empty Div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas Have Been Used as Pack Animals for Centuries.';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = 'pink';
}