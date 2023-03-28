const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
  const message = textInput.value;
  const delay = parseInt(delayInput.value);
  
  const delayedMsg = await delayedMessage(message, delay);
  outputDiv.textContent = delayedMsg;
});
