/*? no js js needed from me */
async function generateRandom() {
    const result = document.getElementById("result");
    const quotes = document.getElementById("activity");
    const type = document.getElementById("type");

    const screenshot = document.getElementById("screenshot");

    const url = "https://indonesian-quotes-api.vercel.app/api/quotes/random";
    const response = await fetch(url);
    const api = await response.json();
    quotes.textContent = api.data.quote;
    type.textContent = api.data.category;
    type.style.display = "block";
    console.log(api)

    let count = 0;
    screenshot.addEventListener("click", function() {
        if(count) return window.location.reload();

        html2canvas(result).then((callback) => {
            screenshot.setAttribute("href", callback.toDataURL("image/png"));
                screenshot.innerHTML = '<ons-icon icon="md-download"></ons-icon>';
                screenshot.download = "AcilQuotes_random.png";
                count = 1;
        })
    })
}
async function generateLove() {
    const result = document.getElementById("result");
    const quotes = document.getElementById("activity");
    const type = document.getElementById("type");

    const screenshot = document.getElementById("screenshot");

    const urlLove = "https://indonesian-quotes-api.vercel.app/api/quotes/random?category=love";
    const res = await fetch(urlLove);
    const data = await res.json();
    quotes.textContent = data.data.quote;
    type.textContent = data.data.category;
    type.style.display = "block";
    console.log(data.data.quote);

    let count = 0;
    screenshot.addEventListener("click", function() {
        if(count) return window.location.reload();

        html2canvas(result).then((callback) => {
            screenshot.setAttribute("href", callback.toDataURL("image/png"));
                screenshot.innerHTML = '<ons-icon icon="md-download"></ons-icon>';
                screenshot.download = "AcilQuotes_love.png";
                count = 1;
        })
    })
}