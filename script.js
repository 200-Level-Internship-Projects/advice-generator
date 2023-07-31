let dice = document.querySelector(".dice");
let quote = document.querySelector(".main");
let quoute_id = document.querySelector(".quote-id");

dice.addEventListener("click", () => {
    const fetchNewAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        const advice = data.slip.advice;
        const id = data.slip.id;
        quote.innerHTML = advice;
        quoute_id.innerHTML = id;
    }
    fetchNewAdvice();
});

