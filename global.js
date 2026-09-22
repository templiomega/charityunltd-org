const hyperlink_btns = document.querySelectorAll(".hyperlinked");
hyperlink_btns.forEach(element => {
    switch (element.dataset.link) {
        case ("0"):
            element.addEventListener("click", () => {
                window.location.href = "./index.html";
            });
            break;
        case ("1"):
            element.addEventListener("click", () => {
                window.location.href = "./about.html";
            });
            break;
        case ("2"):
            element.addEventListener("click", () => {
                window.open("https://www.paypal.com/ncp/payment/BQD7PF6RFQW4E", "_blank");
            });
            break;
        case ("3"):
            element.addEventListener("click", () => {
                window.open("https://templiomega.org", "_blank");
            });
    }
});
