function printLabel(labelledObj) {
    console.log(labelledObj.size);
}
var myObj = { size: 10, label: "size of 10 objects" };
printLabel(myObj);
function printLabelv(labelledObj) {
    console.log(labelledObj.label);
    console.log(labelledObj.size);
}
var myObjv = { size: 10, label: "Size 10 Object" };
printLabelv(myObjv);
