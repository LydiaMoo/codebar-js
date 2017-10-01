// This is where all the practise code from the Introduction to Javascript tutorial goes
console.log('hello');

function hello(person) {
  return greeting(person);
}

function greeting(person) {
  return 'Hello ' + person + '!';
}

function conversation(person, topic, pronoun) {
  console.log(hello(person));
  console.log('How are you? ' + person);
  console.log('Do you like ' + topic + "?");
  console.log('Goodbye ' + pronoun);
}

var person = {
  first_name: 'Lydia',
  likes: 'Dogs'
};

var person_a = {
  first_name: "Archibald",
  likes: "Owls"
};

var person_b = person_a;

console.log("Before");
console.log(person_a.first_name);
console.log(person_b.first_name);

person_a.first_name = "Aberforth";

console.log("After");
console.log(person_a.first_name);
console.log(person_b.first_name);
