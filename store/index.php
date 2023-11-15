<?php
echo "<!DOCTYPE html>
<html>
<head>
    <title>ONLINESTORE</title>
    <meta charset='UTF-8'>
    <link rel='stylesheet' href='css/style.css'>
</head>
<body>
<h1>LIVINGWARE LIFEBLUE ONLINESTORE</h1>
<hr>

<div class='dan'>
<div class='item'>
    <div class='setumei' id='shirt'>
        <img src='img/shirt.JPG'>
        <div>
            <p>商品名：シャツ</p>
            <p>　価格：800円</p>
        </div>
    </div>
    <button onclick='buy()'>BUY</button>
</div>

<div class='item'>
    <div class='setumei'>
        <img src='img/zubon.JPG'>
        <div>
            <p>商品名：ズボン</p>
            <p>　価格：1200円</p>
        </div>
    </div>
    <button onclick='buy()'>BUY</button>
</div>
</div>

<div class='dan'>
    <!--シャツここから-->
    <div class='item'>
        <div class='setumei'>
            <img src='img/shoes.JPG'>
            <div>
                <p>商品名：靴</p>
                <p>　価格：3000円</p>
            </div>
        </div>
        <button onclick='buy()'>BUY</button>
    </div>
    
    <div class='item'>
        <div class='setumei'>
            <img src='img/bag.JPG'>
            <div>
                <p>商品名：カバン</p>
                <p>　価格：5600円</p>
            </div>
        </div>
        <button onclick='buy()'>BUY</button>
    </div>
</div>

<div id='cart'><span>カートを見る</span><span id='cnt'>0</span></div>

<script src='js/index.js'></script>
</body>
</html>"
?>