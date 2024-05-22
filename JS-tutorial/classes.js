/*******************************Class without functions/methods********************/

class Tiger1 { // In real world dev, always people use Class.
    constructor(Color, Family, Mammal, IsCarnivorous) {  // constructor is a function that gets invoked/called right at the object creation.
        this.colorOfTiger = Color // 'this' is a JS keyword -> 'this' means the current object
        this.familyOfTiger = Family
        this.mammal = Mammal
        this.isCarnivorous = IsCarnivorous
    }
}

const tigerFromClass = new Tiger('black and orange', 'cat', true, true) // new is a JS keyword that creats a new object.


/*******************************Class with functions/methods********************/

class Tiger2 {
    constructor(Color, Family, Mammal, IsCarnivorous) {
        this.colorOfTiger = Color
        this.familyOfTiger = Family
        this.mammal = Mammal
        this.isCarnivorous = IsCarnivorous
    }
    mainActivity = (activity) => {                   // function mainActivity (){function body}
        console.log(activity)
        return 'Main activity is hunting'
    }
    huntingStyle = function (style) {
        console.log(style)
        return 'They are ambush attackers'
    }
}

const tiger2 = new Tiger2('black and orange', 'cat', true, true)

console.log(tiger2.huntingStyle('Ambush'))
console.log(tiger2.mainActivity('Hunting'))