document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('emailBtn');
  const tooltip = document.getElementById('copyTooltip');
  const email = "jaakko.oja029@gmail.com";

  if (!btn) {
    console.error("Button not found");
    return;
  }

  btn.addEventListener('click', function() {
    console.log("Copy initiated");

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(showSuccess).catch(runFallback);
    } else {
      runFallback();
    }

    function runFallback() {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showSuccess();
      } catch (err) {
        console.error("Fallback error", err);
      }
    }

    function showSuccess() {
      if (tooltip) {
        tooltip.innerHTML = "Copied!";
        tooltip.style.color = "var(--green-dim)";
        setTimeout(() => {
          tooltip.innerHTML = "Copy?";
          tooltip.style.color = "var(--text)";
        }, 2000);
      }
    }
  });
});