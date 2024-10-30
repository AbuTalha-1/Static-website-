function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString();

  document.getElementById('clock').innerHTML = `${dateString} ${timeString}`;
}

setInterval(updateTime, 1000);
updateTime();

  