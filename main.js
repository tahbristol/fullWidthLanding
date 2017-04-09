(function(){

var introEl = $('div.intro');
var introHeadingH = introEl.find('h1').height();
var windowH = $(window).height();

      introEl.css('padding', (windowH - introHeadingH)/2 + 'px 0');

      $(document).on('scroll', function(){
        introEl.slideUp(2000, function(){
          $(document).off('scroll');
        });
      });

})();
