const quotes = [
    {
        quote: "지혜는 듣는 데서 오고 후회는 말하는 데서 온다",
        author: "",
    },
    {
        quote: "'지금이 최악'이라고 말 할 힘이 있다면 아직은 최악이 아니다",
        author: "윌리엄 셰익스피어",
    },
    {
        quote: "상상할 수 없는 꿈을 꾸고 있다면, 상상할 수 없는 노력을 해라",
        author: "작가미상",
    },
    {
        quote: "인생의 뜻을 세우는데 적당한 때는 없다",
        author: "볼드윈",
    },
    {
        quote: "사람들은 할 말이 없으면 욕을 한다",
        author: "볼테르",
    },
    {
        quote: "진흙 속에서 피는 꽃",
        author: "작가미상",
    },
    {
        quote: "정해진 것은 아무것도 없다. 정해진 운명 또한 없다",
        author: "도교",
    },
    {
        quote: "실패는 성공을 돋보이게 하는 조미료",
        author: "트루먼 카포티",
    },
    {
        quote: "길을 잃는다는 것은 곧, 길을 알게 되는 것이다",
        author: "동아프리카 속담",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다",
        author: "앙드레 말로",
    },
    {
        quote: "인간을 성공으로 이끄는 가장 강력한 무기는 바로 습관이다",
        author: "작가미상",
    },
    {
        quote: "하기 싫어도 해라. 감정은 사라지고 결과는 남는다",
        author: "작가미상",
    },
    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney",
    },
    {
        quote: "She can do, he can do, why not me?",
        author: "김태연",
    },
    {
        quote: "Don't dream, Be it",
        author: "Tim curry",
    },
    {
        quote: "The die is cast",
        author: "Julius Caesar",
    },
    {
        quote: "When they go low, wo go high",
        author: "Michelle Obama",
    },    {
        quote: "I was never less alone than when by myself",
        author: "Edward Gibbon",
    },
];

const quote = document.querySelector("#quote span"); 
// const author = document.querySelector("#quote span:last-child"); 
const todaysQuote = (quotes[Math.floor(Math.random() *quotes.length)]);

quote.innerText = `${todaysQuote.quote} / ${todaysQuote.author}`;