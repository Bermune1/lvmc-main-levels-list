
window.LVMC_HOSTED_TRACKS = Object.freeze({
  "Back On Track": {
    url: "soundtracks/back-on-track.mp3",
    offset: 0
  },
  "Dry Out": {
    url: "soundtracks/dry-out.mp3",
    offset: 0
  },
  "Base After Base": {
    url: "soundtracks/base-after-base.mp3",
    offset: 0
  },
  "Can't Let Go": {
    url: "soundtracks/cant-let-go.mp3",
    offset: 0
  },
  "Cycles": {
    url: "soundtracks/cycles.mp3",
    offset: 0
  },
  "xStep": {
    url: "soundtracks/xstep.mp3",
    offset: 0
  },
  "Clubstep": {
    url: "soundtracks/clubstep.mp3",
    offset: 0
  }
});

// Soundtrack attribution and licensing
document.addEventListener("DOMContentLoaded", () => {
  const sources = {
    "Back On Track": 522654,
    "Dry Out": 498543,
    "Base After Base": 404997,
    "Can't Let Go": 485351,
    "Cycles": 529148,
    "xStep": 516735
  };

  document.querySelectorAll("details[data-music-level]")
    .forEach(detail => {
      const id = sources[detail.dataset.musicLevel];
      const credit = detail.querySelector(".music-credit");
      if (!id || !credit) return;

      const source = credit.querySelector("a");
      if (source) {
        source.href = `https://www.newgrounds.com/audio/listen/${id}`;
        source.textContent = " · Original song ↗";
      }

      const license = document.createElement("a");
      license.href = "https://creativecommons.org/licenses/by-nc-sa/3.0/";
      license.target = "_blank";
      license.rel = "noopener noreferrer";
      license.textContent = " · CC BY-NC-SA 3.0 ↗";

      credit.insertBefore(
        license,
        credit.querySelector(".music-controls")
      );
    });
});
