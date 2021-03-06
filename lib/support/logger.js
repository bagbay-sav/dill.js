// Generated by CoffeeScript 1.6.3
var LEVEL, LEVELS, log, logging, write, _ref,
  __slice = [].slice;

log = console.log;

write = process.stdout.write;

LEVEL = ((_ref = process.env.LOG_LEVEL) != null ? _ref.toLowerCase() : void 0) || 'none';

LEVELS = ['none', 'error', 'warn', 'info'];

logging = function(level) {
  return LEVELS.indexOf(LEVEL) >= LEVELS.indexOf(level);
};

module.exports = {
  info: function() {
    var messages;
    messages = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (logging('info')) {
      return log(messages.join(' '));
    }
  },
  warn: function() {
    var messages;
    messages = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (logging('warn')) {
      return log(messages.join(' '));
    }
  },
  error: function() {
    var messages;
    messages = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (logging('error')) {
      return log(messages.join(' '));
    }
  },
  silence: function(code) {
    if (logging('info')) {
      return code();
    } else {
      console.log = process.stdout.write = function() {};
      return code().then(function() {
        var _ref1;
        _ref1 = [log, write], console.log = _ref1[0], process.stdout.write = _ref1[1];
        return arguments[0];
      });
    }
  }
};
