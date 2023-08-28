const log = async (string) => {
    console.log(string)
}

const logError = async (string) => {
    console.log(`\x1b[41m%s\x1b[0m ${string}`, ` ERROR `)
}
const logWarn = async (string) => {
    console.log(`\x1b[43m%s\x1b[0m ${string}`, ` Warn `)
}
const logOk = async (string) => {
    console.log(`\x1b[42m%s\x1b[0m ${string}`, ` Ok `)
}

module.exports = {log, logError, logWarn, logOk};
