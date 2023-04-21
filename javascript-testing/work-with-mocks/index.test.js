const {error} = require("./src/constants")
const File = require("./src/file")
const assert = require('assert')

// IFEE
;(async () => {
  
  // Variables created in this block are only valid during its execution.
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

})()