const images = [
  "assets/shot/1.png",
  "assets/shot/2.png",
  "assets/shot/colage.png",
  "assets/shot/4.png",
  "assets/shot/5.png",
  "assets/shot/6.png",
  "assets/shot/7.png",
  "assets/shot/8.png",
  "assets/shot/9.png",
  "assets/shot/10.png",
  "assets/shot/11.png",
  "assets/shot/12.png",
  "assets/shot/13.png",
  "assets/shot/14.png",
  "assets/shot/15.png",
  "assets/shot/16.png",
  "assets/shot/17.png",
];

len = images.length;
i = 0;

document.getElementById("arch_total").innerHTML = len;

document.getElementById("pos").onclick = function changer_f(){
  i += 1;
  if(i > len - 1){
    i = 0
  }
  document.getElementById("arch_img").src = images[i];
  document.getElementById("arch_number").innerHTML = i + 1;
}


document.getElementById("pre").onclick= function changer_b(){
  i -= 1;
  if(i < 0){
    i = len - 1
  }
  document.getElementById("arch_img").src = images[i];
  document.getElementById("arch_number").innerHTML = i + 1;
}


document.addEventListener('keydown', e => {
  if(e.key === 'ArrowLeft'){
    i -= 1;
    if (i < 0) {
      i = len - 1;
    }
    document.getElementById("arch_img").src = images[i];
    document.getElementById("arch_number").innerHTML = i + 1;
  }
})

document.addEventListener('keydown', e => {
  if(e.key === 'ArrowRight'){
    i += 1;
    if (i > len - 1) {
      i = 0;
    }
    document.getElementById("arch_img").src = images[i];
    document.getElementById("arch_number").innerHTML = i + 1;
  }})




  // showit
