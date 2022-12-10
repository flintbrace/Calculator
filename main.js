const display = document.querySelector(".display__result")
const keys = document.querySelectorAll(".keys");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");

const theme1 = document.getElementById("theme-1");
const theme2 = document.getElementById("theme-2");
const theme3 = document.getElementById("theme-3");
const theme4 = document.getElementById("theme-4");

const root = document.querySelector(":root");

theme1.addEventListener("click", () => {
    root.style.setProperty("--yellow", "hsl(0, 0%, 100%)")
    root.style.setProperty("--blue-deep", "hsl(285, 3%, 74%)")
    root.style.setProperty("--blue-light", "hsl(300, 0%, 45%")
    root.style.setProperty("--purple-1", " hsl(0, 0%, 68%)")
    root.style.setProperty("--purple-2", "hsl(0, 0%, 60%)")
    root.style.setProperty("--purple-3", "hsl(300, 1%, 17%)")
    root.style.setProperty("--sky-blue-1", "hsl(0, 92%, 70%)")
    root.style.setProperty("--sky-blue-2", "hsl(12, 86%, 42%)")
    root.style.setProperty("--Equal-sign", "hsl(0, 0%, 100%)")
})
theme2.addEventListener("click", () => {
    root.style.setProperty("--yellow", "hsl(0, 0%, 0%)")
    root.style.setProperty("--blue-deep", "hsl(0, 0%, 100%)")
    root.style.setProperty("--blue-light", "rgb(129, 129, 129)")
    root.style.setProperty("--purple-1", "hsl(0, 0%, 17%)")
    root.style.setProperty("--purple-2", "hsl(0, 0%, 32%)")
    root.style.setProperty("--purple-3", "hsl(0, 0%, 77%)")
    root.style.setProperty("--sky-blue-1", "hsl(12, 43%, 59%)")
    root.style.setProperty("--sky-blue-2", "hsl(22, 82%, 41%)")
    root.style.setProperty("--Equal-sign", "hsl(0, 0%, 0%)")
})
theme3.addEventListener("click", () => {
    root.style.setProperty("--yellow", "skyblue")
    root.style.setProperty("--blue-deep", "hsl(222, 26%, 31%)")
    root.style.setProperty("--blue-light", "hsl(224, 36%, 15%)")
    root.style.setProperty("--purple-1", "skyblue")
    root.style.setProperty("--purple-2", "hsl(224, 28%, 35%)")
    root.style.setProperty("--purple-3", "hsl(225, 21%, 49%)")
    root.style.setProperty("--sky-blue-1", "skyblue")
    root.style.setProperty("--sky-blue-2", "hsl(6, 63%, 50%)")
    root.style.setProperty("--Equal-sign", "skyblue")
})
theme4.addEventListener("click", () => {
    root.style.setProperty("--yellow", "hsl(52, 89%, 63%)")
    root.style.setProperty("--blue-deep", "hsl(226, 74%, 9%)")
    root.style.setProperty("--blue-light", "hsl(268, 71%, 12%)")
    root.style.setProperty("--purple-1", "hsl(285, 91%, 52%)")
    root.style.setProperty("--purple-2", "hsl(290, 70%, 36%)")
    root.style.setProperty("--purple-3", "hsl(268, 47%, 21%)")
    root.style.setProperty("--sky-blue-1", "hsl(177, 92%, 70%)")
    root.style.setProperty("--sky-blue-2", "hsl(176, 100%, 44%)")
    root.style.setProperty("--Equal-sign", "hsl(198, 20%, 13%)")
})



function justclear() {
    reset.click()
}


keys.forEach(key => {
    key.addEventListener("click", () => {
        switch (key.textContent) {
            case ("RESET"): display.textContent = "";
                break;
            case ("DEL"): display.textContent = display.textContent.slice(0, -1)
                break;
            case ("="):
                try {
                    display.textContent = eval(display.textContent)
                } catch {
                    display.textContent = "syntax error"
                    setTimeout(justclear, 500)
                }
                break;
            case ("syntax error" + key.textContent):
                reset.click()
                break;
            default: display.textContent += key.textContent;
        }
    })
})


/* keys.forEach(key => {
    key.addEventListener("click", (e) => {
        const value = key.textContent
        switch (e.target.textContent) {
            case ("RESET"): display.textContent = "0";
                break;
            case ("DEL"): display.textContent = display.textContent.slice(0, -1)
                break;
            case ("="):
                try {
                    display.textContent = eval(display.textContent)
                } catch {
                    display.textContent = "Incorrect syntax"
                }
                break;

            default: display.textContent += value;
        }
    })
}) */

