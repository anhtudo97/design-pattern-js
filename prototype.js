class LeagueOfLegends {
  constructor(name, team, position, kills) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.kills = kills;
  }

  kills() {
    this.kills++;
  }

  clone() {
    return new LeagueOfLegends(this.name, this.team, this.position, this.kills);
  }
}

LeagueOfLegends.prototype.stats = {
  minutesPlayer: 0,
};

const prototypePattern = new LeagueOfLegends('garen', 1, 'top', 0);

// create multiple instance of the League of legend player

const garen = prototypePattern.clone();
garen.stats = 1000;
const lux = prototypePattern.clone();
lux.name = 'lux';
lux.position = 'middle';

// test
garen.kills();
console.log(`${garen.name} has recored ${garen.kills} kill this season ${JSON.stringify(garen.stats)}`);

lux.kills();
console.log(`${lux.name} has recored ${lux.kills} kill this season ${JSON.stringify(lux.stats)}`);
