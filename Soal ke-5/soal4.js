const reverseKata = (kata) => {
    let kataBaru = dataKata(kata);
    console.log(kataBaru);
    let tempString = '';
    let result = '';

    for (let i = 0; i < kataBaru.length; i++) {
        if (kataBaru[i] === ' ') {
            result += tempString + ' '
            tempString = '';
        } else {
            tempString = kataBaru[i] + tempString
        }
    }
    if (tempString.length !== 0) {
        result += tempString
    }
    return result
}

const dataKata = (result) => {
    let string = '';
    for (let i = result.length -1 ; i >= 0; i--) {
        string += result[i]
    }
    return string
}

console.log(reverseKata('Saya cinta PLUGIN'));