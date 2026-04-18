let input = document.getElementById("input");
let btn = document.getElementById("send");
let chatBox = document.getElementById("chatBox");

const API_KEY ="AIzaSyCj5t2psjGe-LCu-UbU_ku4FxY1H5fzQyY";

let isLoading =false;
async function sendMessage() {
  if(isLoading)return;

  let message = input.value;
  if (!message) return;
  isLoading=true;
  btn.disabled=true;
//user message
  let userMsg = document.createElement("p");
  userMsg.classList.add("user");
  userMsg.innerText = "You: " + message;
  chatBox.appendChild(userMsg);

  input.value = "";

  try {
    let res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`,
 {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: message }]
        }
      ]
    })
  }
);
    let data = await res.json();

    let reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!reply) {
  reply = "No response from AI 😅";
}

    // AI response
    let aiMsg = document.createElement("p");
    aiMsg.classList.add("ai");
    aiMsg.innerHTML = "<b>AI:  </b>" + marked.parse(reply);  
    chatBox.appendChild(aiMsg);
  } catch (error) {
    console.log(error);

    let errMsg = document.createElement("p");
    errMsg.innerText = "Error occurred";
    chatBox.appendChild(errMsg);
  }finally{
    setTimeout(() => {
      isLoading=false;
      btn.disabled=false;
    }, (2000));
  }
}

// Event
btn.addEventListener("click", sendMessage);