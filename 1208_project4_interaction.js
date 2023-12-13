//- 리스트, 어바웃 팝업 ------------------------------------------------------------------------------------------------//

$(document).ready(function() {
  $('#listBtn').click(function(e) {
    e.preventDefault();
    $('#list_popup').fadeIn();

    $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
    });

    // 팝업 외부 클릭 시 팝업 닫기
    $(document).mouseup(function(e) {
      var popup = $('#list_popup');
      if (!popup.is(e.target) && popup.has(e.target).length === 0) {
        popup.fadeOut();
      }

      $('.blur').css({
        'display' : 'none',
        'animation' : 'fadeOut'
    });
    });
  });

  $('#closeBtn').click(function() {
    $('#list_popup').fadeOut();


  });
});



$(document).ready(function() {
  $('#aboutBtn').click(function(e) {
    e.preventDefault();
    $('#about_popup').fadeIn();

    $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
    });

    // 팝업 외부 클릭 시 팝업 닫기
    $(document).mouseup(function(e) {
      var popup = $('#about_popup');
      if (!popup.is(e.target) && popup.has(e.target).length === 0) {
        popup.fadeOut();
      }

      $('.blur').css({
        'display' : 'none',
        'animation' : 'fadeOut'
    });
    });
  });

  $('#closeBtn').click(function() {
    $('#about_popup').fadeOut();
  });
});

//- 리스트, 어바웃 팝업 ------------------------------------------------------------------------------------------------//





//------------------------------------------//

//------------------------------------------//


//---------------- 자연계열 팝업 -----------------//
$('.F1_click_text_1', '.O2_click_text_1').on('click', showPopup1,);   

$('.close-button1').on('click', hidepopup1,);



function showPopup1() {
  var textElement = $(this);

  //텍스트 변경사항
  textElement.css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })

  $('.O2_click_text_1').css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })

  $('.U2_click_text_1').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.U8_click_text_1').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.L2_click_text_1').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })
  //텍스트 변경사항

  
  // 팝업 표시
  $('#popup_nature').css({
      'display' : 'block',
      'animation' : 'fadeIn 1s',
  });
  // 팝업 표시


  // 블러 적용
  $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
  });
  // 블러 적용

}


function hidepopup1() {
  var textElement = $('.F1_click_text_1');

  //텍스트 변경사항
  textElement.css({
      'opacity' : '1',
      'color': 'black',
  })

  
  $('.O2_click_text_1').css({
    'opacity' : '1',
    'color': 'black',
  })
    
  $('.U2_click_text_1').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.U8_click_text_1').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.L2_click_text_1').css({
    'opacity' : '1',
    'color': 'black',
  })
  //텍스트 변경사항


  //막대 애니메이션
  $('.F').css({
      'display' : 'block',
      'position' : 'absolute',
      'background-color': 'black',
      'animation': 'slideRight 1s forwards',
  });

  $('.F1').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 1s forwards',
  });


  $('.O2').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideRight 1s forwards',
  });


  $('.O3').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 1s forwards',
  });


  $('.U2').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 1s forwards',
  });

  $('.U3').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1s forwards',
  });

  $('.U8').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1s forwards',
  });

  $('.U9').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 1s forwards',
  });

  $('.L2').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideRight 1s forwards',
  });


  //막대 애니메이션


  //팝업 꺼짐
  $('#popup_nature').css('display', 'none');
  $('#popup_nature').fadeOut();
  //팝업 꺼짐


  //블러 꺼짐
  $('.blur').css({
      'display' : 'none',
      'animation' : 'fadeOut'
  });
  //블러 꺼짐
};
//---------------- 자연계열 팝업 -----------------//








//---------------- 부정적 팝업 -----------------//
$('.F7_click_text_2',).on('click', showPopup2,);   

$('.close-button2').on('click', hidepopup2,);



function showPopup2() {
  var textElement = $(this);

  //텍스트 변경사항
  textElement.css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })

  $('.O_click_text_2').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.O10_click_text_2').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.L1_click_text_2').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.L11_click_text_2').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.U1_click_text_2').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.L11').css({
    'display' : 'block',
    'position' : 'absolute',

  });

  //텍스트 변경사항

  
  // 팝업 표시
  $('#popup_negative').css({
      'display' : 'block',
      'animation' : 'fadeIn 1s',
  });
  // 팝업 표시


  // 블러 적용
  $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
  });
  // 블러 적용

}


