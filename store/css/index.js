


const on=(num)=> {
    //今のカウントを調べる
   
    var count = document.getElementById("kazu"+num).innerText;
    //カウントを1増やす
    document.getElementById("kazu"+num).innerText = parseInt(count) + 1;
    
}
    
  
      
  
  
  
  var img_src = new Array("img/bad.jpg","img/syousai1.jpg");
  var i = 0; 

  function openImg() {

    if (i == 1) {
      i = 0;
    } else {
      i ++;
    }
    document.getElementById("image").src = img_src[i];
  }
     
  var img_src2 = new Array("img/baki.jpg","img/syousai2.jpg");
  var i = 0;

  function openImg2() {

    if (i == 1) {
      i = 0;
    } else {
      i ++;
    }
    document.getElementById("image2").src = img_src2[i];
  }


  var img_src3 = new Array("img/esta-.jpg","img/syousai3.jpg");
  var i = 0;

  function openImg3() {

    if (i == 1) {
      i = 0;
    } else {
      i ++;
    }
    document.getElementById("image3").src = img_src3[i];
  }

  var img_src4 = new Array("img/sennki.jpg","img/syousai4.jpg");

  function openImg4() {

    if (i == 1) {
      i = 0;
    } else {
      i ++;
    }
    document.getElementById("image4").src = img_src4[i];
  }