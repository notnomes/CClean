const log = (s) => console.log(string) // prints the (s) object :)
const err = (s) => console.log(`\x1b[41m%s\x1b[0m ${s}`, `   `) // this is prints the string with error text on start with backround
const warn = (s) => console.log(`\x1b[43m%s\x1b[0m ${s}`, ` Warn `) // this is warn command with colors :)
const succ = (s) => console.log(`\x1b[42m%s\x1b[0m ${s}`, ` Ok `) // this is prints string in object with backround color

module.exports = {log, warn, err, succ} // exports all functions :)
