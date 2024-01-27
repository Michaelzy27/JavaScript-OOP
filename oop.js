class Mike{
    fingers = 5            // this is a class property
    leg = 2                // this is a class property
    
    static head = 1             // this is a static property
    static eye = 2              // this is a static property

    extraInfo() {
        console.log("This user has " + this.fingers + " fingers and " + this.leg + " legs.")
    }

    static basicInfo() {
        console.log("This user has " + this.head + "head and "+ this.eye + " eyes.")
    }

}
const mike = new Mike()        // create object of the class
console.log(mike.fingers)      // access class property by using the object instance to call the property 
console.log(mike.leg)          // access class property by using the object instance to call the property 
console.log(Mike.head)         // access static property by using the class itself to call the property
console.log(Mike.eye)          
mike.extraInfo();
Mike.basicInfo();