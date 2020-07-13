global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

global.matchMedia =
  global.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
