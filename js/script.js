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




      tlScrollDown.to("#phoneScene01 .svg01ScrollDown", 0.7, { y: 10, ease: Power1.easeOut });

      tlScene01.from("#phoneScene01 .svg01Cloud01", 0.6, { y: 100, opacity: 0 }, 0.3)
               .from("#phoneScene01 .svg01Cloud02", 0.6, { y: 100, opacity: 0 }, 0.6)
               .from("#phoneScene01 .svg01Cloud03", 0.6, { y: 100, opacity: 0 }, 0.9)
               .from("#phoneScene01 .svg01Cloud04", 0.6, { y: 100, opacity: 0 }, 1.1)
               .from("#phoneScene01 .svg01Cloud05", 0.6, { y: 100, opacity: 0 }, 1.3)
               .fromTo("#phoneScene01 .svg01Plane", 4, { x: -1500, y: 500, scale: 2 }, { x: 1500, y: -500, scale: 0.2 }, 0.9)
               .to(["#phoneScene01 .svg01Cloud01",
                    "#phoneScene01 .svg01Cloud02",
                    "#phoneScene01 .svg01Cloud03",
                    "#phoneScene01 .svg01Cloud04",
                    "#phoneScene01 .svg01Cloud05"
                    ], 0.8, { y: -1500, opacity: 0, ease: Back.easeIn.config(1.7) }, 2.8)


               .from("#phoneScene01 .svg01Character01", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 3.6)
               .from("#phoneScene01 .svg01Character02", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 3.8)
               .from("#phoneScene01 .svg01Character03", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4)
               .from("#phoneScene01 .svg01Character04", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.2)
               .from("#phoneScene01 .svg01Character05", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.4)
               .from("#phoneScene01 .svg01Character06", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.6)
               .from("#phoneScene01 .svg01Character07", 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.8)
               .to("#phoneScene01 .svg01WholeCharacter", 0.8, { y: -240, scale: 0.8, transformOrigin: '50% 50%', ease: Power1.easeOut }, 5.4)


               .from("#phoneScene01 .svg01ChinaVsJapan", 1, { y: -100, opacity: 0 }, 6.1)

               .from("#phoneScene01 .svg01Door", 0.4, { y: -100, opacity: 0 }, 6.2)

               .from("#phoneScene01 .svg01Bg", 0.4, { y: -100, opacity: 0 }, 6.3)

               .from("#phoneScene01 .svg01People01", 0.4, { x: -100, opacity: 0 }, 6.4)
               .from("#phoneScene01 .svg01People02", 0.4, { x: -100, opacity: 0 }, 6.5)
               .from("#phoneScene01 .svg01People03", 0.4, { x: -100, opacity: 0 }, 6.6)
               .from("#phoneScene01 .svg01People04", 0.4, { x: -100, opacity: 0 }, 6.7)
               .from("#phoneScene01 .svg01People05", 0.4, { x: 100, opacity: 0 }, 6.8)
               .from("#phoneScene01 .svg01People06", 0.4, { x: 100, opacity: 0 }, 6.9)
               .from("#phoneScene01 .svg01People07", 0.4, { x: 100, opacity: 0 }, 7)

               .from("#phoneScene01 .BottomText", 0.4, BottomTextParameter, 7.1)

               .from("#phoneScene01 .svg01ScrollDown", 0.4, { y: 10, opacity: 0 }, 7.4);


      tlScene02.from("#phoneScene02 .topLine", 0.6, topLineParameter, 0.5)
               .from("#phoneScene02 .bottomLine", 0.6, bottomLineParameter, 0.5)
               .from("#phoneScene02 .Heading", 0.3, HeadingParameter, 0.7)
               .from("#phoneScene02 .subHeading", 0.4, subHeadingParameter, 0.8)


               .from("#phoneScene02 .svg02Door", 0.4, { y: -100, opacity: 0 }, 1)
      //---------------------------港澳
               .to("#phoneScene02 .svg02PeopleHongKongAndMacao", 0.7, { y: 190, opacity: 1, ease: Power1.easeIn }, 1.4)
               .to("#phoneScene02 .svg02PeopleHongKongAndMacao", 0.7, { x: -90, ease: Power1.easeOut }, 2.1)

               .from("#phoneScene02 .svg02BubbleHongKongAndMacao", 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.8)
               .from("#phoneScene02 .svg02TextHongKongAndMacao", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3)


               .call(animateNumberIncreasing, ["#phoneScene02 .svg02NumberHongKongAndMacao", 14.5, 1, 'percent']) //14.5 %

               .from("#phoneScene02 .svg02NumberHongKongAndMacao", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.5)
      //---------------------------中國
               .to("#phoneScene02 .svg02PeopleChina", 0.7, { y: 70, opacity: 1, ease: Power1.easeIn }, 1.9)
               .to("#phoneScene02 .svg02PeopleChina", 0.7, { x: -140, ease: Power1.easeOut }, 2.6)

               .from("#phoneScene02 .svg02BubbleChina", 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.3)
               .from("#phoneScene02 .svg02TextChina", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.5)

               .call(animateNumberIncreasing, ["#phoneScene02 .svg02NumberChina", 40.1, 1, 'percent']) //40.1 %

               .from("#phoneScene02 .svg02NumberChina", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.9)
      //---------------------------日本
               .to("#phoneScene02 .svg02PeopleJapan", 0.7, { y: 80, opacity: 1, ease: Power1.easeIn }, 2.4)
               .to("#phoneScene02 .svg02PeopleJapan", 0.7, { x: 130, ease: Power1.easeOut }, 3.1)

               .from("#phoneScene02 .svg02BubbleJapan", 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.8)
               .from("#phoneScene02 .svg02TextJapan", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4)

               .call(animateNumberIncreasing, ["#phoneScene02 .svg02NumberJapan", 15.6, 1, 'percent']) //15.6 %

               .from("#phoneScene02 .svg02NumberJapan", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4.4)
      //---------------------------東南亞
               .to("#phoneScene02 .svg02PeopleSoutheastAsia", 0.7, { y: 200, opacity: 1, ease: Power1.easeIn }, 2.9)
               .to("#phoneScene02 .svg02PeopleSoutheastAsia", 0.7, { x: 115, ease: Power1.easeOut }, 3.6)

               .from("#phoneScene02 .svg02BubbleSoutheastAsia", 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.3)
               .from("#phoneScene02 .svg02TextSoutheastAsia", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4.5)

               .call(animateNumberIncreasing, ["#phoneScene02 .svg02NumberSoutheastAsia", 13.7, 1, 'percent']) //13.7 %

               .from("#phoneScene02 .svg02NumberSoutheastAsia", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 5)


               .from("#phoneScene02 .BottomText", 0.4, BottomTextParameter, 5.2);


    tlScene03.from("#phoneScene03 .topLine", 0.6, topLineParameter, 0.5)
             .from("#phoneScene03 .bottomLine", 0.6, bottomLineParameter, 0.5)
             .from("#phoneScene03 .Heading", 0.3, HeadingParameter, 0.7)

             .from("#phoneScene03 .svg03Sign", 0.7, { y: 20, opacity: 0 }, 1.3)
    
             .from("#phoneScene03 .svg03GirlLeft", 0.5, { x: -30, opacity: 0 }, 2.2)
             .from("#phoneScene03 .svg03GirlRight", 0.5, { x: 30, opacity: 0 }, 2.2)
    
             .from("#phoneScene03 .svg03PieLeft", 1, { rotation: 360, opacity: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.7)
             .from("#phoneScene03 .svg03PieRight", 1, { rotation: 360, opacity: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.7)
    
             .from("#phoneScene03 .svg03TextLeft", 0.3, { x: -10, opacity: 0 }, 3.1)
             .from("#phoneScene03 .svg03TextRight", 0.3, { x: 10, opacity: 0 }, 3.1)
    

             .from("#phoneScene03 .svg03NumberLeft", 0.4, { x: -10, opacity: 0 }, 3.3)
             .from("#phoneScene03 .svg03NumberRight", 0.4, { x: 10, opacity: 0 }, 3.3)
    
    
    
             .from("#phoneScene03 .BottomText", 0.4, BottomTextParameter, 3.5);


    tlScene04.from("#phoneScene04 .topLine", 0.6, topLineParameter, 0.5)
             .from("#phoneScene04 .bottomLine", 0.6, bottomLineParameter, 0.5)
             .from("#phoneScene04 .Heading", 0.3, HeadingParameter, 0.7)

             .to("#phoneScene04 .svg04Plane", 4, { scale: 7, x: 1900, y: 0, opacity: 1 }, 0.5)
             .from("#phoneScene04 .subHeading", 1, { x: -300, opacity: 0 }, 1.4)

             .from("#phoneScene04 .svg04Cloud02", 0.3, { x: -20, opacity: 0 }, 2)
             .from("#phoneScene04 .svg04Cloud03", 0.3, { x: 20, opacity: 0 }, 2.1)
             .from("#phoneScene04 .svg04Cloud04", 0.3, { x: -20, opacity: 0 }, 2.2)
             .from("#phoneScene04 .svg04Balloon", 0.3, { x: 20, opacity: 0 }, 2.3)

             .from("#phoneScene04 .svg04Ground", 0.4, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 2.3)

             .from("#phoneScene04 .svg04Floor01", 1.2, { y: -500, opacity: 0, ease: Power4.easeOut }, 2.5)
             .from("#phoneScene04 .svg04Floor02", 1, { y: -500, opacity: 0, ease: Power4.easeOut }, 2.8)
             .from("#phoneScene04 .svg04Floor03", 0.9, { y: -500, opacity: 0, ease: Power4.easeOut }, 3)
             .from("#phoneScene04 .svg04Floor04", 0.8, { y: -400, opacity: 0, ease: Power4.easeOut }, 3.2)
             .from("#phoneScene04 .svg04Floor05", 0.7, { y: -300, opacity: 0, ease: Power4.easeOut }, 3.4)
             .from("#phoneScene04 .svg04Floor06", 0.6, { y: -200, opacity: 0, ease: Power4.easeOut }, 3.5)

             .from("#phoneScene04 .svg04BannerLong", 0.4, { y: -20, opacity: 0 }, 3.6)
             .from("#phoneScene04 .svg04BannerChina", 0.4, { y: -20, opacity: 0 }, 3.7)
             .from("#phoneScene04 .svg04BannerJapan", 0.4, { y: -20, opacity: 0 }, 3.7)
             .from("#phoneScene04 .svg04LittleText", 0.4, { opacity: 0 }, 3.8)

    //----------------------------05 animated bar
             .from("#phoneScene04 .svg04Floor05LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.4)
             .from("#phoneScene04 .svg04Floor05RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.4)

             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor05LeftNumber", 120, 0, 'dollar'], null, 3.4)
             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor05RightNumber", 41, 0, 'dollar'], null, 3.4)

             .from("#phoneScene04 .svg04Floor05LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
             .from("#phoneScene04 .svg04Floor05RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
    //----------------------------04 animated bar
             .from("#phoneScene04 .svg04Floor04LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.5)
             .from("#phoneScene04 .svg04Floor04RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.5)

             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor04LeftNumber", 43, 0, 'dollar'], null, 3.5)
             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor04RightNumber", 97, 0, 'dollar'], null, 3.5)

             .from("#phoneScene04 .svg04Floor04LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.9)
             .from("#phoneScene04 .svg04Floor04RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.9)
    //----------------------------03 animated bar
             .from("#phoneScene04 .svg04Floor03LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.6)
             .from("#phoneScene04 .svg04Floor03RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.6)

             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor03LeftNumber", 27, 0, 'dollar'], null, 3.6)
             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor03RightNumber", 39, 0, 'dollar'], null, 3.6)

             .from("#phoneScene04 .svg04Floor03LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4)
             .from("#phoneScene04 .svg04Floor03RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4)
    //----------------------------02 animated bar
             .from("#phoneScene04 .svg04Floor02LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.7)
             .from("#phoneScene04 .svg04Floor02RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.7)

             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor02LeftNumber", 29, 0, 'dollar'], null, 3.7)
             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor02RightNumber", 35, 0, 'dollar'], null, 3.7)

             .from("#phoneScene04 .svg04Floor02LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.1)
             .from("#phoneScene04 .svg04Floor02RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.1)
    //----------------------------01 animated bar
             .from("#phoneScene04 .svg04Floor01LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.8)
             .from("#phoneScene04 .svg04Floor01RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.8)

             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor01LeftNumber", 227, 0, 'dollar'], null, 3.8)
             .call(animateNumberIncreasing, ["#phoneScene04 .svg04Floor01RightNumber", 227, 0, 'dollar'], null, 3.8)

             .from("#phoneScene04 .svg04Floor01LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.2)
             .from("#phoneScene04 .svg04Floor01RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.2)

             .from("#phoneScene04 .BottomText", 0.4, BottomTextParameter);





    tlScene05.from("#phoneScene05 .topLine", 0.6, topLineParameter, 0.5)
             .from("#phoneScene05 .bottomLine", 0.6, bottomLineParameter, 0.5)
             .from("#phoneScene05 .Heading", 0.3, HeadingParameter, 0.7)
             .from("#phoneScene05 .subHeading", 0.4, subHeadingParameter, 0.8)


             .from("#phoneScene05 .svg05BannerLong", 0.4, { y: 50, opacity: 0 }, 1)
             .from("#phoneScene05 .svg05BannerChina", 0.4, { opacity: 0 }, 1.3)
             .from("#phoneScene05 .svg05BannerJapan", 0.4, { opacity: 0 }, 1.3)

             .from("#phoneScene05 .svg05LittleText", 0.4, { opacity: 0 }, 1.4)


             .from("#phoneScene05 .svg05Floor01", 0.5, { opacity: 0, y: 40 }, 1.8)
             .from("#phoneScene05 .svg05Floor02", 0.5, { opacity: 0, y: 40 }, 1.8)
             .from("#phoneScene05 .svg05Floor03", 0.5, { opacity: 0, y: 40 }, 1.8)
             .from("#phoneScene05 .svg05Floor04", 0.5, { opacity: 0, y: 40 }, 1.8)
             .from("#phoneScene05 .svg05Floor05", 0.5, { opacity: 0, y: 40 }, 1.8)

             .from("#phoneScene05 .svg05Floor01People", 0.8, { y: 50, opacity: 0 }, 2.1)
             .from("#phoneScene05 .svg05Floor02People", 0.8, { y: 50, opacity: 0 }, 2.1)
             .from("#phoneScene05 .svg05Floor03People", 0.8, { y: 50, opacity: 0 }, 2.1)
             .from("#phoneScene05 .svg05Floor04People", 0.8, { y: 50, opacity: 0 }, 2.1)
             .from("#phoneScene05 .svg05Floor05People", 0.8, { y: 50, opacity: 0 }, 2.1)

             .from("#phoneScene05 .svg05LeftCar", 0.5, { scale: 0, transformOrigin: '50% 50%' }, 2.8)
             .from("#phoneScene05 .svg05RightCar", 0.5, { scale: 0, transformOrigin: '50% 50%' }, 2.8)

             .to("#phoneScene05 .svg05LeftCar", 2.5, { y: 600, ease: Power1.easeIn }, 2.8)
             .to("#phoneScene05 .svg05RightCar", 2.5, { y: 600, ease: Power1.easeIn }, 2.8)


    //----------------------------05 animated bar
             .from("#phoneScene05 .svg05Floor05LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.2)
             .from("#phoneScene05 .svg05Floor05RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.2)

             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor05LeftNumber", 47.58, 2, 'dollar'], null, 3.2)
             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor05RightNumber", 16.57, 2, 'dollar'], null, 3.2)

             .from("#phoneScene05 .svg05Floor05LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.6)
             .from("#phoneScene05 .svg05Floor05RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.6)

    //----------------------------04 animated bar
             .from("#phoneScene05 .svg05Floor04LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.4)
             .from("#phoneScene05 .svg05Floor04RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.4)

             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor04LeftNumber", 30.75, 2, 'dollar'], null, 3.4)
             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor04RightNumber", 2.01, 2, 'dollar'], null, 3.4)

             .from("#phoneScene05 .svg05Floor04LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
             .from("#phoneScene05 .svg05Floor04RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
    //----------------------------03 animated bar
             .from("#phoneScene05 .svg05Floor03LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.9)
             .from("#phoneScene05 .svg05Floor03RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.9)

             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor03LeftNumber", 34.79, 2, 'dollar'], null, 3.9)
             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor03RightNumber", 38.70, 2, 'dollar'], null, 3.9)

             .from("#phoneScene05 .svg05Floor03LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.3)
             .from("#phoneScene05 .svg05Floor03RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.3)

    //----------------------------02 animated bar
             .from("#phoneScene05 .svg05Floor02LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 4.2)
             .from("#phoneScene05 .svg05Floor02RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 4.2)

             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor02LeftNumber", 8.17, 2, 'dollar'], null, 4.2)
             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor02RightNumber", 7.33, 2, 'dollar'], null, 4.2)

             .from("#phoneScene05 .svg05Floor02LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.6)
             .from("#phoneScene05 .svg05Floor02RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.6)
    //----------------------------01 animated bar
             .from("#phoneScene05 .svg05Floor01LeftBar", 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 4.5)
             .from("#phoneScene05 .svg05Floor01RightBar", 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 4.5)

             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor01LeftNumber", 16.57, 2, 'dollar'], null, 4.5)
             .call(animateNumberIncreasing, ["#phoneScene05 .svg05Floor01RightNumber", 1.91, 2, 'dollar'], null, 4.5)

             .from("#phoneScene05 .svg05Floor01LeftNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.9)
             .from("#phoneScene05 .svg05Floor01RightNumber", 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.9)


             .from("#phoneScene05 .BottomText", 0.4, BottomTextParameter, 5.1);


    tlScene06.from("#phoneScene06 .topLine", 0.6, topLineParameter, 0.5)
             .from("#phoneScene06 .bottomLine", 0.6, bottomLineParameter, 0.5)
             .from("#phoneScene06 .Heading", 0.3, HeadingParameter, 0.7)
             .from("#phoneScene06 .subHeading", 0.4, subHeadingParameter, 0.8)

             .from("#phoneScene06 .svg06GroundLeft", 0.5, { scaleX: 0, transformOrigin: '0% 50%', ease: Power1.easeInOut }, 0.9)
             .from("#phoneScene06 .svg06GroundRight", 0.5, { scaleX: 0, transformOrigin: '100% 50%', ease: Power1.easeInOut }, 0.9)

             .from(["#phoneScene06 .svg06HotelLeft", "#phoneScene06 .svg06HotelRight"], 0.5, { y: -40, opacity: 0, transformOrigin: '50% 100%' }, 1.3)


             .from("#phoneScene06 .svg06CarLeft", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 1.8)
             .from("#phoneScene06 .svg06CarRight", 0.4, { scale: 0, transformOrigin: '50% 50%' }, 1.8)

             .to("#phoneScene06 .svg06CarLeft", 1.2, { x: 180, ease: Power1.easeInOut }, 1.9)
             .to("#phoneScene06 .svg06CarRight", 1.2, { x: -180, ease: Power1.easeInOut }, 1.9)

             .from("#phoneScene06 .svg06MoneyLeft", 0.4, { scaleY: 0, transformOrigin: '50% 100%' }, 3.1)
             .from("#phoneScene06 .svg06MoneyRight", 0.4, { scaleY: 0, transformOrigin: '50% 100%' }, 3.1)

             .call(animateNumberIncreasing, ["#phoneScene06 .svg06HotelLeftNumber", 3.981, 3, 'ntd'], null, 3.2)
             .call(animateNumberIncreasing, ["#phoneScene06 .svg06HotelRightNumber", 3.060, 3, 'ntd'], null, 3.2)

             .from("#phoneScene06 .svg06HotelLeftText", 0.4, { y: 50, opacity: 0 }, 3.5)
             .from("#phoneScene06 .svg06HotelRightText", 0.4, { y: 50, opacity: 0 }, 3.5)

             .from("#phoneScene06 .BottomText", 0.4, subHeadingParameter, 3.9);

    tlScene07.from("#phoneScene07 .topLine", 0.6, topLineParameter, 0.5)
             .from("#phoneScene07 .bottomLine", 0.6, bottomLineParameter, 0.5)
             .from("#phoneScene07 .Heading", 0.3, HeadingParameter, 0.7)


             .from("#phoneScene07 .svg07GirlLeft", 0.6, { x: -200, opacity: 0 }, 1)
             .from("#phoneScene07 .svg07GirlRight", 0.6, { x: 200, opacity: 0 }, 1)

             .from(["#phoneScene07 .svg07TextChina", "#phoneScene07 .svg07TextJapan"], 0.4, { opacity: 0, y: 20 }, 1.6)

             .from(["#phoneScene07 .svg07LineChina", "#phoneScene07 .svg07LineJapan"], 0.1, { scale: 0, transformOrigin: '50% 50%' }, 2)



             .from(["#phoneScene07 .svg07TextTourist", "#phoneScene07 .svg07TextTouristLeft", "#phoneScene07 .svg07TextTouristRight", "#phoneScene07 .svg07TextLittleLeft", "#phoneScene07 .svg07TextLittleRight"], 0.4, { y: 20, opacity: 0 }, 2.1)
             .from(["#phoneScene07 .svg07TextInternationalHotel", "#phoneScene07 .svg07TextInternationalHotelLeft", "#phoneScene07 .svg07TextInternationalHotelRight"], 0.4, { y: 20, opacity: 0 }, 2.2)
             .from(["#phoneScene07 .svg07TextGeneralHotel", "#phoneScene07 .svg07TextGeneralHotelLeft", "#phoneScene07 .svg07TextGeneralHotelRight"], 0.4, { y: 20, opacity: 0 }, 2.3)



             .call(animateNumberIncreasing, ["#phoneScene07 .svg07TextTouristLeft", 418.4, 1, 'number'], null, 2.2)
             .call(animateNumberIncreasing, ["#phoneScene07 .svg07TextTouristRight", 162.7, 1, 'number'], null, 2.2)

             .call(animateNumberIncreasing, ["#phoneScene07 .svg07TextInternationalHotelLeft", 0.4261, 4, 'number'], null, 2.3)
             .call(animateNumberIncreasing, ["#phoneScene07 .svg07TextInternationalHotelRight", 0.88, 2, 'number'], null, 2.3)

             .call(animateNumberIncreasing, ["#phoneScene07 .svg07TextGeneralHotelLeft", 0.1512, 4, 'number'], null, 2.4)
             .call(animateNumberIncreasing, ["#phoneScene07 .svg07TextGeneralHotelRight", 0.2237, 4, 'number'], null, 2.4)

             .from("#phoneScene07 .BottomText", 0.4, BottomTextParameter);


      tlScene08.call(function() {tlScene08heading.play(0);}, null, null, 0)
              .call(function() {tlScene08china.pause(0);}, null, null, 0)
              .call(function() {tlScene08bottomText.pause(0);}, null, null, 0)
              .call(function() {tlScene08japan.pause(0);}, null, null, 0)

              .call(function() {tlScene08china.play(0);}, null, null, 1.5)
              .call(function() {tlScene08bottomText.play(0);}, null, null, 2.5);




      tlScene08heading.from("#phoneScene08 .topLine", 0.6, topLineParameter, 0.5)
                            .from("#phoneScene08 .bottomLine", 0.6, bottomLineParameter, 0.5)
                            .from("#phoneScene08 .Heading", 0.3, HeadingParameter, 0.7)
          .from(["#phoneScene08 .svg08ButtonChina", "#phoneScene08 .svg08ButtonJapan"], 0.4, {opacity: 0, y: 30}, 0.8)
          .from("#phoneScene08 .svg08Taiwan", 0.4, {opacity: 0, y: 30}, 1)
                            .from("#phoneScene08 .svg08PeopleLeft", 0.4, {opacity: 0, x: -20}, 1.2);

      tlScene08china.from("#phoneScene08 .svg08BrownTaipei", 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) })
                          .from("#phoneScene08 .svg08LineTaipeiTooltipChina", 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.1)
                        .from("#phoneScene08 .svg08BrownTaipeiTooltipChina", 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.2)
          .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberChina4", 4.259, 3, 'numberWithComma'], null, 0.3)
                                                  .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberChina3", 3.068, 3, 'numberWithComma'], null, 0.3)

          .from("#phoneScene08 .svg08BrownTaoyuan", 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 0.2)
                        .from("#phoneScene08 .svg08LineTaoyuanTooltip", 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.3)
                        .from("#phoneScene08 .svg08BrownTaoyuanTooltip", 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.4)
                        .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberChina1", 1.644, 3, 'numberWithComma'], null, 0.5)

          .from("#phoneScene08 .svg08BrownTaitung", 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 0.3)
                        .from("#phoneScene08 .svg08LineTaitungTooltip", 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.4)
                        .from("#phoneScene08 .svg08BrownTaitungTooltip", 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.5)
                        .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberChina2", 3.704, 3, 'numberWithComma'], null, 0.6)

          .from("#phoneScene08 .svg08BrownKaohsiung", 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 0.4)
                        .from("#phoneScene08 .svg08LineKaohsiungTooltip", 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.5)
                        .from("#phoneScene08 .svg08BrownKaohsiungTooltip", 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.6)
                        .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberChina5", 2.169, 3, 'numberWithComma'], null, 0.7);


      tlScene08japan.from("#phoneScene08 .svg08BrownTaipei", 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) })
                          .from("#phoneScene08 .svg08LineTaipeiTooltipJapan", 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.1)
                        .from("#phoneScene08 .svg08BrownTaipeiTooltipJapan", 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.2)
                        .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberJapan1", 3.722, 3, 'numberWithComma'], null, 0.3)
                                                  .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberJapan2", 3.917, 3, 'numberWithComma'], null, 0.3)
                                                  .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberJapan3", 2.660, 3, 'numberWithComma'], null, 0.3)
                                                  .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberJapan4", 5.732, 3, 'numberWithComma'], null, 0.3)
                                                  .call(animateNumberIncreasing, ["#phoneScene08 .svg08NumberJapan5", 3.286, 3, 'numberWithComma'], null, 0.3);

      tlScene08bottomText.from("#phoneScene08 .BottomText", 0.4, BottomTextParameter);
      
      var scene08State = "changing";
      var $ButtonChina = $("#phoneScene08 .svg08ButtonChina");
      var $ButtonJapan = $("#phoneScene08 .svg08ButtonJapan");


      $ButtonChina.on('click', function(e){
          if(scene08State == "chinaComplete") {

          } else if (scene08State == "japanComplete") {

              scene08State = "changing";

              //change button color
              chinaClickedButtonColorChange();
              //change button color

              tlScene08japan.reverse();
              TweenMax.delayedCall(0.4, function() {
                  tlScene08china.play(0);
                  scene08State = "chinaComplete";
              }); //play tlScene08china

          }

      });


      $ButtonJapan.on('click', function(e){



          if(scene08State == "chinaComplete") {
              scene08State = "changing";

              //change button color
              japanClickedButtonColorChange();
              //change button color
              //
              tlScene08china.reverse();
              TweenMax.delayedCall(0.8, function() {
                  tlScene08japan.play(0);
                  scene08State = "japanComplete";
              });  //play tlScene08japan

          } else if (scene08State == "japanComplete") {

          }
      });

      function chinaClickedButtonColorChange() {
          $ButtonJapan.toggleClass( "red" );
          $ButtonJapan.toggleClass( "white" );
          $ButtonChina.toggleClass( "white" );
          $ButtonChina.toggleClass( "red" );
      }

      function japanClickedButtonColorChange() {
          $ButtonChina.toggleClass( "red" );
          $ButtonChina.toggleClass( "white" );
          $ButtonJapan.toggleClass( "white" );
          $ButtonJapan.toggleClass( "red" );
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    tlScene09.from("#phoneScene09 .topLine", 0.6, topLineParameter, 0.5)
             .from("#phoneScene09 .bottomLine", 0.6, bottomLineParameter, 0.5)
             .from("#phoneScene09 .Heading", 0.3, HeadingParameter, 0.7)
    
             .from(["#phoneScene09 .svg09FlagChina", "#phoneScene09 .svg09FlagJapan"], 0.4, { y: -20, opacity: 0 }, 1)
    
             .from(["#phoneScene09 .svg09TextChina", "#phoneScene09 .svg09TextJapan"], 0.4, { y: -10, opacity: 0 }, 1.1)
    
             .from("#phoneScene09 .svg09Plane", 4, { y: -1200 }, 1.2)
             .from("#phoneScene09 .svg09Runway", 3.2, { y: 600 }, 1.6)
    
    
             .from("#phoneScene09 .svg09Text01", 0.4, { opacity: 0, y: -30 }, 2.4)
             .from("#phoneScene09 .svg09Text02", 0.4, { opacity: 0, y: -30 }, 2.5)
             .from("#phoneScene09 .svg09Text03", 0.4, { opacity: 0, y: -30 }, 2.6)
             .from("#phoneScene09 .svg09Text04", 0.4, { opacity: 0, y: -30 }, 2.7)
             .from("#phoneScene09 .svg09Text05", 0.4, { opacity: 0, y: -30 }, 2.8)
             .from("#phoneScene09 .svg09Text06", 0.4, { opacity: 0, y: -30 }, 2.9)
             .from("#phoneScene09 .svg09Text07", 0.4, { opacity: 0, y: -30 }, 3)
             .from("#phoneScene09 .svg09Text08", 0.4, { opacity: 0, y: -30 }, 3.1)
             .from("#phoneScene09 .svg09Text09", 0.4, { opacity: 0, y: -30 }, 3.2)
    
             .from("#phoneScene09 .svg09Divider", 0.4, { scaleX: 0, opacity: 0 }, 3.2)
    
    
    
             .from(["#phoneScene09 .svg09Text01Left", "#phoneScene09 .svg09Text01Right"], 0.4, { y: -10, opacity: 0 }, 2.5)
             .from(["#phoneScene09 .svg09Text02Left", "#phoneScene09 .svg09Text02Right"], 0.4, { y: -10, opacity: 0 }, 2.6)
             .from(["#phoneScene09 .svg09Text03Left", "#phoneScene09 .svg09Text03Right"], 0.4, { y: -10, opacity: 0 }, 2.7)
             .from(["#phoneScene09 .svg09Text04Left", "#phoneScene09 .svg09Text04Right"], 0.4, { y: -10, opacity: 0 }, 2.8)
             .from(["#phoneScene09 .svg09Text05Left", "#phoneScene09 .svg09Text05Right"], 0.4, { y: -10, opacity: 0 }, 2.9)
             .from(["#phoneScene09 .svg09Text06Left", "#phoneScene09 .svg09Text06Right"], 0.4, { y: -10, opacity: 0 }, 3)
             .from(["#phoneScene09 .svg09Text07Left", "#phoneScene09 .svg09Text07Right"], 0.4, { y: -10, opacity: 0 }, 3.1)
             .from(["#phoneScene09 .svg09Text08Left", "#phoneScene09 .svg09Text08Right"], 0.4, { y: -10, opacity: 0 }, 3.2)
             .from(["#phoneScene09 .svg09Text09Left", "#phoneScene09 .svg09Text09Right"], 0.4, { y: -10, opacity: 0 }, 3.3)
    
    
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text01Left", 40.1, 1, 'percent'], null, 2.5)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text01Right", 15.6, 1, 'percent'], null, 2.5)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text02Left", 82, 0, 'percent'], null, 2.6)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text02Right", 73, 0, 'percent'], null, 2.6)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text03Left", 227.58, 2, 'dollar'], null, 2.7)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text03Right", 227.59, 2, 'dollar'], null, 2.7)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text04Left", 52.74, 2, 'percent'], null, 2.8)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text04Right", 18.32, 2, 'percent'], null, 2.8)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text05Left", 157.42, 2, 'dollar'], null, 2.9)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text05Right", 73.40, 1, 'dollar'], null, 2.9)
    
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text07Left", 19.19, 2, 'percent'], null, 3)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text07Right", 42.76, 2, 'percent'], null, 3)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text08Left", 0.43, 2, 'number'], null, 3.1)
             .call(animateNumberIncreasing, ["#phoneScene09 .svg09Text08Right", 0.88, 2, 'number'], null, 3.1)
    
    
    
    
    
             .from("#phoneScene09 .svg09Text01Win", 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4)
             .from("#phoneScene09 .svg09Text02Win", 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.2)
             .from("#phoneScene09 .svg09Text03Win", 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.4)
             .from("#phoneScene09 .svg09Text04Win", 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.6)
             .from("#phoneScene09 .svg09Text05Win", 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.8)
             .from("#phoneScene09 .svg09Text07Win", 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 5)
             .from("#phoneScene09 .svg09Text08Win", 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 5.2);


    tlScene10.from("#phoneScene10 .topLine", 0.6, topLineParameter, 0.5)
             .from("#phoneScene10 .bottomLine", 0.6, bottomLineParameter, 0.5)
             .from("#phoneScene10 .Heading", 0.3, HeadingParameter, 0.7)
             .from("#phoneScene10 .subHeading", 0.4, subHeadingParameter, 0.8)
    
    //       .to($svg10Ground01, 2.8, {rotation: -180, transformOrigin: '50% 0%'}, 0.9)
             .from("#phoneScene10 .svg10Earth", 4, { rotation: 180, transformOrigin: '50% 100%', ease: CustomEase.create("custom", "M0,0,C0.128,0.572,0.257,0.954,0.512,1.028,0.672,1.074,0.838,1,1,1") }, 1.3)
    
             .from("#phoneScene10 .svg10BubbleLeft", 0.4, { opacity: 0 }, 3.6)
             .from("#phoneScene10 .svg10BubbleRight", 0.4, { opacity: 0 }, 3.7)
    
             .from("#phoneScene10 .svg10Light", 0.4, { scale: 0, transformOrigin: '0% 100%' }, 3.7)
    
             .from("#phoneScene10 .svg10TextSource", 0.3, { opacity: 0 }, 3.7)
    
             .from("#phoneScene10 .svg10Footer", 0.5, { y: 200 }, 3.8);





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
            tlScene03.pause();
            break;
          case 4:
            tlScene04.pause();
            break;
          case 5:
            tlScene05.pause();
            break;
          case 6:
            tlScene06.pause();
            break;
          case 7:
            tlScene07.pause();
            break;
          case 8:
             tlScene08heading.pause();
             tlScene08china.pause();
             tlScene08bottomText.pause();
             tlScene08japan.pause();
             tlScene08.pause();
             scene08State = "chinaComplete";
             chinaClickedButtonColorChange();
            break;
          case 9:
            tlScene09.pause();
            break;
          case 10:
            tlScene10.pause();
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
            tlScene03.play(0);
            break;
          case 4:
            tlScene04.play(0);
            break;
          case 5:
            tlScene05.play(0);
            break;
          case 6:
            tlScene06.play(0);
            break;
          case 7:
            tlScene07.play(0);
            break;
          case 8:
           scene08State = "changing";
             tlScene08.play(0);
             TweenMax.delayedCall(2.7, function() {
               scene08State = "chinaComplete";
             });
            break;
          case 9:
            tlScene09.play(0);
            break;
          case 10:
            tlScene10.play(0);
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
