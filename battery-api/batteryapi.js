navigator.getBattery().then((battery) => {
  if (battery.charging) {
    updateLevelInfo(battery);
  } else {
    updateLevelInfo(battery);
  }
  document
    .querySelector(".container")
    .insertAdjacentHTML(
      "beforeend",
      `  <h2>Your Battery Level: ${battery.level * 100}%</h2>`,
    );
});

function updateLevelInfo(battery) {
  const level = battery.level;
  const batteryLevel =
    (battery.level * 100 - ((battery.level * 100) % 10)) / 10;
  for (let i = 0; i < batteryLevel; i++) {
    if ((level * 10) % 10 >= 9) {
      document
        .querySelector(".battery-container")
        .insertAdjacentHTML(
          "beforeend",
          '<div class="battery-stick small__stick"></div>',
        );
    } else {
      document
        .querySelector(".battery-container")
        .insertAdjacentHTML("afterbegin", '<div class="battery-stick"></div>');
    }
  }
}
