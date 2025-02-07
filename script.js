let actualColor = '#000';
let isDrawing = false;
// start the web page with a grid created
createGridContainer(8);

// create the grid layout
document.querySelector('#choseSize').addEventListener('input', e => {
  const SIZE = e.target.value;
  showActualSize(SIZE);
  cleanGridContainer();
  createGridContainer(SIZE);
});
// get the actual color
document.querySelector('#choseColor').addEventListener('input', e => {
  actualColor = e.target.value;
});
// clean the grid layout
document.querySelector('#clear-btn').addEventListener('click', () => {
  document.querySelectorAll('.grid-element').forEach(el => {
    el.style.background = '#fff'
  });
});
// toggle the grid lines
document.querySelector('#grid-lines-btn').addEventListener('click', () => {
  document.querySelectorAll('.grid-element').forEach(el => {
    el.classList.toggle('el-border');
  });
})

/* ----- functions ----- */
function createGridContainer(userInput) {
  const totalOfDivs = getNumOfDiv(userInput);
  const gridElSize = getGridElSize(userInput);

  for (let i = 0; i < totalOfDivs; i++){
    // create div
    let gridEl = document.createElement('div');
    setGridElPropities(gridEl, gridElSize)
    setEventListener(gridEl);
    // put div in the container
    document.querySelector('.grid-container').appendChild(gridEl);
  }
}

function cleanGridContainer(){
  document.querySelector('.grid-container').innerHTML = '';
}

function showActualSize(size){
  document.querySelector('.actual-size').textContent = `${size} x ${size}`
}

function setGridElPropities(el, elSize){
  el.classList.add('grid-element');     // set div classes
  el.classList.add('el-border')
  el.setAttribute('draggable', 'false')
  el.style.height = `${elSize}px`;  // set the correct height & width
  el.style.width = `${elSize}px`;
}

function setEventListener(el){
  el.addEventListener('mousedown', () => {
    isDrawing = true;
    el.style.backgroundColor = actualColor;
  });
  el.addEventListener('mousemove', () => {
      if (isDrawing) {
        isDrawing = true
          el.style.backgroundColor = actualColor;
      }
  });
  document.addEventListener('mouseup', () => {
      isDrawing = false;
  });
}

function getGridElSize(userInput){
  const gridContainerSize = 500;
  return gridElSize = gridContainerSize / userInput;
}

function getNumOfDiv(userInput){
  return Math.pow(userInput, 2);
}