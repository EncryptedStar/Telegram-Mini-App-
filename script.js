const tg = window.Telegram.WebApp;

// Tell Telegram the app is ready
tg.ready();

// Chat elements
const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");

// ---------- SYSTEM MESSAGE ----------
function systemMessage(text) {
  const msg = document.createElement("div");
  msg.className = "message system";
  msg.innerText = text;
  messagesDiv.appendChild(msg);
}

// ---------- SAVE / LOAD CHAT ----------
function saveChat() {
  localStorage.setItem("chatHistory", messagesDiv.innerHTML);
}

function loadChat() {
  const saved = localStorage.getItem("chatHistory");
  if (saved) {
    messagesDiv.innerHTML = saved;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

// ---------- STARTUP ----------
systemMessage("SYSTEM ONLINE...");
systemMessage("RETRO BUILDER READY.");
loadChat();

// ---------- TELEGRAM USER ----------
const user = tg.initDataUnsafe?.user;
console.log("Telegram User:", user);

if (user) {
  document.getElementById("username").innerText =
    `Welcome ${user.first_name}`;
} else {
  document.getElementById("username").innerText =
    "Welcome Guest (Not Telegram)";
}

// ---------- SEND MESSAGE ----------
function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = text;
  messagesDiv.appendChild(userMsg);
  saveChat();

  input.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Typing indicator
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.innerText = "Retro Builder is typing...";
  messagesDiv.appendChild(typing);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Fake AI reply
  setTimeout(() => {
    typing.remove();

    const aiMsg = document.createElement("div");
    aiMsg.className = "message system";
    aiMsg.innerText = getFakeReply(text);
    messagesDiv.appendChild(aiMsg);
    saveChat();

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 1200);
}

// ---------- FAKE AI ----------
function getFakeReply(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) return "Hello user. System online.";
  if (input.includes("build")) return "Let’s build something legendary.";
  if (input.includes("ton")) return "TON detected. Web3 mode pending.";
  if (input.includes("ai")) return "AI core initializing.";

  return "Command received.";
}
