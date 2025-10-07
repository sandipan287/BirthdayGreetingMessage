function showMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const messageDiv = document.getElementById("birthdayMessage");
  const wishText = document.getElementById("wishText");
  const song = document.getElementById("birthdaySong");

  if (name === "") {
    alert("Please enter her name first!");
    return;
  }

  wishText.innerHTML = `🎂 Happy Birthday ${name}! 🎉`;
  messageDiv.style.display = "block";

  createHearts();

  // Play music
  song.play().catch(err => console.log("Autoplay blocked:", err));
}

function createHearts() {
  const container = document.getElementById("heartsContainer");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
}
