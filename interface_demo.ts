function printLabel(labelledObj : {size : number}){
    console.log(labelledObj.size)
}

let myObj = {size : 10 , label : "size of 10 objects"}
printLabel(myObj)

////////////////////////////////////////////////

interface LabelledValue {
    label: string
    size : number
}

function printLabelv(labelledObjc: LabelledValue) {
    console.log(labelledObjc.label)
    console.log(labelledObjc.size)    
}

let myObjv = {size: 10, label: "Size 10 Object"}
printLabelv(myObjv)
