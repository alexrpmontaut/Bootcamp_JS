const createLocationRow = (location) => {
    const element = document.createElement("div");

    const num = document.createElement("span");
    element.append(location.type + " - ");
    element.appendChild(num);

    const link = createRowText(location);
    element.appendChild(link);
  
    element.className = "location-row";
  
    return element;
  };
  
  const createRowText = (location) => {
    const element = document.createElement("span");
    element.append(location.name);
  
    return element;
  };
  
  const showLocation = (location) => {
    console.log("location", location);
    const locationDetail = document.getElementById("location-detail");
  
    locationDetail.innerHTML = "";
    locationDetail.appendChild(createParagraph("Name: " + location.name));
    locationDetail.appendChild(createParagraph("Type: " + location.type));
    locationDetail.appendChild(createParagraph("Dimension: " + location.dimension));
  };
  
  const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
  };
  
  export { createLocationRow, showLocation };