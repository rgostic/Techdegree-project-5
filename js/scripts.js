$(document).ready(function() {
   $("#search").on('keyup',function(e) {



       var galleryImages = $(".gallery a");

       galleryImages.show();

       var searchString = e.target.value;
       var filteredImages = galleryImages.filter(function (c) {

            var caption = $(this).data("title");
            console.log(caption);
            console.log(searchString);
            return caption.toLowerCase().indexOf(searchString.toLowerCase()) === -1;
       }).hide();

       //filteredImages.each(function () {
        //   $(this).hide();
       //})

   }) ;
});