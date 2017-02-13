$("#description").typed({
      strings: [">^500 ^50 ^1000server-side engineer"],
      // typing speed
      typeSpeed: 0,
      // time before typing starts
      startDelay: 1000,
      // backspacing speed
      backSpeed: 0,
      // time before backspacing
      backDelay: 3000,
      // loop
      loop: false,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: true,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
});
