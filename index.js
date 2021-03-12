// Write your solution in this file!

//define a employee variable and assign it to an Object containing name and streetAddress keys
const employee = {
    name: 'Christine',
    streetAddress: '42 Wallaby Way'
}


//updateEmployeeWithKeyAndValue(): this function should take in three arguments: a employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in.
function updateEmployeeWithKeyAndValue(employee, key, value){

    return Object.assign({}, employee, { [key] : value });

}

//destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value;
    return employee;

}

//deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair.
function deleteFromEmployeeByKey(employee, key) {
    var deleteEmployee = Object.assign( {}, employee);
    delete deleteEmployee[key];
    return deleteEmployee;
}


//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}