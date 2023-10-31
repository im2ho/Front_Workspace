const images = [
    '../image/가디.jpg',
    '../image/꼬링크.png',
    '../image/리아코.gif',
    '../image/브케인.png',
    '../image/윈디.jpeg',
];
const imagesPerpage = 2; //한 페이지에 표시될 이미지 개수
let currentPage = 0; //초기값: 0 -> 첫 번째 페이지 표시

const imageContainer = document.querySelector('.img-container'); //이미지가 표시될 div공간
const prevButton = document.getElementById("prevPage"); //이전 버튼
const nextButton = document.getElementById("nextPage"); //다음 버튼

//이미지 표시 함수의 시작
/*
displayImg(page){}
    - page : 현재 페이지 번호
    - 호출 될 때마다 페이지를 전환하고 해당 페이지의 이미지를 표시하는 데 사용
    - 함수를 호출하는 공간에서 page 값을 전달하면 함수는 해당 페이지에 해당하는 이미지를 표시

displayImg(0) : 첫 번째 페이지에 해당하는 이미지 표시
displayImg(1) : 두 번째 페이지에 해당하는 이미지 표시
*/
function displayImg(page){
    //시작 인덱스(startIndex) = 현재 페이지 번호(page) * 페이지 당 이미지 개수(imagePerpage)
    const startIndex = page * imagesPerpage;

    //종료 인덱스(endIndex)
    const endIndex = startIndex + imagesPerpage; //페이지 내에서 표시할 마지막 이미지 다음 인덱스를 나타냄

    //이미지 배열('images')에서 시작 인덱스와 종료 인덱스 사이에 이미지를 추출해서 pageImages 배열에 저장
    //pageImages 배열 : 현재 페이지에 표시될 이미지들을 담게 됨
    const pageImages = images.slice(startIndex, endIndex); //slice(): endIndex -1 까지 추출

    imageContainer.innerHTML = ''; //이미지를 표시할 컨테이너 초기화(빈 공간 생성)

    //배열에 있는 이미지들을 반복해서 처리
    pageImages.forEach(images => {
        // 각 이미지를 표시하기 위한 <img> 태그 요소를 생성
        const imgElement = document.createElement('img');

        // <img>태크에 src 속성을 images(현재 이미지의 파일 경로)로 설정
        imgElement.src = images; //images에 있는 이미지 주소값 넣기

        // <img>태그에 image 클래스를 추가해서 추후 이미지 스타일을 적용할 예정
        imgElement.classList.add('image');
        imageContainer.appendChild(imgElement); //imageContainer의 자식 노드로 설정해서 imgElement 가져오기
    });

    document.getElementById("currentPage").textContent = `페이지 ${page}`;
}

//버튼 업데이트
function updateButtons(){
    //첫 번째 페이지일 경우 이전버튼 클릭 비활성화
    prevButton.disabled = currentPage === 0;

    //마지막 페이지일 경우 이미지가 더이상 없을 때 다음버튼 클릭 비활성화
    nextButton.disabled = (currentPage + 1) * imagesPerpage >= images.length;
                        //(currentPage + 1) * imagesPerpage = 다음 페이지에 해당하는 이미지의 첫번째 인덱스
                        //images.length = images 배열의 길이로, 페이지를 넘어갈 수 있는 이미지의 전체 수
}

//이전 버튼에 대한 클릭 이벤트
prevButton.addEventListener("click",() => {
    if(currentPage>0){ //현재 페이지 번호가 0보다 클 경우에만 실행
        currentPage --; //currentPage = currentPage - 1;
        displayImg(currentPage);
        //이전 버튼이 첫 번째 페이지에서 클릭하게 되면 더 이상 이전버튼으로 가지 못하도록 이전버튼 비활성화
        updateButtons();
    }
});

//다음 버튼에 대한 클릭 이벤트
nextButton.addEventListener("click",() => {
    //현재 페이지에서 다음 페이지로 이동할 수 있는지 if조건문 확인
    if((currentPage+1) * imagesPerpage < images.length){
        currentPage++;
        displayImg(currentPage);
        updateButtons();
    }
});

displayImg(currentPage);
updateButtons();