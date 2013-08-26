angular.module('BrewingTools.factories', ['ngResource'])
  .factory('AbvCalculator', [ function() {
    var abvCalculator = {};
    
    abvCalculator.calculate = function (sg, fg, bottleConditioned) {
      var alcFactor = 100.3 * (sg - fg) + 125.65;
      var abv = alcFactor * (sg - fg);
      if (bottleConditioned)
      {
        abv += 0.005 * alcFactor;
      }
      abv = this.simpleRound(abv);
      return abv;
    };

    abvCalculator.simpleRound = function (number)
    {
      return (Math.round(number * 100) / 100).toFixed(2);
    }

    return abvCalculator;
  }])
  
  .factory('IbuQueryCalc', ['$resource', function($resource) {
    return $resource('/rest/ibu/calc');
  }])

  .factory('IbuCalculator', [ function() {
    var ibuCalculator = {};

    ibuCalculator.calculate = function(sg, additionTime, aaRating, qty, volume) {
      var bigFactor = getBigFactor( sg );
      var boilTimeFactor = getBoilTimeFactor( additionTime );
      var decimalAAUtil = bigFactor * boilTimeFactor;
      var mgPerL = getAlphaAcidConcentration( aaRating / 100, qty, volume );

      var ibu = decimalAAUtil * mgPerL;

      return round( ibu ).toDecimalPlaces( 2 );
    };

    ibuCalculator.getAlphaAcidConcentration = function( aaRating, grams, volume )
    {
      return (aaRating * grams * 1000) / volume;  
    }

    ibuCalculator.getBoilTimeFactor = function ( boilTime )
    {
      return (1 - Math.exp( -0.04 * boilTime )) / 4.15;
    }

    ibuCalculator.getBigFactor = function( gravity )
    {
      return 1.65 * Math.pow( 0.000125, gravity - 1 );
    }

    return ibuCalculator;
  }]);;
