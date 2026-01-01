const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe && tg.initDataUnsafe.user;

const name = user?.first_name || "Friend";

document.getElementById("username").innerText =
  "Welcome " + name;
  function openChat() {
  document.getElementById("screen").innerHTML = `
    <h3>Chat</h3>
    <p>Buddy List</p>
    <ul>
      <li>👤 Alex (Online)</li>
      <li>👤 Sam (Away)</li>
    </ul>
  `;
}

function openCrypto() {
  document.getElementById("screen").innerHTML = `
    <h3>Crypto Dashboard</h3>
    <p>TON Balance:</p>
    <p>💎 0.00 TON</p>
  `;
}
