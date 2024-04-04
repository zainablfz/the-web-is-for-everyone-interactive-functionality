document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.querySelector(".deel-button");
    const copiedButton = document.querySelector(".copied");

    copyButton.addEventListener('click', function () {
        copiedButton.classList.add("copied");
    });
});



