/**
 * 📢 AdSense 관리 파일 (ads.js)
 * 이 파일에서 광고 ID만 수정하면 사이트 전체의 광고가 업데이트됩니다.
 */

// 1. 구글 애드센스 게시자 ID (웹사이트 전체 공통)
// 예: "ca-pub-1234567890123456"
const GOOGLE_CLIENT_ID = "ca-pub-XXXXXXXXXXXXXXXX"; 

// 2. 광고 단위 ID 설정 (애드센스에서 만든 광고 단위별 ID)
const AD_SLOTS = {
    main_display: "1111111111",   // 시작 화면 하단 (디스플레이 광고)
    loading_rect: "2222222222",   // 로딩 화면 중간 (사각형 광고 - 수익률 높음)
    result_footer: "3333333333"   // 결과 화면 하단 (디스플레이 광고)
};

// ============================================================
// ▼ 아래는 건드리지 않아도 되는 시스템 코드입니다.
// ============================================================

// 애드센스 스크립트 자동 로드
(function() {
    let script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_CLIENT_ID}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();

// 광고 삽입 함수
function injectAd(containerId, slotId, format = "auto") {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`광고 위치를 찾을 수 없습니다: ${containerId}`);
        return;
    }

    // 기존 내용 비우기 (중복 방지)
    container.innerHTML = "";

    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", GOOGLE_CLIENT_ID);
    ins.setAttribute("data-ad-slot", slotId);
    ins.setAttribute("data-ad-format", format);
    ins.setAttribute("data-full-width-responsive", "true");

    container.appendChild(ins);

    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
        console.log(`광고 로드 성공: ${containerId}`);
    } catch (e) {
        console.error("애드센스 로드 실패:", e);
    }
}

// 페이지 로드 완료 후 광고 표시 실행
window.addEventListener('load', () => {
    // 1. 시작 화면 광고
    injectAd("ad-container-main", AD_SLOTS.main_display);
    
    // 2. 로딩 화면 광고 (직사각형 추천)
    injectAd("ad-container-loading", AD_SLOTS.loading_rect, "rectangle");
    
    // 3. 결과 화면 광고
    injectAd("ad-container-result", AD_SLOTS.result_footer);
});
