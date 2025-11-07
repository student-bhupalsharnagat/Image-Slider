const slides= document.querySelectorAll(".slide");
let prevbtn= document.querySelector(".prevBtn");
let nextbtn= document.querySelector(".NextBtn");


let btn= document.querySelector(".btn");

let counter=0;
slides.forEach((slide,index,)=>{
    slide.style.left= `${index*100}%`

})
prevbtn.addEventListener("click",()=>{
   if(counter>0){
    counter--;
    slideImage()
    console.log(counter)
   }
   else if(counter==0){
    counter=3
     slideImage()
 


   }
})

nextbtn.addEventListener("click",()=>{
    counter++;
    slideImage()
    console.log(counter)
    if(counter==3){
        counter=-1;
    }
})





function slideImage(){
    slides.forEach((slide)=>{
slide.style.transform =`translateX(-${counter * 100}%)`
    })
}