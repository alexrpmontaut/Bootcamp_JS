import "./styles.css";
import * as Utils from "./utils.js";
import * as DataBusiness from "./data-business";


DataBusiness.getData().then(locations => {
    document.getElementById("root").innerText = "";
    for (let location of locations) {
        var locationNode = Utils.createLocationRow(location);
        locationNode.id = location.id;
        document.getElementById("root").append(locationNode);
    }
}).then( () => {
    var fichas = document.getElementsByClassName("location-row");
    for (let ficha of fichas){
        ficha.addEventListener("click", () => DataBusiness.getDetail(ficha.id).then(location => {
            Utils.showLocation(location);
        }));
    }
});