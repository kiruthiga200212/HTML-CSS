
console.log("hello")
window.onload = function() {
    var imageIndex = 0;
    var images = 
        document.getElementsByClassName('test')
    var isMouseOverImage = false;
    var scrollImages = 
        document.getElementById('scroll-image');

    var x, y;

    function noScroll() {
        window.scrollTo(x, y);
    }
    scrollImages.addEventListener(
            "mouseenter", function() {

        x = window.pageXOffset;
        y = window.pageYOffset;
        window.addEventListener("scroll", noScroll);
       
        isMouseOverImage = true;
    });

    scrollImages.addEventListener(
            "mouseleave", function() {

        isMouseOverImage = false;

        window.removeEventListener(
                    "scroll", noScroll);
    });

    
    scrollImages.addEventListener(
                "wheel", function(e) {
                        
        
        if (isMouseOverImage) {
            var nextImageIndex;

          n
            if (e.deltaY > 0)
                nextImageIndex = (imageIndex + 1)
                                 % images.length;
            else
                nextImageIndex = 
                        (imageIndex - 1
                        + images.length)
                        % images.length;

          
            images[imageIndex].style.zIndex = "0";
                
         
            images[nextImageIndex].style.zIndex = "1";
            imageIndex = nextImageIndex;
        }
    });
}

window.onscroll = function(){
    scrolldown();
}
function scrolldown(){
    var img = document.getElementById("image");
    if(document.documentElement.scrollTop > 150)
        img.src = "https://miro.medium.com/v2/resize:fit:1400/1*_LG3GFDIi8Ro-ReV2F5_sA.jpeg"
        
    else
        img.src = "https://media.licdn.com/dms/image/v2/D4E12AQFaNy8GMG2xOg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698500445252?e=2147483647&v=beta&t=fqGuNQk1RoJaP0NWpeyyahJFhkYmWfjM9FgiR9KZTYQ"
    
}

function scrolling(){
    var navigator =document.getElementById("var")
}