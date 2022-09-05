
const { sum, inOneHour } = require('./mycode')

describe('math functions', () => { //descricao das funcoes dentro do escopo (organização)
    it('sums 2 numbers', () => { //It vem do jest
        expect(sum(1, 2)).toBe(3) //o teste x o que é pra retornar
    })
})


describe('time functions', () => { //descricao das funcoes dentro do escopo (organização)
    it('returns the timestamp for 1 hour', () => { //It vem do jest
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(3600000) //o teste x o que é pra retornar
        global.Date.now = realDateNow
    })
})