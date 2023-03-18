(function () {
  const keyCode = document.querySelector(".keycode");
  const key = document.querySelector(".key");
  const jsKeyCode = document.querySelector(".JS-keycode");

  // First time display
  function addHint() {
    const hint = document.createElement("div");
    hint.className = "hint-text";
    hint.textContent = "Press any key to get keycode";
    document.querySelector(".wrap").appendChild(hint);
  }

  window.onload = () => addHint();

  window.addEventListener("keydown", (e) => {
    e.preventDefault();

    const hintText = document.querySelector(".hint-text");
    // remove hintText after pressing any key
    hintText && hintText.remove();

    jsKeyCode.textContent = "JS keycode " + e.keyCode;

    // check for black space
    key.textContent = e.key !== " " ? e.key : "blank space";

    keyCode.textContent = e.keyCode;
  });
})();
