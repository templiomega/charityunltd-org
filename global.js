const hyperlink_btns = document.querySelectorAll(".hyperlinked");
const alert_bar = document.getElementById("alert_bar");
const alert_bar_span = document.getElementById("alert_bar_span");
const rev = 3674;
let sw = 0;
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
setInterval(() => {
    switch (sw) {
        case 0:
            alert_bar.innerHTML = `CLAIM PROCESS COMING <span id="alert_bar_span">2027</span>`;
            sw = 1;
            break;

        case 1:
            alert_bar.innerHTML = `CURRENT REVENUE: $<span id="alert_bar_span">${rev}</span>`;
            sw = 0;
            break;
    }
}, 3000);
