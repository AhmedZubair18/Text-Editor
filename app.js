const boldBtn = document.getElementById("boldBtn")
const itelicBtn = document.getElementById("itelicBtn")
const underlineBtn = document.getElementById("underlineBtn")
const editor = document.getElementById("editor")


function execCommand (command ,value = null){
    document.execCommand(command ,false,value)
}

boldBtn.addEventListener('click' , () => execCommand('bold') )
itelicBtn.addEventListener('click' , () => execCommand ('italic'))
underlineBtn.addEventListener('click', () => execCommand('underline'))
