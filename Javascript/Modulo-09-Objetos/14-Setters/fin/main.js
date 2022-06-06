const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Los sensores están actualmente bajos.'
      }
    },
  
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pasa un número mayor o igual a 0');
      }
    }
    
  };
  
  robot.numOfSensors = 100;
  console.log(robot.numOfSensors);
  