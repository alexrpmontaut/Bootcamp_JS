import "./styles.css";
import * as Utils from "./utils.js";
import * as DataBusiness from "./data-business";


DataBusiness.getData().then(characters => {
    document.getElementById("root").innerText = "";
    for (let char of characters) {
        var characterNode = Utils.createCharacterRow(char);
        characterNode.id = char.id;
        document.getElementById("root").append(characterNode);
    }
}).then( () => {
    var fichas = document.getElementsByClassName("character-row");
    for (let ficha of fichas){
        ficha.addEventListener("click", () => DataBusiness.getDetail(ficha.id).then(character => {
            Utils.showCharacter(character);
        }));
    }
});