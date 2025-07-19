const BASE_URL = "http://127.0.0.1:22613";

function initNav() {
  console.log("⌛ init navbar");

  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    console.log("⌛ setting up event listeners");
    loginBtn.addEventListener("click", () => {
      window.location.href = `${BASE_URL}/auth/login/discord`;
    });
  }

  checkUser();
  console.log("✅ navbar initialized");
}

function checkUser() {
  fetch(`${BASE_URL}/session/me`, { credentials: "include" })
    .then(res => {
      if (!res.ok) throw new Error("Not logged in");
      return res.json();
    })
    .then(user => {
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("userAvatar").src =
        `https://cdn.discordapp.com/avatars/${user.discord_id}/${user.avatar_hash}.png`;
      document.getElementById("username").textContent = user.username;
      document.getElementById("userInfo").style.display = "flex";
    })
    .catch(() => {
      // Not logged in, show login button
      console.log("🙅 user not logged in");
    });
}
