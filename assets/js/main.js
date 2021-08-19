if ($(".items-s-list")[0]) {
  // const slider = document.querySelector('.items-s-list');
  // let isDown = false;
  // let startX;
  // let scrollLeft;
  //
  // slider.addEventListener('mousedown', (e) => {
  //   isDown = true;
  //   slider.classList.add('active');
  //   startX = e.pageX - slider.offsetLeft;
  //   console.log("this"+startX);
  //   scrollLeft = slider.scrollLeft;
  // });
  // slider.addEventListener('mouseleave', () => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener('mouseup', () => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener('mousemove', (e) => {
  //   if(!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - slider.offsetLeft;
  //   const walk = (x - startX) * 1; //scroll-fast
  //   slider.scrollLeft = scrollLeft - walk;
  //   console.log(walk);
  // });

  $(".scrolling-next-btn").click(function(){
    var id = ($(this).attr("for"));
    // console.log("fdas" +$('#'+id+' .item-s').first().width());
    document.querySelector('#'+id).scrollLeft += $('#'+id+' .item-s').first().width();

    // alert("fdas");
  });

  $(".scrolling-prev-btn").click(function(){
    var id = ($(this).attr("for"));
    document.querySelector('#'+id).scrollLeft -= $('#'+id+' .item-s').first().width() ;
  });

}




if ($(".t-list")[0]) {
  const slider = document.querySelector('.t-list');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    console.log("this"+startX);
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
}





if ($(".imgs-list")[0]) {
  const slider = document.querySelector('.imgs-list');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    console.log("this"+startX);
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });


  $(".scrolling-next-btn").click(function(){
    var id = ($(this).attr("for"));
      // alert("fds"+$('#'+id+' .img').first().width());
    document.querySelector('#'+id).scrollLeft += $('#'+id+' .img').first().width();
  });

  $(".scrolling-prev-btn").click(function(){
    var id = ($(this).attr("for"));
    document.querySelector('#'+id).scrollLeft -= $('#'+id+' .img').first().width() ;
  });


  $(".imgs-list .img").click(function(){
    var id = ($(this).attr("for"));
    var src = ($(this).children().attr("src"));
    // alert("ewf" + id);
    $('#'+id).attr("src", src);
      // alert("fds"+$('#'+id+' .img').first().width());
    // document.querySelector('#'+id).scrollLeft += $('#'+id+' .img').first().width();
  });





}




if ($(".imgs-list-2")[0]) {
  const slider = document.querySelector('.imgs-list-2');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageY - slider.offsetTop;
    console.log("this"+startX);
    scrollLeft = slider.scrollTop;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageY - slider.offsetTop;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollTop = scrollLeft - walk;
    console.log(walk);
  });


  $(".scrolling-next-btn").click(function(){
    var id = ($(this).attr("for"));
      // alert("fds"+$('#'+id+' .img').first().width());
    document.querySelector('#'+id).scrollTop+= $('#'+id+' .img').first().height();
  });

  $(".scrolling-prev-btn").click(function(){
    var id = ($(this).attr("for"));
    document.querySelector('#'+id).scrollTop -= $('#'+id+' .img').first().height() ;
  });


  $(".imgs-list-2 .img").click(function(){
    var id = ($(this).attr("for"));
    var src = ($(this).children().attr("src"));
    // alert("ewf" + id);
    $('#'+id).attr("src", src);
      // alert("fds"+$('#'+id+' .img').first().width());
    // document.querySelector('#'+id).scrollLeft += $('#'+id+' .img').first().width();
  });





}
// $('.imgs-list-2').slick({
//   dots:true,
//   arrows:false,
//   initialSlide: 0,
// });



$("#formToggleBtn").click(function(){
var id = ($(this).hasClass("collapsed"));
// alert(id);     transition-delay: 0.5s;
if (id) {
  $('.bottom-bar').addClass('fakeOpen');
  // $('.bottom-bar').css("height", "81px");
  $('.bottom-bar').css("transition-delay", "0s");
}else{
  $('.bottom-bar').removeClass('fakeOpen');
  // $('.bottom-bar').css("height", "0");
  $('.bottom-bar').css("transition-delay", "0.5s");
}


});

// $(".add-to-cart").click(function(){
// var id = ($(this).hasClass("sec"));
// alert(id);
//
//
// });


$('.add-to-cart').click(function () {
        var cart = $('#cartDDown');
        var imgtodrag = $(this).closest('.s-item-for-img').find('.img-4-animation img').eq(0);
        // console.log(cart);
        if (imgtodrag) {
          // console.log(imgtodrag);
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                  'top': $(this).offset().top + 10,
                          'left': $(this).offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 10)
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000);


            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });
