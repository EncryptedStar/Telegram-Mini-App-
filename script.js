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
