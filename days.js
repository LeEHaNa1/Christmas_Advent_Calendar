var isDisabled = 0;
var todo = ["&lt;Day 1&gt; <br><br>옷장 정리를 하며 겨울옷을 정리해 보세요. <br><br>정리를 하다 보면 마음도 정돈될 겁니다.",
    "&lt;Day 2&gt; <br><br>휴대폰 속 사진들을 정리하면서 지난 한 해를 돌아보세요.<br><br>무슨 일들이 있었는지 떠올려보세요.",
    "&lt;Day 3&gt; <br><br>올해 가장 잘한 일에 대해 생각해보세요.<br><br>물건을 샀거나 도전을 해봤거나 무언가 포기해보는 등 뭐든 좋습니다.",
    "&lt;Day 4&gt; <br><br>무작정 버스를 타고 길을 떠나보세요. <br><br>생각치 못한 일들을 만나게 될 거에요.",
    "&lt;Day 5&gt; <br><br>1월부터 11월까지 그 달 가장 인상깊었던 일을 적어보세요.<br><br>좋던 나쁘던 뭐든 좋습니다.",
    "&lt;Day 6&gt; <br><br>아침 일찍 일어나 걸어보세요.<br><br>시리는 겨울 아침도 상쾌함으로 느껴질 겁니다.",
    "&lt;Day 7&gt; <br><br>고마웠던 사람에게 고마움을 전해보세요.<br><br>거창하지 않아도 좋습니다. 지나가는 말 한마디도 좋아요.",
    "&lt;Day 8&gt; <br><br>혼자서 괜찮은 식당에 들어가 밥을 먹어보세요. <br><br>누군가와 얘기하지 않고 혼자 천천히 먹는 밥은 다른 느낌일 겁니다.",
    "&lt;Day 9&gt; <br><br>겨울용품을 하나 장만하세요. <br><br> 목도리, 장갑, 모자 모두 좋습니다.",
    "&lt;Day 10&gt; <br><br>책 한 권을 들고 따뜻한 차와 함께 의자에 앉으세요. <br><br>어떤 장르던지 좋습니다.",
    "&lt;Day 11&gt; <br><br>겨울 느낌이 물씬 나는 드라마와 영화를 보세요. <br><br> 드라마로는 <날씨가 좋으면 찾아가겠어요.>와 <br>영화로는 <윤희에게>를 추천할게요.",
    "&lt;Day 12&gt; <br><br>겨울에 가장 맛있는 과일을 먹어보세요. <br><br> 귤과 딸기등이 있을 겁니다.",
    "&lt;Day 13&gt; <br><br>겨울 간식을 사먹어 보세요. <br><br> 붕어빵, 호떡, 군고구마, 군밤, 찐빵이 있겠죠? <br>이 참에 예전 기억들을 떠올리는 것도 좋아요.",
    "&lt;Day 14&gt; <br><br>올해 하지 못해 가장 아쉬운 일을 생각해보세요. <br><br> 내년을 계획하는 데에 도움이 될 겁니다.",
    "&lt;Day 15&gt; <br><br>혼자 여행을 떠나보세요. 가까운 곳이던 먼 곳이던 모두 좋습니다.",
    "&lt;Day 16&gt; <br><br>올해가 거의 끝나갑니다. 평소 나라면 하지 않았을 일을 하나 해보세요.",
    "&lt;Day 17&gt; <br><br>감기에 걸리기 쉬운 날씨입니다. <br><br> 따뜻한 차 한 잔에 디저트 하나를 곁들여 보세요.",
    "&lt;Day 18&gt; <br><br>새로운 향수를 사용해보세요. <br><br> 겨울을 기억하는 데에 도움이 될 겁니다.",
    "&lt;Day 19&gt; <br><br>크리스마스가 며칠 남지 않았습니다. <br><br> 빨간색이나 초록색의 아이템을 하나 착용해볼까요?",
    "&lt;Day 20&gt; <br><br>새로운 잠옷을 장만해보세요. <br><br> 집에서의 시간 혹은 잠들기 전의 시간이 새로워질겁니다.",
    "&lt;Day 21&gt; <br><br>소중한 사람들을 위한 선물을 준비해보는 건 어떤가요?",
    "&lt;Day 22&gt; <br><br>끝과 시작이 가까워지는 날입니다. <br><br>마음이 싱숭생숭할 때에는 가장 일상적인 일을 해보세요.",
    "&lt;Day 23&gt; <br><br>구운 귤은 그냥 귤과는 다른 맛입니다. 한 번 도전해보세요!",
    "&lt;Day 24&gt; <br><br>크리스마스 이브입니다. 오늘은 케이크 한 조각 어떤가요?",
    "&lt;Day 25&gt; <br><br>Happy Christmas!"];

