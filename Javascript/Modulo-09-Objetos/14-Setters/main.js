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
          
  };
  