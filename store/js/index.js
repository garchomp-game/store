
 const on=(num)=> {
//今のカウントを調べる

   var count = document.getElementById("kazu"+num).innerText;
    //カウントを1増やす
   document.getElementById("kazu"+num).innerText = parseInt(count) + 1;

}
    
 var i = 0; 

 var img_src = new Array("img/bad.jpg","img/baki.jpg","img/esta-.jpg","img/sennki.jpg");
 function openImg(num) {
  
   if (i == 1) {
     // サムネ表示
   document.getElementById("image"+num).src=(img_src[num-1]);
   i = 0;
 
   } else  {
   // 詳細表示
   document.getElementById("image"+num).src =`img/syousai${num}.jpg`;
   i++;

  }
 }
    
        
  
