/*******************Objects without methods/functions*****************/
// const car = {
//     color: 'Red',
//     number_of_wheels: 2,
//     head_light_type: 'square',
//     company: 'Hyundai',
//     is_extra_indicator: true,
//     are_there_any_extra_fitting: true
// }


// console.log(car)
// console.log(car.color, car.number_of_wheels, car.head_light_type, car.company, car.is_extra_indicator,
//     car.are_there_any_extra_fitting)

/*******************Objects with methods/functions*****************/
const car = {
    color: 'Red',
    numberOfWheels: 4,
    headLightType: 'square',
    company: 'Hyundai',  // [1,2,3,4,556,6,6]
    are_there_any_extra_fitting: true,
    is_extra_indicator: true,
    seatNumbers: [1, 2, 3, 4],
    steering: {
        type: 'round',
        isPower: true,
        logo: true,
        horn: true,
        isMovable: false,
        sampleObj: {
            sayHi: 'Hi hello',
            greet: (f1, f2) => {
                console.log(f1, f2)
                return 'Welcome all !!!'
            }
        },
        func: () => {
            return 'To change the direction of car'
        }
    },
    speed: function (speedMessage) {
        console.log('The speed is:', speedMessage)
        return 150
    },
    comfort: function (comfortMessage) {
        console.log(comfortMessage)
        return 'Too comfortable'
    },
    airBags: function (airBagsMessage) {
        console.log(airBagsMessage)
        return 'Yes, 2 air bags'
    },
    brakes: power => {
        console.log(power)
        return 'Power brakes'
    },
    airConditioner: (minTemp, maxTemp) => {
        console.log(minTemp, maxTemp)
        return 'Yes, it is air conditioned !!!'
    }
}

console.log(car.steering.sampleObj.greet(25, 35))