'use strict'

// Round robin with singleton

/** Modulus
 * const num_of_servers = 3 
 * const user_id_1 = 1312123 
 * const user_id_2 = 1251515
 * const user_id_3 = 1515144
 * const user_id_4 = 2349283
 *
 * console.log(user_id_1 % num_of_servers); // lấy số dư chính là server
 * console.log(user_id_2 % num_of_servers); // lấy số dư chính là server
 * console.log(user_id_3 % num_of_servers); // lấy số dư chính là server
 * console.log(user_id_4 % num_of_servers); // lấy số dư chính là server
*/

class RoundRobin {
    constructor() {
        if(RoundRobin.instance) {
            return RoundRobin.instance
        }
        RoundRobin.instance = this
        this.servers = []
        this.index = 0
    }

    addServer(server) {
        this.servers.push(server)
    }

    getNextServer() {
        if(!this.servers.length) {
            throw new Error('No server avaiable!')
        }

        const server = this.servers[this.index]
        // modulus
        this.index = (this.index + 1) % this.servers.length

        return server
    }
}


const loadBalancer = new RoundRobin()
const loadBalancer1 = new RoundRobin()

console.log(`Compare: ${loadBalancer === loadBalancer1}`);

loadBalancer.addServer('Server 01')
loadBalancer.addServer('Server 02')
loadBalancer.addServer('Server 03')
loadBalancer.addServer('Server 04')

console.log(loadBalancer.getNextServer()); // Server 01
console.log(loadBalancer.getNextServer()); // Server 02
console.log(loadBalancer.getNextServer()); // Server 03
console.log(loadBalancer.getNextServer()); // Server 04
console.log(loadBalancer.getNextServer()); // Server 01