$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
/* $(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  }); */
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
/*   $(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  }); */