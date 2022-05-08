
// 정렬 설명
// str[0] = 쉘 정렬 
var str = ['<b><b>これはバブル整列です</b><br>バブル整列とは、隣接する2つのレコードを比較してサイズが順番になっていなければ交換して整列するアルゴリズムです。<br><br><b>バブル整列アルゴリズムの特徴</b><br>長所 : 具現が非常に簡単だ<br>短所 : 順序に合わない要素を隣接する要素と交換する。<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2。一つの要素が一番左から一番右に移動するためには、配列ですべての他の要素と交換されなければならない。<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3。特に特定要素が最終整列位置に既にある場合でも交換されることが起きる。<br><br><b>バブル整列の時間複雑度</b><br>最高 : O(n^2) , 女工 : O(n^2) , 最悪の場合 : O(n^2)']


$(document).ready(function () {
    $("#explain").click(function () {
        $("#main_right").html(str[0]);
    });
});