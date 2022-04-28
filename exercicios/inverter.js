let nameSpaceshipOriginal = prompt("Digite o nome da nave: ")
let newSpaceshipName = ""

for(let i = nameSpaceshipOriginal.length -1 ;i >= 0; i--){
    if(nameSpaceshipOriginal[i] == "e"){
        break
    }
    newSpaceshipName += nameSpaceshipOriginal[i]
}

console.log(newSpaceshipName)