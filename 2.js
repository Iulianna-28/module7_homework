const myName = {
    name: 'Yulianna',
    age: 23,
    year: 2000,
    city: 'Yekaterinburg',
};

console.log(isProperty(myName,'Yekaterinburg'));

function isProperty(object, property) {
  if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}
