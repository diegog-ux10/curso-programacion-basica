const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `Soy ${this.model} y mi nivel actual de energia es ${this.energyLevel}.`;
    }
  };

  console.log(robot.provideInfo());