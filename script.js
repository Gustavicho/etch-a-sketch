// start the web page with a grid created
createGridContainer(8);

document.querySelector('#choseSize').addEventListener('input', e => {
  const SIZE = e.target.value;
  showActualSize(SIZE);
  cleanGridContainer();
  createGridContainer(SIZE);
});

document.querySelector('#clear-btn').addEventListener('click', () => {
  document.querySelectorAll('.grid-element').forEach(el => {
    el.style.background = '#fff'
  });
});

document.querySelector('#grid-lines-btn').addEventListener('click', () => {
  document.querySelectorAll('.grid-element').forEach(el => {
    el.classList.toggle('el-border');
  });
})

function createGridContainer(userInput) {
  const totalOfDivs = getNumOfDiv(userInput);
  const gridElSize = getGridElSize(userInput);

  for (let i = 0; i < totalOfDivs; i++){
    // create div
    let gridEl = document.createElement('div');
    gridEl.classList.add('grid-element');     // set div classes
    gridEl.classList.add('el-border')
    gridEl.style.height = `${gridElSize}px`;  // set the correct height & width
    gridEl.style.width = `${gridElSize}px`;
    gridEl.addEventListener('mouseover', e => {
      e.target.style.background = '#000'
    });
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

function getGridElSize(userInput){
  const gridContainerSize = 500;
  return gridElSize = gridContainerSize / userInput;
}

function getNumOfDiv(userInput){
  return Math.pow(userInput, 2);
}