// level 0 without simple factory pattern

const serviceLogistics = cargoVolume => {
    switch (cargoVolume) {
        case '10':
            return {
                name: 'Truck 10',
                doors: 6,
                price: '100.000VND'
            }

        case '20':
            return {
                name: 'Truck 20',
                doors: 16,
                price: '1.000.000VND'
            }

        default:
            break;
    }
}

console.log(serviceLogistics('20'));

//----------------------------------------------------------------

// level 1 simple factory pattern
// class ServiceLogistics {
//     constructor(doors = 6, price = '100.000VND', name = 'Truck') {
//         this.doors = doors
//         this.price = price
//         this.name = name
//     }

// Nhược điểm khi mở rộng sẽ phải sửa hàm getTransport
//     static getTransport = cargoVolume => {
//         switch (cargoVolume) {
//             case '10':
//                 return new ServiceLogistics()

//             case '20':
//                 return new ServiceLogistics(16, '1.000.000VND', 'Truck 20')

//             default:
//                 break;
//         }
//     }
// }

console.log('Level 1', ServiceLogistics.getTransport('10'));

//----------------------------------------------------------------

// level 2 method factory pattern
class Car {
    constructor({ name = 'Ford Ranger 2023', doors = 4, price = '10 VND', customerInfo = {} }) {
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfo = customerInfo

    }
}

// create service logistic
class ServiceLogistics {
    transportClass = Car

    getTransport = customerInfo => {
        return new this.transportClass(customerInfo)
    }
}

// order for customer by Car
const carService = new ServiceLogistics()
console.log('Car service::', carService.getTransport({
    customerInfo: {
        name: 'tuanh', cargoVolume: '100kg'
    }
}));


// Solution to expand the service logistic have type different Car
// Solution 1
class Truck {
    constructor({ name = 'Container 2023', doors = 16, price = '100 VND', customerInfo = {} }) {
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfo = customerInfo
    }
}

carService.transportClass = Truck
console.log('Truck service::', carService.getTransport({
    customerInfo: {
        name: 'tu anh container', cargoVolume: '1000kg'
    }
}));

// Solution 2
class TruckService extends ServiceLogistics {
    transportClass = Truck
}

const truckService = new TruckService()
console.log('Truck service::', truckService.getTransport({
    customerInfo: {
        name: 'tu anh container 2', cargoVolume: '1000kg'
    }
}));