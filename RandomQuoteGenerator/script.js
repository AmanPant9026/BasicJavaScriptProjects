const btn = document.getElementById("btn");
const output=document.querySelector(".output");
let quote=[
    "The only way to do great work is to love what you do. – Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Act as if what you do makes a difference. It does. – William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "The best way to predict the future is to invent it. – Alan Kay",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Dream big and dare to fail. – Norman Vaughan",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
    "If you're going through hell, keep going. – Winston Churchill",
    "The best revenge is massive success. – Frank Sinatra"
]

btn.addEventListener("click",(e)=>{
    console.log("clicked");
    let random=Math.floor(Math.random()*quote.length)
    output.textContent=quote[random];
})