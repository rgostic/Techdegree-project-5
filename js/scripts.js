$(document).ready(function() {
   $("#search").on('keyup',function(e) {
       var galleryImages = $(".gallery a");

       galleryImages.show();

       var searchString = e.target.value;
       var filteredImages = galleryImages.filter(function (c) {

            var caption = $(this).data("title");
            return caption.toLowerCase().indexOf(searchString.toLowerCase()) === -1;
       }).hide();
   }) ;
});