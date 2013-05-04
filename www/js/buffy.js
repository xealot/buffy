(function() {
  'use strict';

  window.calculateGrecian = function(wrist) {
    var chest = wrist * 6;
    return {
      chest: chest,
      waist: chest * 0.8,
      hip: chest * 0.88,
      bicep: chest * 0.31,
      forearm: chest * 0.27,
      thigh: chest * 0.5,
      calf: chest * 0.3,
      neck: chest * 0.25
    };
  }

}());
