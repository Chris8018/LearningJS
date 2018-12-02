function editT(regex, input, helpId, helpMessage) {
    if (!regex.test(input)) {
        cleanSpan(helpId);
        helpId.appendChild(document.createTextNode(helpMessage));
    } else
        cleanSpan(helpId);
}

function cleanSpan(helpId){
    if(helpId != null)
        while(helpId.childNodes[0])
            helpId.removeChild(helpId.childNodes[0]);
}

function isTheFieldEmpty(inputField, helpId) {
    let regex = /^[A-Za-z\.\'\-]{1,15}\s?[A-Za-z\.\'\-]{1,15}\s?[A-Za-z\.\'\-]{1,15}/;
    return editT(regex, inputField.value, helpId, "Please enter a valid name");
}