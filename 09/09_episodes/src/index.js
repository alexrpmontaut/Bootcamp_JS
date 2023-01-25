import "./styles.css";
import * as Utils from "./utils.js";
import * as DataBusiness from "./data-business";


DataBusiness.getData().then(episodes => {
    document.getElementById("root").innerText = "";
    for (let episode of episodes) {
        var episodeNode = Utils.createEpisodeRow(episode);
        episodeNode.id = episode.id;
        document.getElementById("root").append(episodeNode);
    }
}).then( () => {
    var fichas = document.getElementsByClassName("episode-row");
    for (let ficha of fichas){
        ficha.addEventListener("click", () => DataBusiness.getDetail(ficha.id).then(episode => {
            Utils.showEpisode(episode);
        }));
    }
});