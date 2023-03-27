async function displayTextAfterDelay(text, delay) {
        await new Promise(resolve => setTimeout(resolve, delay));
        document.getElementById("output").innerText = text;
      }
      
      document.getElementById("btn").addEventListener("click", async () => {
        const text = document.getElementById("text").value;
        const delay = parseInt(document.getElementById("delay").value);
        await displayTextAfterDelay(text, delay);
      });