export const FormulaCheck = (props, setTragectories) => {
  const propsWithoutBrace = props.replace(/[\[\]]/g, ""); //to delete []
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
