define(function() {
  // usage: log('inside coolFunc', this, arguments);
  // paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
  var log = window.log = {};
  window.log = function () {
    log.history = log.history || new Array(1000); // store logs to an array for reference
    log.history.shift();
    log.history.push(arguments);
    if (this.console) {
      console.log(Array.prototype.slice.call(arguments));
    }
  };
});
