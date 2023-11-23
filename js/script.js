const link = document.querySelectorAll('.link');
const giftName = document.querySelectorAll('.gift_name');

Array.from(link).forEach((elem,i) => {
    if( window.innerWidth <= 320 ){
        if(i === 2){
            elem.style.paddingRight = '30px'
        }
    } 
})
