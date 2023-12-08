
  const onClickNice=(num)=> {
//今のカウントを調べる

    var count = document.getElementById("kazu"+num).innerText;
    //カウントを1増やす
    document.getElementById("kazu"+num).innerText = parseInt(count) + 1;

}
    
  var isShow = false; 

  var img_src = new Array(
    "img/bad.jpg",
    "img/baki.jpg",
    "img/esta-.jpg",
    "img/sennki.jpg"
  );
  function openImg(num) {
  
    if (isShow) {
     // サムネ表示
    document.getElementById("image"+num).src=(img_src[num-1]);
    } else  {
   // 詳細表示
      document.getElementById("image"+num).src =`img/syousai${num}.jpg`;
    }
    isShow= !isShow;
}
    
        
  
