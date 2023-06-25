const quotes = [
  { quote: " 삶이 있는 한 희망은 있다", author: "키케로1" },
  { quote: "산다는것 그것은 치열한 전투이다.", author: "로망로랑2" },
  { quote: " 삶이 있는 한 희망은 있다", author: "키케로3" },
  { quote: "산다는것 그것은 치열한 전투이다.", author: "로망로랑4" },
  { quote: " 삶이 있는 한 희망은 있다", author: "키케로5" },
  { quote: "산다는것 그것은 치열한 전투이다.", author: "로망로랑6" },
  { quote: " 삶이 있는 한 희망은 있다", author: "키케로7" },
  { quote: "산다는것 그것은 치열한 전투이다.", author: "로망로랑8" },
  { quote: " 삶이 있는 한 희망은 있다", author: "키케로9" },
  { quote: "산다는것 그것은 치열한 전투이다.", author: "로망로랑10" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