function hidepopup2() {
  var textElement = $('.F7_click_text_2');

  //텍스트 변경사항
  textElement.css({
      'opacity' : '1',
      'color': 'black',
  })

  $('.O_click_text_2').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.O10_click_text_2').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.L1_click_text_2').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.L11_click_text_2').css({
    'opacity' : '1',
    'color': 'black',
  })
  
  $('.U1_click_text_2').css({
    'opacity' : '1',
    'color': 'black',
  })
  


  //텍스트 변경사항


  //막대 애니메이션
  $('.F7').css({
      'display' : 'block',
      'position' : 'absolute',
      'background-color': 'black',
      'animation': 'slideRight 0.5s forwards',
  });

  $('.F8').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 0.5s forwards',
  });

  $('.O').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideRight 1s forwards',
  });

  $('.O1').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 0.5s forwards',
  });

  $('.O10').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 0.5s forwards',
  });


  $('.L').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 1s forwards',
  });


  $('.L1').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 1s forwards',
  });

  $('.L11').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
  });

  $('.L12').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
  });

  $('.U').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 0.5s forwards',
  });
  
  $('.U1').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1s forwards',
  });
  


  //막대 애니메이션


  //팝업 꺼짐
  $('#popup_negative').css('display', 'none');
  $('#popup_negative').fadeOut();
  //팝업 꺼짐


  //블러 꺼짐
  $('.blur').css({
      'display' : 'none',
      'animation' : 'fadeOut'
  });
  //블러 꺼짐
};
//---------------- 부정적 팝업 -----------------//







//---------------- 4의 의미 팝업 -----------------//
$('.F4_click_text_3',).on('click', showPopup3,);   

$('.close-button3').on('click', hidepopup3,);



function showPopup3() {
  var textElement = $(this);

  //텍스트 변경사항
  textElement.css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })
  
  $('.O6_click_text_3').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.L3_click_text_3').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  //텍스트 변경사항

  
  // 팝업 표시
  $('#popup_4meaning').css({
      'display' : 'block',
      'animation' : 'fadeIn 1s',
  });
  // 팝업 표시


  // 블러 적용
  $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
  });
  // 블러 적용

}


function hidepopup3() {
  var textElement = $('.F4_click_text_3');

  //텍스트 변경사항
  textElement.css({
      'opacity' : '1',
      'color': 'black',
  })

  $('.O6_click_text_3').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.L3_click_text_3').css({
    'opacity' : '1',
    'color': 'black',
  })
  
  //텍스트 변경사항


  //막대 애니메이션
  $('.F4').css({
      'display' : 'block',
      'position' : 'absolute',
      'background-color': 'black',
      'animation': 'slideDown 0.8s forwards',
  });

  $('.F5').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1s forwards',
  });

  $('.O6').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideRight 1s forwards',
  });

  $('.O7').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 1s forwards',
  });

  $('.L3').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 0.8s forwards',
  });

  $('.L4').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1s forwards',
  });

  $('.L9').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1s forwards',
  });


  //막대 애니메이션


  //팝업 꺼짐
  $('#popup_4meaning').css('display', 'none');
  $('#popup_4meaning').fadeOut();
  //팝업 꺼짐


  //블러 꺼짐
  $('.blur').css({
      'display' : 'none',
      'animation' : 'fadeOut'
  });
  //블러 꺼짐
};
//---------------- 4의 의미 팝업 -----------------//






//---------------- 안전성 팝업 -----------------//
$('.F9_click_text_4',).on('click', showPopup4,);   

$('.close-button4').on('click', hidepopup4,);



function showPopup4() {
  var textElement = $(this);

  //텍스트 변경사항
  textElement.css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })

  $('.O13_click_text_4').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })
  
  $('.L10_click_text_4').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })



  //텍스트 변경사항

  
  // 팝업 표시
  $('#popup_safety').css({
      'display' : 'block',
      'animation' : 'fadeIn 1s',
  });
  // 팝업 표시


  // 블러 적용
  $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
  });
  // 블러 적용

}


function hidepopup4() {
  var textElement = $('.F9_click_text_4');

  //텍스트 변경사항
  textElement.css({
      'opacity' : '1',
      'color': 'black',
  })

  $('.O13_click_text_4').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.L10_click_text_4').css({
    'opacity' : '1',
    'color': 'black',
  })

  
  //텍스트 변경사항


  //막대 애니메이션
  $('.F9').css({
      'display' : 'block',
      'position' : 'absolute',
      'background-color': 'black',
      'animation': 'slideRight 1s forwards',
  });

  $('.F10').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 1s forwards',
  });

  $('.O13').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1s forwards',
  });

  $('.L10').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1s forwards',
  });

  


  //막대 애니메이션


  //팝업 꺼짐
  $('#popup_safety').css('display', 'none');
  $('#popup_safety').fadeOut();
  //팝업 꺼짐


  //블러 꺼짐
  $('.blur').css({
      'display' : 'none',
      'animation' : 'fadeOut'
  });
  //블러 꺼짐
};
//---------------- 안전성 팝업 -----------------//






