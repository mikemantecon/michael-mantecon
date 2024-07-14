function main() {
    clickFirstButton();
    hideFirstButton();
}

// This function is used to make the hidden buttons on the homepage visible when called upon.

function unhideButtons() {
    let buttonsHidden = document.getElementsByClassName('button');
    for (let button of buttonsHidden) {
        button.style.visibility = 'visible';
    }
}

// This function is used to call upon ther unhideButtons function given a click on the first-button

function clickFirstButton() {
    let buttonToClick = document.getElementsByClassName('first-button')[0];
    buttonToClick.addEventListener('click', unhideButtons);
}

// This function is used to make the first-button disappear

function hideButtons() {
    let buttonVisible = document.getElementsByClassName('first-button')[0];
    buttonVisible.style.visibility = 'hidden';
    buttonVisible.style.gridColumn = '1/5';
}

// This function is used to call upon the hideButtons function when first-button is clicked

function hideFirstButton() {
    let firstButton = document.getElementsByClassName('first-button')[0];
    firstButton.addEventListener('click', hideButtons);
}

main();