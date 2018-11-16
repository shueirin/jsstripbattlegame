var will = {
    name: 'William',
    yearOfBirth: 1981,
    job: 'Front End Developer'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;    
}

Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Zhou';

var will = new Person('William', 1981, 'Comic Artist');
var xtine = new Person('Christine Amelia', 1986, 'Merchandizer');
var celine = new Person('Celine Henrietta', 2017, 'Toddler');


will.calculateAge();
xtine.calculateAge();
celine.calculateAge();

console.log(will.name +' ' +will.lastName);
console.log(xtine.name +' ' +xtine.lastName);
console.log(celine.name +' ' +celine.lastName);