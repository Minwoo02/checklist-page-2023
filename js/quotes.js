const quotes = [
  {
    quote: "미래는 이미 다가왔다. 모두에게 공평하게 나눠지지 않았을 뿐.",
    author: " - 윌리엄 깁슨",
  },
  {
    quote:
      "나에게 나무를 베기 위해 여섯시간을 주면, 첫 네 시간은 도끼를 가는데 쓸 것이다.",
    author: " - 아브라함 링컨",
  },
  {
    quote:
      "만약 당신이 지금 어디 가고 있는지 알지 못한다면, 결국 이상한 곳에 도착하고 말 것이다.",
    author: " - 요기 베라",
  },
  {
    quote:
      "전투를 준비함에 있어서 계획은 쓸모 없는 것이라는 것을 항상 알게된다. 그러나 계획을 세우는 것은 피할 수 없는 의무와도 같다.",
    author: " - 드와이트 D. 아이젠하우어",
  },
  {
    quote:
      "내가 가진 모든 수단이 잠제적으로 좋지 않다고 판단될 때는 문제 속으로 들어가기를 멈취야 한다.",
    author: " - 잭 캠벨",
  },
  { quote: "언제나, 언제나 계획을 세워라.", author: " - 릭 리어던" },
  {
    quote: "한 시간의 계획이 열 시간의 일을 절약한다.",
    author: " - 데일 카네기",
  },
  {
    quote:
      "꿈꾸는 자들과 계획을 세우는 자들이 있다. 계획을 세우는 자들이 꿈을 실현하게 된다.",
    author: " - 에드윈 루이스 콜",
  },
  {
    quote:
      "중요한 것은 당신의 계획표에 있는 것의 우선순위를 세우는 것이 아니라, 당신의 우선순위를 계획표에 넣는 것이다.",
    author: " - 스테판 코비",
  },
  {
    quote: "계획을 세우는 것은 평생에 걸쳐서 완성해야 할 기술이자 예술이다.",
    author: " - 패딕 반 질",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
