
const userInpt = 16 
const totalOfDivs = Math.pow(userInpt, 2);
const gridContainerSize = 500;
const gridElSize = Math.floor(gridContainerSize / userInpt);
console.log(gridElSize)

for (let i = 0; i < totalOfDivs; i++){
  // create div
  let gridEl = document.createElement('div');
  gridEl.classList.add('grid-element');
  gridEl.style.height = `${gridElSize}px`;
  gridEl.style.width = `${gridElSize}px`;
  gridEl.addEventListener('mouseover', e => {
    e.target.style.background = '#111'
  });
  // put div in the container
  document.querySelector('.grid-container').appendChild(gridEl);
}
