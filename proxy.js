class Leader {
    receiveRequest (offer) {
        console.log(`Result:: ${offer}`);
    }
    
}

class Secretary {
    constructor() {
        this.leader = new Leader()
    }

    receiveRequest(offer) {
        this.leader.receiveRequest(offer)
    }
}

class Developer {
    constructor(offer) {
        this.offer = offer
    }

    applyFor(target) {
        target.receiveRequest(this.offer)
    }
}

// Use

const devs = new Developer('JS upto 5k USD')
devs.applyFor(new Secretary())