const log = (s) => console.log(s) // prints the (s) object :)
const err = (s) => console.log(`\x1b[41m%s\x1b[0m ${s}`, ` \x1b[1mERR \x1b[0m`) // this is prints the string with error text on start with backround
const warn = (s) => console.log(`\x1b[43m%s\x1b[0m ${s}`, ` \x1b[1mWARN \x1b[0m`) // this is warn command with colors :)
const succ = (s) => console.log(`\x1b[42m%s\x1b[0m ${s}`, ` \x1b[1mOK \x1b[0m`) // this is prints string in object with backround color

module.exports = {log, warn, err,succ} // exports all functions :)
