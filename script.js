function showYear(yearId, element) {
    // 1. 모든 섹션 숨기기
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. 모든 버튼의 active 클래스 제거
    const buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. 클릭한 섹션만 보이기
    const activeContent = document.getElementById(yearId);
    activeContent.classList.add('active');

    // 4. 클릭한 버튼에 active 클래스 추가
    element.classList.add('active');
    
    // 5. 귀여운 로그 출력 (개발자 도구에서 확인 가능)
    console.log(yearId + " 추억 여행 중... ✈️");
}