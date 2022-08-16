let myMap = new Map();

myMap.set("Стамбул", "5.5 flyHours");
myMap.set("Шри-Ланка", "10 flyHours");
myMap.set("Сочи", "4 flyHours");


for (let name of myMap.keys()){
  console.log(name);
}

for (let pair of myMap.entries()){
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}

// или еще вариант
// myMap.forEach(function(value,key) {
//   console.log('Ключ - ' + key +', значение - ' + value);
// });