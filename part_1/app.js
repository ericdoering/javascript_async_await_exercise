let favoriteNumber = 10;
let baseURL = "http://numbersapi.com";

// Question 1

async function numFact() {
    let data = await axios.get(`${baseURL}/${favoriteNumber}?json`);
    console.log(data);
}
numFact();

// Question 2

let favoriteNumbers = [2, 9, 17]

async function numFacts() {
    let data = await axios.get(`${baseURL}/${favoriteNumbers}?json`)
    console.log(data)
}
numFacts();

// Question 3

async function appendFacts() {
    let facts = await Promise.all(Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favoriteNumber}?json`))
    );
    facts.forEach(data => {document.querySelector("body").append(`<p>${data.text}</p>`);
});
}
appendFacts();