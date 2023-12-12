var isclicked = 0;

function notice(e) {

    let talking = document.getElementById("talking");
    let text;

    if (isclicked == 0) {
        isclicked = 1;
        talking.style.fontSize = "16px";
        talking.style.width = "300px";
        talking.style.height = "150px";
        talking.style.left = "1300px";
        text = "&ltChristmas Advent Calendar 사용법&gt <br><br> 하루에 하나씩 날짜에 맞춰서 열어보세요. <br> 크리스마스를 기다리며, 연말을 보내며<br> 의미있는 시간이 될 겁니다. <br> 해보면 좋을 일 한가지와 <br>노래 한 곡을 추천드려요!";
    } else {
        isclicked = 0;
        text = "How to use";
        talking.style.height = "40px";
        talking.style.fontSize = "20px";
        talking.style.width = "210px";
        talking.style.left = "1380px";
    }

    talking.innerHTML = text;
}