
//mobile hidden menu
function openClose() {
  if(document.getElementById('hidden_menu').style.display === 'block') {
    (document.getElementById('hidden_menu').style.display = 'none');
    (document.getElementById('hidden_menu_close').style.display = 'none')
  }
  else {
    (document.getElementById('hidden_menu').style.display = 'block')
    (document.getElementById('hidden_menu_close').style.display = 'block')
  }
}

/* mobile drop_menu */
  $('.drop_menu').click(function(){
    $(this).siblings('.sub_m').toggleClass('on');
  })

  /* main_bg */
  var swiper = new Swiper(".main_bg_sw", {
    spaceBetween: 10,
    pagination: {
      el: ".main_bg_pn",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main_bg_nbtn",
      prevEl: ".main_bg_pbtn",
    },
  });

  /* short_slide */
  const list = document.querySelectorAll('.top_slide_btn');
  function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach((item) => item.addEventListener('click', activeLink));


  $(document).ready(function() {
    $('.top_slide_btn').click(function(){
      $('.swiper_show').removeClass('active')
      $(this).next('.swiper_show').addClass('active')
    })
  })
/* mobile short item */
$(document).ready(function(){
  $('.short_item').click(function(){
    $(this).children('.short_list').slideToggle(300);
    $(this).toggleClass('active');
  })
})

  /* inner */
  var swiper = new Swiper(".inner_sw", {
    allowTouchMove: true,
    slidesPerView:1.1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".inner_sw_nbtn",
      prevEl: ".inner_sw_pbtn",
    },
    breakpoints : {
      560: {
        slidesPerView:2.1,
        spaceBetween: 20,
      },
      720: {
        slidesPerView:2.2,
      },
      960: {
        slidesPerView:3,
      },
    }
  });

  //insite
  var swiper = new Swiper(".insite_sw", {
    spaceBetween: 20,
    slidesPerView:1.1,
    navigation: {
      nextEl: ".insite_sw_nbtn",
      prevEl: ".insite_sw_pbtn",
    },
    breakpoints : {
      560: {
        slidesPerView:2.2,
      },
      960: {
        slidesPerView:2,
        
      },
    }
  });


  /* section swiper */
  var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView:1.08,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints : {
      560: {
        slidesPerView:2.1,
        spaceBetween: 20,
      },
      720: {
        slidesPerView:2.2,
      },
      960: {
        slidesPerView:4,
      },
    }
  });

  /* go_top */
  $(window).scroll(function(){
    $(".go_top").click(function(){
    window.scrollTo({top : 0, behavior: 'smooth'}); 
    });
  });