//---------------- 종교 팝업 -----------------//
$('.O14_click_text_5',).on('click', showPopup5,);   

$('.close-button5').on('click', hidepopup5,);



function showPopup5() {
  var textElement = $(this);

  //텍스트 변경사항
  textElement.css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })

  $('.U10_click_text_5').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })



  //텍스트 변경사항

  
  // 팝업 표시
  $('#popup_religion').css({
      'display' : 'block',
      'animation' : 'fadeIn 1s',
  });
  // 팝업 표시


  // 블러 적용
  $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
  });
  // 블러 적용

}


function hidepopup5() {
  var textElement = $('.O14_click_text_5');

  //텍스트 변경사항
  textElement.css({
      'opacity' : '1',
      'color': 'black',
  })

  $('.U10_click_text_5').css({
    'opacity' : '1',
    'color': 'black',
  })
  
  //텍스트 변경사항


  //막대 애니메이션
  $('.O14').css({
      'display' : 'block',
      'position' : 'absolute',
      'background-color': 'black',
      'animation': 'slideUp 1s forwards',
  });

  $('.U10').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 0.5s forwards',
  });

  $('.U11').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 1s forwards',
  });

  $('.L7').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 1s forwards',
  });


  //막대 애니메이션


  //팝업 꺼짐
  $('#popup_religion').css('display', 'none');
  $('#popup_religion').fadeOut();
  //팝업 꺼짐


  //블러 꺼짐
  $('.blur').css({
      'display' : 'none',
      'animation' : 'fadeOut'
  });
  //블러 꺼짐
};
//---------------- 종교 팝업 -----------------//





//---------------- 일상 팝업 -----------------//
$('.F2_click_text_6',).on('click', showPopup6,);   

$('.close-button6').on('click', hidepopup6,);



function showPopup6() {
  var textElement = $(this);

  //텍스트 변경사항
  textElement.css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })

  $('.O8_click_text_6').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.O11_click_text_6').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.U6_click_text_6').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.L8_click_text_6').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  //텍스트 변경사항

  
  // 팝업 표시
  $('#popup_lifearound').css({
      'display' : 'block',
      'animation' : 'fadeIn 1s',
  });
  // 팝업 표시


  // 블러 적용
  $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
  });
  // 블러 적용

}


function hidepopup6() {
  var textElement = $('.F2_click_text_6');

  //텍스트 변경사항
  textElement.css({
      'opacity' : '1',
      'color': 'black',
  })

  $('.O8_click_text_6').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.O11_click_text_6').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.U6_click_text_6').css({
    'opacity' : '1',
    'color': 'black',
  })

  $('.L8_click_text_6').css({
    'opacity' : '1',
    'color': 'black',
  })



  //텍스트 변경사항


  //막대 애니메이션
  $('.F6').css({
      'display' : 'block',
      'position' : 'absolute',
      'background-color': 'black',
      'animation': 'slideLeft 1s forwards',
  });

  $('.O11').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 0.3s forwards',
  });

  $('.O12').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 0.7s forwards',
  });

  $('.O8').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideRight 1.2s forwards',
  });

  $('.O9').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideLeft 0.7s forwards',
  });

  $('.U6').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 0.7s forwards',
  });

  $('.U7').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 1.2s forwards',
  });

  $('.L8').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideRight 1.2s forwards',
  });


  //막대 애니메이션


  //팝업 꺼짐
  $('#popup_lifearound').css('display', 'none');
  $('#popup_lifearound').fadeOut();
  //팝업 꺼짐


  //블러 꺼짐
  $('.blur').css({
      'display' : 'none',
      'animation' : 'fadeOut'
  });
  //블러 꺼짐
};
//---------------- 일상 팝업 -----------------//






//---------------- 단순 팝업 -----------------//
$('.F2_click_text_7',).on('click', showPopup7,);   

$('.close-button7').on('click', hidepopup7,);



function showPopup7() {
  var textElement = $(this);

  //텍스트 변경사항
  textElement.css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })

  $('.U4_click_text_7').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.L5_click_text_7').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })

  $('.O4_click_text_7').css({
    'color' : 'white',
    'transition' : '0.5s',
    'opacity' : '0',
  })



  //텍스트 변경사항

  
  // 팝업 표시
  $('#popup_simple').css({
      'display' : 'block',
      'animation' : 'fadeIn 1s',
  });
  // 팝업 표시


  // 블러 적용
  $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
  });
  // 블러 적용

}


