class Observer {
  constructor(name) {
    this.namePick = name;
  }

  updateStatus(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.namePick} :::: PING :::: ${JSON.stringify(location)}`);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}

const sub = new Subject();

// pick
const garen = new Observer('garen');
const lux = new Observer('lux');

// add to team
sub.addObserver(garen);
sub.addObserver(lux);

// PING
sub.notify({ long: 123, lat: 222 });
