const elCopyBtn = document.getElementById("copy-btn");
const elColorText = document.getElementById("color-text");
const elColorInput = document.getElementById("color-input");
const span = elCopyBtn.querySelector("span");

elColorInput.addEventListener("input", ({ target }) => {
  const { value } = target;
  elColorText.textContent = value;
  document.body.style.backgroundColor = value;
});

elCopyBtn.addEventListener("click", async () => {
  elCopyBtn.disabled = true;

  try {
    await navigator.clipboard.writeText(elColorText.textContent);
    span.innerText = "Copied!";
  } catch {
    span.innerText = "Not copied!";
  }

  setTimeout(() => {
    span.innerText = "Copy";
    elCopyBtn.disabled = false;
  }, 1500);
});
