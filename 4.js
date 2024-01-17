
  this.name = name;
  this.power = power;
  this.isPlugged = false;
} // метод, который определяет прибор как включенный в розетку 

ElectricalAppliance.prototype.plugIn = function() {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power : 0;
}

 
const computer = new ElectricalAppliance('computer', 220); 
const internet = new ElectricalAppliance('internet', 1000);

console.log(computer.getPowerUsed() + internet.getPowerUsed());

computer.plugIn(); 
console.log(computer.getPowerUsed() + internet.getPowerUsed());

internet.plugIn(); 
console.log(computer.getPowerUsed() + internet.getPowerUsed());