const youtubemusic = [
    "https://www.youtube.com/embed/mSaml2DtAok?autoplay=1",
    "https://www.youtube.com/embed/PpWC3JZDZnk?autoplay=1",
    "https://www.youtube.com/embed/8kNiOVSpxhI?autoplay=1",
    "https://www.youtube.com/embed/4y0k-VL4dnY?autoplay=1",
    "https://www.youtube.com/embed/HWiMud1vspA?autoplay=1",

    "https://www.youtube.com/embed/mHe3amVvtVo?autoplay=1",
    "https://www.youtube.com/embed/tn0G-CtgLuU?autoplay=1",
    "https://www.youtube.com/embed/IM36mrL7wfs?autoplay=1",
    "https://www.youtube.com/embed/ylx6A8RSPm8?autoplay=1",
    "https://www.youtube.com/embed/rPXTIoN7ILo?autoplay=1",

    "https://www.youtube.com/embed/uVnpNY43oHU?autoplay=1",
    "https://www.youtube.com/embed/nCQEzsL5VkQ?autoplay=1",
    "https://www.youtube.com/embed/m9tIG9RIPK4?autoplay=1",
    "https://www.youtube.com/embed/x8d-4BLCvJE?autoplay=1",
    "https://www.youtube.com/embed/ylx6A8RSPm8?autoplay=1",

    "https://www.youtube.com/embed/-mrzrdjflGk?autoplay=1",
    "https://www.youtube.com/embed/dBFpABzGfR0?autoplay=1",
    "https://www.youtube.com/embed/kJO2aAbzOS8?autoplay=1",
    "https://www.youtube.com/embed/vD5o5_R8vwY?autoplay=1",
    "https://www.youtube.com/embed/VVq9I3_FP7I?autoplay=1",

    "https://www.youtube.com/embed/eVAXS2Lr4Bk?autoplay=1",
    "https://www.youtube.com/embed/8x7dywqOv6E?autoplay=1",
    "https://www.youtube.com/embed/2TKE4qCqqFM?autoplay=1",
    "https://www.youtube.com/embed/Fpdi55QYFKU?autoplay=1",
    "https://www.youtube.com/embed/JkRKxxLiDNI?autoplay=1"

];

function add(e) {
    isDisabled += 1;
    if (isDisabled > 1) {
        isDisabled -= 1;
    } else {
        const newp = document.createElement('p');
        const oridiv = document.getElementById('overlay');
        newp.style.backgroundColor = 'rgb(60,80,5)';
        newp.style.width = '800px';
        newp.style.height = '450px';
        newp.style.marginLeft = '400px';
        newp.style.top = '280px';
        newp.style.borderRadius = '10px';
        newp.style.opacity = '0.9';
        newp.style.color = 'white';
        newp.style.boxShadow = '0px 0px 10px rgb(231, 223, 144)';

        const newButton = document.createElement('button');
        const newText = document.createTextNode('X');
        newButton.appendChild(newText);
        newButton.style.marginRight = '10px';
        newButton.className = 'button_style';
        newp.appendChild(newButton);
        newButton.onclick = function () {
            p = this.parentElement;
            p.remove(this);
            isDisabled -= 1;
        }
        const thing = document.createElement('p');
        thing.innerHTML = todo[Number(e.target.innerText) - 1];
        thing.className = "things";
        newp.appendChild(thing);

        const youtube = document.createElement('iframe');
        youtube.setAttribute("id", "mainframe");
        youtube.setAttribute("src", youtubemusic[Number(e.target.innerText) - 1]);
        youtube.setAttribute("frameborder", "0");
        youtube.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        youtube.allowfullscreen;
        youtube.style.position = 'absolute';
        youtube.style.right = '240px';
        youtube.style.top = '280px';
        newp.appendChild(youtube);

        oridiv.appendChild(newp);

    }
}
