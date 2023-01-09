let obj;
async function getConvertedData() {
    return fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CPKR', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b8f2746a5dmsh338ab784a8e1f37p12b0b8jsneff8576efe4f',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        },
    })
        .then(response => response.json())
        .then(response => { obj = response; })
        .catch(err => console.error(err));
}
async function Test() {
    let a = await getConvertedData();
    return obj;
}
let currentRates = await Test();
let newCurrentRates = Object.values(currentRates);
let myNewCurrentRates = newCurrentRates[4];
let liveNewCurrentRates = Object.entries(newCurrentRates[4]);
export default liveNewCurrentRates;
