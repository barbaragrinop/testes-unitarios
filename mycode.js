
const sum = (a, b) => {
    return a + b
};

const inOneHour = () => {
    const now = Date.now()
    const oneHourInMili = 1 * 60 * 60 * 1000 //cada hr = 60min; cada min = 60s; cada seg = 1000mseg
    return now + oneHourInMili
}

module.exports = { sum, inOneHour }
