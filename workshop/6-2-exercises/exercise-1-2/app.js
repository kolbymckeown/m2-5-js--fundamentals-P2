// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const btnList = document.querySelector('#btn-list');

for(let i = 1; i < 5; i++) {
    let x = document.getElementById(`btn-${i}`);
    x.style.background = 'gold';
    x.style.opacity = '100';
}

const toggleColor = (i, color) => {
    const btnElem = document.getElementById(i);
    const currentColor = btnElem.style.background;
    btnElem.style.background = currentColor === 'gold' ? color : 'gold';
}

function click(x) {
    const btnId = x.target.id;
    const btnElem = document.getElementById(btnId);
    switch (btnId) {
        case 'btn-1':
            btnElem.style.opacity = btnElem.style.opacity === '100' ? '0' : '100';
            break;
        case 'btn-2':
            toggleColor(btnId, 'crimson');
            break;
        case 'btn-3':
            toggleColor(btnId, 'lightblue');
            break;
        case 'btn-4':
            btnElem.classList.toggle('jitters');
            break;
        default:
            break;
    }
}

btnList.addEventListener('click', click);

