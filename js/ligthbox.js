$('.carrusel_img').click(function(e){
    var img = e.target.src;
    var lightbox = '<div id="modal" class="modal"> <img class="modal_img" src="'+ img +'" alt=""></div>'
    $('body').append(lightbox);
    $('.modal_img, #modal').click(function(){
      $('#modal').remove();  
    })
})

$(document).keyup(function(e){
    if(e.which==27){
        $('#modal').remove();
    }
})