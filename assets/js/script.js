const counterElement = document.getElementById('counter-number');

const incrementFunction = () => {
  console.log('increment logged!');
  const currentValue = parseInt(counterElement.textContent);
  counterElement.textContent = currentValue + 1;
}

const decrementFunction = () => {
  console.log('decrement logged!');
  const currentValue = parseInt(counterElement.textContent, 10);
  counterElement.textContent = currentValue - 1;
}