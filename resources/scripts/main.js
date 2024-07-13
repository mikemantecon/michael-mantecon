function main() {
    clickFirstButton();
    hideFirstButton();
}

function unhideButtons() {
    let buttonsHidden = document.getElementsByClassName('button');
    for (let button of buttonsHidden) {
        button.style.visibility = 'visible';
    }
}

function clickFirstButton() {
    let buttonToClick = document.getElementsByClassName('first-button')[0];
    buttonToClick.addEventListener('click', unhideButtons);
}

function hideButtons() {
    let buttonVisible = document.getElementsByClassName('first-button')[0];
    buttonVisible.style.visibility = 'hidden';
    buttonVisible.style.gridColumn = '1/5';
}

function hideFirstButton() {
    let firstButton = document.getElementsByClassName('first-button')[0];
    firstButton.addEventListener('click', hideButtons);
}

main();