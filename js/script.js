$(document).ready(function() {
  var devicePixelRatio = window.devicePixelRatio || 1,
      screenWidth = screen.width * devicePixelRatio,
      screenHeight = screen.height * devicePixelRatio;

  var $sceneContainer = $('.sceneContainer');
  var phoneAspectRatio = 375 / 667;

  if (screenWidth / screenHeight < 1) {
    //手機版動畫載入
    loadPhoneScenes();
    resizePhoneScenes();
  } else {
    //電腦平板版載入
    loadWebScenes();
    resizeWebScenes();
  }

  function resizePhoneScenes() {
    var ratio;

    if(($(document).width() / $(document).height()) < phoneAspectRatio) {
      ratio = $(document).width() / 375;
    } else {
      ratio = $(document).height() / 667;
    }

    $sceneContainer.each(function( index ) {
      $( this ).css('transform', 'scale(' + ratio + ')');
    });

  }

  function resizeWebScenes() {

  }

  function loadPhoneScenes() {
    $(window).on('resize', function () {
        resizePhoneScenes();
    });



    var tlScene01 = new TimelineMax({
        paused: true,
        onComplete: function() {
          tlScrollDown.play(0);
        }
      }),
      tlScene02 = new TimelineMax({ paused: true }),
      tlScene03 = new TimelineMax({ paused: true }),
      tlScene04 = new TimelineMax({ paused: true }),
      tlScene05 = new TimelineMax({ paused: true }),
      tlScene06 = new TimelineMax({ paused: true }),
      tlScene07 = new TimelineMax({ paused: true }),

      tlScene08 = new TimelineMax({ paused: true }),
      tlScene08heading = new TimelineMax({ paused: true }),
      tlScene08china = new TimelineMax({ paused: true }),
      tlScene08bottomText = new TimelineMax({ paused: true }),
      tlScene08japan = new TimelineMax({ paused: true }),

      tlScene09 = new TimelineMax({ paused: true }),
      tlScene10 = new TimelineMax({ paused: true }),
      tlScrollDown = new TimelineMax({ paused: true, yoyo: true, repeat: -1 });


      var topLineParameter = { scaleX: 0, ease: Power1.easeOut },
        bottomLineParameter = { scaleX: 0, opacity: 0, ease: Power1.easeOut, transformOrigin: '100% 50%' },
        HeadingParameter = { x: -100, opacity: 0, ease: Power1.easeOut },
        subHeadingParameter = { x: -20, opacity: 0, ease: Power1.easeOut },
        BottomTextParameter = { x: -50, opacity: 0, ease: Power1.easeOut };




      tlScrollDown.to("#fullpagePhoneScenes .svg01ScrollDown", 0.7, { y: 10, ease: Power1.easeOut });

      tlScene01.from("#fullpagePhoneScenes .svg01Cloud01", 0.6, { y: 100, opacity: 0 }, 0.3)
               .from("#fullpagePhoneScenes .svg01Cloud02", 0.6, { y: 100, opacity: 0 }, 0.6)
               .from("#fullpagePhoneScenes .svg01Cloud03", 0.6, { y: 100, opacity: 0 }, 0.9)
               .from("#fullpagePhoneScenes .svg01Cloud04", 0.6, { y: 100, opacity: 0 }, 1.1)
               .from("#fullpagePhoneScenes .svg01Cloud05", 0.6, { y: 100, opacity: 0 }, 1.3)
               .fromTo("#fullpagePhoneScenes .svg01Plane", 4, { x: -1500, y: 500, scale: 2 }, { x: 1500, y: -500, scale: 0.2 }, 0.9)
               .to(["#fullpagePhoneScenes .svg01Cloud01",
                    "#fullpagePhoneScenes .svg01Cloud02",
                    "#fullpagePhoneScenes .svg01Cloud03",
                    "#fullpagePhoneScenes .svg01Cloud04",
                    "#fullpagePhoneScenes .svg01Cloud05"
                    ], 0.8, { y: -1500, opacity: 0, ease: Back.easeIn.config(1.7) }, 2.8)


               .from("#fullpagePhoneScenes .svg01Character01", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 3.6)
               .from("#fullpagePhoneScenes .svg01Character02", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 3.8)
               .from("#fullpagePhoneScenes .svg01Character03", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4)
               .from("#fullpagePhoneScenes .svg01Character04", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.2)
               .from("#fullpagePhoneScenes .svg01Character05", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.4)
               .from("#fullpagePhoneScenes .svg01Character06", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.6)
               .from("#fullpagePhoneScenes .svg01Character07", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.8)
               .to("#fullpagePhoneScenes .svg01WholeCharacter", 0.8, { y: -240, scale: 0.8, transformOrigin: '50% 50%', ease: Power1.easeOut }, 5.4)


               .from("#fullpagePhoneScenes .svg01ChinaVsJapan", 1, { y: -100, opacity: 0 }, 6.1)

               .from("#fullpagePhoneScenes .svg01Door", 0.4, { y: -100, opacity: 0 }, 6.2)

               .from("#fullpagePhoneScenes .svg01Bg", 0.4, { y: -100, opacity: 0 }, 6.3)

               .from("#fullpagePhoneScenes .svg01People01", 0.4, { x: -100, opacity: 0 }, 6.4)
               .from("#fullpagePhoneScenes .svg01People02", 0.4, { x: -100, opacity: 0 }, 6.5)
               .from("#fullpagePhoneScenes .svg01People03", 0.4, { x: -100, opacity: 0 }, 6.6)
               .from("#fullpagePhoneScenes .svg01People04", 0.4, { x: -100, opacity: 0 }, 6.7)
               .from("#fullpagePhoneScenes .svg01People05", 0.4, { x: 100, opacity: 0 }, 6.8)
               .from("#fullpagePhoneScenes .svg01People06", 0.4, { x: 100, opacity: 0 }, 6.9)
               .from("#fullpagePhoneScenes .svg01People07", 0.4, { x: 100, opacity: 0 }, 7)

               .from("#phoneScene01 .BottomText", 0.4, BottomTextParameter, 7.1)

               .from("#fullpagePhoneScenes .svg01ScrollDown", 0.4, { y: 10, opacity: 0 }, 7.4);


      tlScene02.from("#phoneScene02 .topLine", 0.6, topLineParameter, 0.5)
               .from("#phoneScene02 .bottomLine", 0.6, bottomLineParameter, 0.5)
               .from("#phoneScene02 .Heading", 0.3, HeadingParameter, 0.7)
               .from("#phoneScene02 .subHeading", 0.4, subHeadingParameter, 0.8)


               .from("#fullpagePhoneScenes .svg02Door", 0.4, { y: -100, opacity: 0 }, 1)
      //---------------------------港澳
               .to("#fullpagePhoneScenes .svg02PeopleHongKongAndMacao", 0.7, { y: 190, opacity: 1, ease: Power1.easeIn }, 1.4)
               .to("#fullpagePhoneScenes .svg02PeopleHongKongAndMacao", 0.7, { x: -90, ease: Power1.easeOut }, 2.1)

               .from("#fullpagePhoneScenes .svg02BubbleHongKongAndMacao", 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.8)
               .from("#fullpagePhoneScenes .svg02TextHongKongAndMacao", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3)


               .call(animateNumberIncreasing, ["#fullpagePhoneScenes .svg02NumberHongKongAndMacao", 14.5, 1, 'percent']) //14.5 %

               .from("#fullpagePhoneScenes .svg02NumberHongKongAndMacao", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.5)
      //---------------------------中國
               .to("#fullpagePhoneScenes .svg02PeopleChina", 0.7, { y: 70, opacity: 1, ease: Power1.easeIn }, 1.9)
               .to("#fullpagePhoneScenes .svg02PeopleChina", 0.7, { x: -140, ease: Power1.easeOut }, 2.6)

               .from("#fullpagePhoneScenes .svg02BubbleChina", 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.3)
               .from("#fullpagePhoneScenes .svg02TextChina", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.5)

               .call(animateNumberIncreasing, ["#fullpagePhoneScenes .svg02NumberChina", 40.1, 1, 'percent']) //40.1 %

               .from("#fullpagePhoneScenes .svg02NumberChina", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.9)
      //---------------------------日本
               .to("#fullpagePhoneScenes .svg02PeopleJapan", 0.7, { y: 80, opacity: 1, ease: Power1.easeIn }, 2.4)
               .to("#fullpagePhoneScenes .svg02PeopleJapan", 0.7, { x: 130, ease: Power1.easeOut }, 3.1)

               .from("#fullpagePhoneScenes .svg02BubbleJapan", 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.8)
               .from("#fullpagePhoneScenes .svg02TextJapan", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4)

               .call(animateNumberIncreasing, ["#fullpagePhoneScenes .svg02NumberJapan", 15.6, 1, 'percent']) //15.6 %

               .from("#fullpagePhoneScenes .svg02NumberJapan", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4.4)
      //---------------------------東南亞
               .to("#fullpagePhoneScenes .svg02PeopleSoutheastAsia", 0.7, { y: 200, opacity: 1, ease: Power1.easeIn }, 2.9)
               .to("#fullpagePhoneScenes .svg02PeopleSoutheastAsia", 0.7, { x: 115, ease: Power1.easeOut }, 3.6)

               .from("#fullpagePhoneScenes .svg02BubbleSoutheastAsia", 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.3)
               .from("#fullpagePhoneScenes .svg02TextSoutheastAsia", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4.5)

               .call(animateNumberIncreasing, ["#fullpagePhoneScenes .svg02NumberSoutheastAsia", 13.7, 1, 'percent']) //13.7 %

               .from("#fullpagePhoneScenes .svg02NumberSoutheastAsia", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 5.3)


               .from("#phoneScene02 .BottomText", 0.4, BottomTextParameter, 5.2);























    //init fullpage.js
    $('#fullpagePhoneScenes').fullpage({
      navigation: true,
      navigationTooltips: [
        '來台旅客大車拚',
        '旅客都從哪裡來？',
        '他們都來做什麼？',
        '消費習慣的差異',
        '掃些什麼貨？',
        '喜歡住哪裡？',
        '住客國籍統計',
        '聚焦觀光旅館',
        '中國v.s.日本 大車拼',
        '中國選擇購物，日本選擇住宿'
      ],
      afterRender: function() {
        // TweenMax.to('.spinner', 1, { autoAlpha: 0 });
        // TweenMax.set(['#wrapper', '#fp-nav'], { opacity: 1 });

        tlScene01.play(0);
      },
      onLeave: function(index, nextIndex, direction) {
        switch (index) {
          case 1:
            tlScene01.pause();
            tlScrollDown.pause();
            break;
          case 2:
            tlScene02.pause();
            break;
          case 3:
            // tlScene03.pause();
            break;
          case 4:
            // tlScene04.pause();
            break;
          case 5:
            // tlScene05.pause();
            break;
          case 6:
            // tlScene06.pause();
            break;
          case 7:
            // tlScene07.pause();
            break;
          case 8:
            // tlScene08heading.pause();
            // tlScene08china.pause();
            // tlScene08bottomText.pause();
            // tlScene08japan.pause();
            // tlScene08.pause();
            // scene08State = "chinaComplete";
            // chinaClickedButtonColorChange();
            break;
          case 9:
            // tlScene09.pause();
            break;
          case 10:
            // tlScene10.pause();
            break;
        }
        switch (nextIndex) {
          case 1:
            tlScene01.play(0);
            break;
          case 2:
            tlScene02.play(0);
            break;
          case 3:
            // tlScene03.play(0);
            break;
          case 4:
            // tlScene04.play(0);
            break;
          case 5:
            // tlScene05.play(0);
            break;
          case 6:
            // tlScene06.play(0);
            break;
          case 7:
            // tlScene07.play(0);
            break;
          case 8:
          // scene08State = "changing";
          //   tlScene08.play(0);
          //   TweenMax.delayedCall(2.7, function() {
          //     scene08State = "chinaComplete";
          //   });
            break;
          case 9:
            // tlScene09.play(0);
            break;
          case 10:
            // tlScene10.play(0);
            break;
        }
      }

    }); //fullpage.js Init
  }


  function loadWebScenes() {

  }






  function animateNumberIncreasing(targetText, animateToNumber, decimalPlaces, type) {

    // how many decimal places allows
    var decimal_places = decimalPlaces;
    var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

    $(targetText)
      .animateNumber({
          number: animateToNumber * decimal_factor,

          numberStep: function(now, tween) {
            var floored_number = Math.floor(now) / decimal_factor,
              target = $(tween.elem);

            if (decimal_places > 0) {
              // force decimal places even if they are 0
              floored_number = floored_number.toFixed(decimal_places);

              // replace '.' separator with ','
              floored_number = floored_number.toString();
            }

            if (type == 'percent') {
              target.text(floored_number + ' %');
            } else if (type == 'dollar') {
              target.text('$' + floored_number);
            } else if (type == 'ntd') {
              floored_number = floored_number.toString().replace('.', ',');
              target.text(floored_number + 'NTD');
            } else if (type == 'number') {
              target.text(floored_number);
            } else if (type == 'numberWithComma') {
              floored_number = floored_number.toString().replace('.', ',');
              target.text(floored_number);
            }

          }
        },
        1000 //millieseconds
      );
  } //animateNumberIncreasing

});  //document ready
