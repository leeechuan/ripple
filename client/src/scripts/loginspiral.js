function LoginSpiral() {
  const words = "ripple ripple ripple ripple ripple ripple ripple ripple ripple ripple";

  const ANIMATION_DURATION = 4000; // ms

  words.split("").forEach((char, i) => {
    function createElement(offset, direction) {
      const div = document.createElement("div");
      div.innerText = char;
      div.classList.add("character");
      div.style.animationDelay = `-${direction * i * (ANIMATION_DURATION / 16) + offset}ms`;
      return div;
    }

    document.getElementById("spiral").append(createElement(0, 1));
    document.getElementById("spiral2").append(createElement(ANIMATION_DURATION / 2, 1));
  });
}

export default LoginSpiral;

