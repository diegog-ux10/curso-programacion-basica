const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'Mi nivel de energía actual es ' + this._energyLevel;
      } else {
      return 'Mal funcionamiento del sistema: no se puede obtener el nivel de energía';
  
      }
    }  
  };
  
  console.log(robot.energyLevel);