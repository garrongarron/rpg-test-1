function onlyLetter(string) {
    var letters = /^[a-zA-Z0-9]+$/;
    if (string.match(letters)) {
        return true;
    } else {
        return false;
    }
}

export default onlyLetter