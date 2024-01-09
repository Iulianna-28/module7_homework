const myName = {
    name: 'Yulianna',
    age: 23,
    year: 2000,
    city: 'Yekaterinburg',
};

getObjectName(myName);

function getObjectName(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}
