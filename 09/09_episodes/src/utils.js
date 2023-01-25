const createEpisodeRow = (episode) => {
    const element = document.createElement("div");
  
    const num = document.createElement("span");
    element.append(episode.episode + " - ");
    element.appendChild(num);
  
    const link = createRowText(episode);
    element.appendChild(link);
  
    element.className = "episode-row";
  
    return element;
  };

  const createRowText = (episode) => {
    const element = document.createElement("span");
    element.append(episode.name);
  
    return element;
  };
  
  const showEpisode = (episode) => {
    console.log("episode", episode);
    const episodeDetail = document.getElementById("episode-detail");
  
    episodeDetail.innerHTML = "";
    episodeDetail.appendChild(createParagraph("Name: " + episode.name));
    episodeDetail.appendChild(createParagraph("Episode: " + episode.episode));
    episodeDetail.appendChild(createParagraph("Air Date: " + episode.air_date));
  };
  
  const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
  };
  
  export { createEpisodeRow, showEpisode };