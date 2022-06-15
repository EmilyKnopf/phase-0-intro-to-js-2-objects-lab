// Write your solution in this file!
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj}
    newObj[key] = value

    return newObj

}

const employee = {
    name : "Emily",
    streetAddress: "123 happy way",
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value

    return obj
}

function deleteFromEmployeeByKey(obj, key, value){
    const deleteObject = {...obj}
    deleteObject[key] = value

    return deleteObject
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value

    return obj
}