//Project: Tamagotchi

class Tamagotchi {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
      this.age = 0;
      this.hunger = 0;
      this.happiness = 0;
      this.sick = false;
    }
  
    feed() {
      this.hunger -= 10;
      this.happiness += 5;
    }
  
    play() {
      this.hunger += 5;
      this.happiness += 10;
    }
  
    giveMedicine() {
      if (this.sick) { 
        this.sick = false;
        this.happiness += 5;
      }
    }
  
    getAge() {
      return this.age;
    }
  
    getHunger() {
      return this.hunger;
    }
  
    getHappiness() {
      return this.happiness;
    }
  
    isSick() {
      return this.sick;
    }
  
    update() { // update pets age, hunger, happiness, and sick status
      this.age += 1;
      this.hunger += 5;
      this.happiness -= 5;
      if (this.hunger > 50 || this.happiness < 0) {
        this.sick = true;
      }
    }
  }


  let myPet = new Tamagotchi("Ginjirotchi", "Frog", "Blue");

  //Tamagotchi consrtuction
  console.log(myPet.getAge());
  console.log(myPet.getHunger());
  console.log(myPet.getHappiness());
  console.log(myPet.isSick());

  //Feed method  
  myPet.feed();
  console.log(myPet.getHunger());
  console.log(myPet.getHappiness());
 
  //Play method 
  myPet.play();
  console.log(myPet.getHunger());
  console.log(myPet.getHappiness());
  //Give medicine method   
  myPet.giveMedicine();
  console.log(myPet.isSick());
 
  //update on the pet method 
  myPet.update();
  console.log(myPet.getAge());
  console.log(myPet.getHunger());
  console.log(myPet.getHappiness());
  console.log(myPet.isSick());
  
