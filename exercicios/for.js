let nameSpaceship  = prompt("Digite o nome da nave: ")
let choseCharfield = prompt("Digite qual caracter deseja substituir: ")
let charfield = prompt("Digite por qual caracter deseja substituir: ")
let newSpaceship = ""

for(let i = 0; i < nameSpaceship.length;i++){
    if(nameSpaceship[i] == choseCharfield){
        newSpaceship += charfield
    }else{
        newSpaceship += nameSpaceship[i]
    }

    
}
console.log(newSpaceship)
alert("o novo nome da nave é: " + newSpaceship)