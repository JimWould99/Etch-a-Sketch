container = document.querySelector('#container')
change = document.querySelector('button')

addSquares(10)

function addSquares(squareNumber) {
for (i = 0; i < squareNumber * squareNumber; i++) {
    var div = document.createElement('div')
    div.classList.add('children')
    div.setAttribute('style', `width: ${(400 - (squareNumber * 1.4))/squareNumber}px `)
    container.appendChild(div)
}
    children = document.querySelectorAll('.children')
    find()
}
  
function find() {

    children.forEach((button) => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'blue';
        })
    });
    
    children.forEach((button) => {
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '';
        })
    });
    
}


function changeSquares() {
    squareNumber = prompt('type in number of squares');
    container.innerHTML = ''
    addSquares(squareNumber)
}
change.addEventListener('click', () => {
    changeSquares()

});