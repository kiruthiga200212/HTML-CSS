alert('test')
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search__close'),
      searchContent = document.getElementById('search-content')


      if(searchButton){
        searchButton.addEventListener('click',() =>{
            searchContent.classList.add('show-search')
      })
      }

      if(searchClose){
        searchClose.addEventListener('click', () =>{
            searchContent.classList.remove('show-search')
        
        })

      }
      let swiperHome = new Swiper('.home__swiper', {
      
   
        loop: true,
        spaceBetween: -2,
        grabCursor: true,
        sliderPreview: 'auto',
        centeredSlides: 'auto',

        autoplay:{
            delay:2000,
            disableOnInteration:false,
        },
       breakpoints:{
        1220:{
            spaceBetween:-4,
        }
    
       }
      })