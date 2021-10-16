const button = document.querySelector('.side__share');
const socials = document.querySelector('.main__socials');


const activeState = (flag) =>{
    return () =>{
    if(flag === 1){
        if(socials.classList.contains('clicked')){
            socials.classList.remove('active' , 'clicked');
            button.classList.remove('active-mobile');
        }else{ 
            socials.classList.add('active' , 'clicked');
            button.classList.add('active-mobile');
           
        }
         
        
    }else if (flag === 0){
        socials.classList.add('active');
        button.classList.add('active-mobile');
    }
  
    }
    
}
 const deActiveState = () =>{
     if(!socials.classList.contains('clicked')){ 
      socials.classList.remove('active');
      button.classList.remove('active-mobile');
     }
}


button.addEventListener('mouseover' , activeState(0));
button.addEventListener('click' , activeState(1));
button.addEventListener('mouseout' , deActiveState);


