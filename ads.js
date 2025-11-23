/**
 * 📢 AdSense 관리 파일 (ads.js)
 * 게시자 ID: ca-pub-5789121095939793
 */

// 1. 구글 애드센스 게시자 ID (업데이트 완료)
const GOOGLE_CLIENT_ID = "ca-pub-5789121095939793"; 

// 2. 광고 단위 ID (나중에 애드센스에서 '디스플레이 광고' 생성 후 ID를 복사해 넣으세요)
const AD_SLOTS = {
    main_display: "1234567890",   // 시작 화면 하단용 ID
    loading_rect: "2345678901",   // 로딩 화면용 (사각형) ID
    result_footer: "3456789012"   // 결과 화면 하단용 ID
};

// ============================================================
// ▼ 시스템 로직 (수정 불필요)
// ============================================================

(function() {
    let script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_CLIENT_ID}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();

function injectAd(containerId, slotId, format = "auto") {
    const container = document.getElementById(containerId);
    if (!container) return;

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
    } catch (e) {
        console.error("Ad error:", e);
    }
}

// 페이지 로드 시 광고 실행
window.addEventListener('load', () => {
    injectAd("ad-container-main", AD_SLOTS.main_display);
    injectAd("ad-container-loading", AD_SLOTS.loading_rect, "rectangle");
    injectAd("ad-container-result", AD_SLOTS.result_footer);
});
