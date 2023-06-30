function randomNumberFromResolutionWidth() {
  const resolution = window.innerWidth;
  const randomNumber = Math.floor(Math.random() * resolution);
  return randomNumber;
}

async function getQuotes() {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  return data;
}

function randomNumberFromRange(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function randomNumberFromResolutionHeight() {
  const resolution = window.innerHeight;
  const randomNumber = Math.floor(Math.random() * resolution);
  return randomNumber;
}

let secretButton = document.getElementById("secretButton");
secretButton.style.left = randomNumberFromResolutionWidth() + "px";
secretButton.style.top = randomNumberFromResolutionHeight() + "px";
secretButton.onclick = async () => {
  document.getElementById("secretButton").style.display = "none";
  document.getElementById("quotes").style.display = "block";
  document.body.style.backgroundColor = "#e2e8f0";
  const data = await getQuotes();
  document.getElementById("quotes").innerHTML =
    data[randomNumberFromRange(0, data.length)].text;
};
