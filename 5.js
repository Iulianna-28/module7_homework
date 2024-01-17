class ElectricalAppliance
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn()
  {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  getPowerUsed()
  {
    return this.isPlugged ? this.power : 0;
  }
}

const computer = new ElectricalAppliance('computer', 220);
const internet = new ElectricalAppliance('internet', 1000);

console.log(computer.getPowerUsed() + internet.getPowerUsed());

computer.plugIn();
console.log(computer.getPowerUsed() + internet.getPowerUsed());

internet.plugIn();
console.log(computer.getPowerUsed() + internet.getPowerUsed());
