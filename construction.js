function construct(name)
{
let person = {
  name: name,
  material: "human",
  assemble: true,
  duration: 1000
};
return person;
}

const somePerson = construct('Gene');
console.log('Person name is: ' + somePerson.name);
console.log('Person is made out of material: ' + somePerson.material);
console.log('Person is assembled: ' + somePerson.assemble);
console.log('Person duration is: ' + somePerson.duration);





