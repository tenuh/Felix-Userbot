function successfullMessage(msg) {
    return "β *Felix*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *Felix*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *Felix*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
