/*export default function isInputValid(event){
    event.trim();
    console.log("event: ", event);
    var newJson = event.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
    newJson = newJson.replace(/'/g, '"');
    var inputArray = JSON.parse(newJson);
    const test = inputArray.every(isTragectoryType);
}

function isTragectoryType(element){
    const test = element.duration > 0 && element.speed > 0; 
    return element.duration && element.speed;
}
*/

export const FormulaCheck = (props, setTragectories) => {
  const propsWithoutBrace = props.replace(/[\[\]]/g, ""); //to delete []            console.log(propsWithoutBrace)
  const propsWithQuotationmarks = propsWithoutBrace.replace(
    /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
    '"$2":'
  ); // to put "" for the words
  const regex = /\{.*?\}/g;
  const matches = propsWithQuotationmarks.match(regex); // to divide the array into chunks of the right formale
  if (!matches) return false;
  if (matches.every(isTragectoryType)) {
    setTragectories(matches);
    return true;
  }
  /*
    matches.map((element) => {
    try {  
        const { duration, speed } = JSON.parse(element);
   
    // Überprüfe, ob duration und speed Zahlen sind
    if (typeof duration === "number" && typeof speed === "number") {
        // Formel ist gültig
        console.log("Formel ist gültig");
        return true;
    } else {
        // Formel ist ungültig
        console.log("Formel ist ungültig");
        return false;
    }
    } catch (error) {
    // Fehler beim Parsen der Formel
    console.log("Fehler beim Parsen der Formel");     
    return false; 
    }  
    ;})*/
};
function isTragectoryType(element) {
  if (!element) return false;
  try {
    const { duration, speed } = JSON.parse(element);
    if (!duration || !speed) return false;
    return typeof duration === "number" && typeof speed === "number";
  } catch (error) {
    console.log(error);
    return false;
  }
}
