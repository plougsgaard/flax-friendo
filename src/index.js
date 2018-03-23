const fetch = require('node-fetch')

const URL = 'http://localhost:8003'
const testProgram = 'def f(): Int = 43333'

const myProgramme = async () => {
  const res = await fetch(URL, { method: 'post', body: testProgram })
  const json = await res.json()
  console.log('wooo', json)
}


myProgramme()
