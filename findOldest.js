const findTheOldest = function(people) {
    if (Array.isArray(people)) {
        people.forEach((person) => {
            if (Object.keys(person).toString().includes('death')) {
                console.log('person is dead')
            };
            //let personName = person['name'];
           // let age = 

             
            ////birthKeyValue
            let age = person['yearOfBirth']
            Object.keys(person).forEach((key) => {
            if (key.includes('death')) {
                console.log(key);
            }});



            //console.log(Object.keys(el));
            //console.log(Object.values(el));
            if (Object.keys(people).toString().includes('name')) {
                const name = Object.keys(people).findIndex();
                console.log(name);

            };
            //console.log(Object.values(el))
            if (Object.keys(people).toString().toLowerCase().includes('birth')) {
                let birth = Object.keys(people);
               // console.log(birth);
            }

        });
        //return personName; 
    } return 'a'
    /*iterar pelos objetos
    let birth = (new Date(1970).getFullYear());
    let currentYear = (new Date().getFullYear());
    console.log(currentYear - birth); */
};
const somePeople = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(somePeople);
// Do not edit below this line
module.exports = findTheOldest;