function hidepopup7() {
  var textElement = $('.F2_click_text_7');

  //텍스트 변경사항
  textElement.css({
      'opacity' : '1',
      'color': 'black',
  })

  $('.U4_click_text_7').css({
    'opacity' : '1',
    'color': 'black',
  })
  
  $('.L5_click_text_7').css({
    'opacity' : '1',
    'color': 'black',
  })
  
  $('.O4_click_text_7').css({
    'opacity' : '1',
    'color': 'black',
  })
  //텍스트 변경사항


  //막대 애니메이션
  $('.F2').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideRight 0.5s forwards',
  });

  $('.F3').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 0.5s forwards',
  });

  $('.L5').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 0.5s forwards',
  });

  $('.L6').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 0.5s forwards',
  });

  $('.O4').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideDown 0.7s forwards',
  });

  $('.O5').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 1.5s forwards',
  });



  //막대 애니메이션


  //팝업 꺼짐
  $('#popup_simple').css('display', 'none');
  $('#popup_simple').fadeOut();
  //팝업 꺼짐


  //블러 꺼짐
  $('.blur').css({
      'display' : 'none',
      'animation' : 'fadeOut'
  });
  //블러 꺼짐
};
//---------------- 단순 팝업 -----------------//






//---------------- 강준혁 팝업 -----------------//
$('.U4_click_text_7',).on('click', showPopup40,);   

$('.close-button40').on('click', hidepopup40,);



function showPopup40() {
  var textElement = $(this);

  //텍스트 변경사항
  textElement.css({
      'color' : 'white',
      'transition' : '0.5s',
      'opacity' : '0',
  })


  //텍스트 변경사항

  
  // 팝업 표시
  $('#popup_kang').css({
      'display' : 'block',
      'animation' : 'fadeIn 1s',
  });
  // 팝업 표시


  // 블러 적용
  $('.blur').css({
      'display' : 'block',
      'animation' : 'fadeIn'
  });
  // 블러 적용

}


function hidepopup40() {
  var textElement = $('.U4_click_text_7');

  //텍스트 변경사항
  textElement.css({
      'opacity' : '1',
      'color': 'black',
  })

  //텍스트 변경사항


  //막대 애니메이션
  $('.U4').css({
      'display' : 'block',
      'position' : 'absolute',
      'background-color': 'black',
      'animation': 'slideRight 0.5s forwards',
  });

  $('.U5').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
    'animation': 'slideUp 0.5s forwards',
  });


  $('.L13').css({
    'display' : 'block',
    'position' : 'absolute',
    'background-color': 'black',
  });



  //막대 애니메이션


  //팝업 꺼짐
  $('#popup_kang').css('display', 'none');
  $('#popup_kang').fadeOut();
  //팝업 꺼짐


  //블러 꺼짐
  $('.blur').css({
      'display' : 'none',
      'animation' : 'fadeOut'
  });
  //블러 꺼짐
};
//---------------- 강준혁 팝업 -----------------//








$(document).ready(function(){
  setTimeout(function(){
      $('#season').css('color', 'black');
      setTimeout(function(){
          $('#season').css('color', 'rgb(222,222,222)');
      }, 300);
  }, 3000);

  setTimeout(function(){
      $('#greek').css('color', 'black');
      setTimeout(function(){
          $('#greek').css('color', 'rgb(222,222,222)');
      }, 300);
  }, 15000);

  setTimeout(function(){
      $('#day4').css('color', 'black');
      setTimeout(function(){
          $('#day4').css('color', 'rgb(222,222,222)');
      }, 300);
  }, 30000);

  setTimeout(function(){
      $('#chair').css('color', 'black');
      setTimeout(function(){
          $('#chair').css('color', 'rgb(222,222,222)');
      }, 300);
  }, 45000);

  setTimeout(function(){
      $('#human').css('color', 'black');
      setTimeout(function(){
        $('#human').css('color', 'rgb(222,222,222)');
      }, 300);
  }, 60000);

  setTimeout(function(){
      $('#phonenumber').css('color', 'black');
      setTimeout(function(){
        $('#phonenumber').css('color', 'rgb(222,222,222)');
      }, 300);
  }, 75000);

  setTimeout(function(){
      $('#photo').css('color', 'black');
      setTimeout(function(){
        $('#photo').css('color', 'rgb(222,222,222)');
      }, 300);
  }, 90000);

});

