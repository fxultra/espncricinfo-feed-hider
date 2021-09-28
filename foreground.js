// document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hostname === "www.espncricinfo.com" && window.location.pathname === "/") {
        const blankSection = document.createElement("div");
        const text = document.createTextNode("This is for your own good");
        blankSection.setAttribute("style", "margin: 10rem; font-size: 3rem; text-align: center;");
        blankSection.appendChild(text);

        const targetElement = document.body;
        targetElement.replaceChildren(blankSection);
        console.log("ESPNCricinfo feed is now hidden!");
    }
// }, false);
