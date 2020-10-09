const removeTransition = (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
};
window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    if (!key) return;
    key.classList.add("playing");
});
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
