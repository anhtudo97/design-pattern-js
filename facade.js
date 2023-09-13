class Discount {
    calc(value) {
        return value * 0.9
    }
}

class Shipping {
    calc() {
        return 5
    }
}

class Fees {
    calc(value) {
        return value * 1.05
    }
}

class ShopeeFacadePattern {
    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    calc(price) {
        price = this.discount.calc(price)
        price = this.fees.calc(price)
        price += this.shipping.calc()

        return price
    }
}

const buy = (price) => {
    const shopee = new ShopeeFacadePattern()
    console.log(`Price:: ${shopee.calc(price)}`);
}

buy(140)