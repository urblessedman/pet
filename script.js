// 1. 데이터베이스 (16종 확장판)
const dogs = [
  { name: "핵인싸 골든 리트리버", img: "https://i.imgur.com/gK8eP3R.png", traits: [10, 8, 10], tag: "#천사견", desc: "사람을 너무 좋아하는 당신과 긍정왕 리트리버는 환상의 짝꿍입니다! 털 빠짐과 활동량이 많아 넓은 공간이 필요합니다.", health: "고관절 이형성증 및 피부질환 주의" },
  { name: "똑쟁이 토이 푸들", img: "https://i.imgur.com/rN5hP1A.png", traits: [9, 3, 5], tag: "#지능1위", desc: "섬세하고 똑똑한 당신에게 딱! 털 빠짐이 적어 아파트 생활에 최적화되어 있습니다. 눈치가 빨라 교감하는 재미가 최고!", health: "슬개골 탈구 및 외이염 주의" },
  { name: "시크한 시바견", img: "https://i.imgur.com/1G2jK0L.png", traits: [2, 5, 6], tag: "#밀당고수", desc: "독립적인 당신과 잘 맞아요. 서로의 영역을 존중하며 쿨한 동거가 가능합니다. 단, 엄청난 털 빠짐은 각오하세요!", health: "아토피 피부염 및 알레르기 주의" },
  { name: "깨발랄 비글", img: "https://i.imgur.com/7b7fQ8g.png", traits: [9, 6, 10], tag: "#에너지왕", desc: "지루한 건 딱 질색인 당신! 비글의 넘치는 에너지를 감당할 수 있는 유일한 분이시군요. 매일이 시트콤입니다.", health: "비만 및 귀 염증(외이염) 주의" },
  { name: "솜사탕 비숑", img: "https://i.imgur.com/2K1zT8P.png", traits: [9, 4, 7], tag: "#힐링견", desc: "다정다감한 성격의 당신. 비숑의 폭풍 애교에 매일 녹아내릴 거예요. 털 관리에 정성을 쏟을 준비만 하시면 됩니다!", health: "백내장 및 슬개골 탈구 주의" },
  { name: "작은 거인 치와와", img: "https://i.imgur.com/X4y2hW5.png", traits: [6, 1, 3], tag: "#내사랑", desc: "내 사람 챙기기를 좋아하는 당신. 치와와는 질투가 많아 당신만을 바라볼 거예요. 좁은 실내에서도 키우기 좋습니다.", health: "치아 관리 및 두개골 질환 주의" },
  { name: "엉뚱매력 웰시코기", img: "https://i.imgur.com/j1xG7tP.png", traits: [8, 6, 9], tag: "#식탐왕", desc: "먹는 것과 노는 것을 좋아하는 당신! 코기와 함께 맛집 투어도 하고 산책도 하며 즐거운 일상을 보낼 수 있어요.", health: "허리 디스크(IVDD) 및 비만 주의" },
  { name: "우아한 몰티즈", img: "https://i.imgur.com/b9J3E6t.png", traits: [8, 2, 4], tag: "#국민반려견", desc: "집에서 쉬는 걸 좋아하는 당신. 작고 하얀 몰티즈는 최고의 룸메이트입니다. 참지 않는 성격이니 오냐오냐는 금물!", health: "유루증(눈물자국) 및 심장질환 주의" },
  { name: "카리스마 허스키", img: "https://i.imgur.com/M6L7cRk.png", traits: [5, 9, 10], tag: "#엉뚱함", desc: "자유로운 영혼의 소유자! 허스키의 엉뚱함과 대화하는 듯한 하울링이 당신의 삶을 지루하지 않게 해줄 거예요.", health: "안구 질환 및 고관절 주의" },
  { name: "천재견 보더콜리", img: "https://i.imgur.com/l4Z2e1G.png", traits: [7, 8, 10], tag: "#워커홀릭", desc: "성취욕이 강하고 활동적인 당신. 보더콜리와 함께 프리스비나 어질리티를 도전해보세요. 최고의 파트너가 될 겁니다.", health: "관절 관리 및 결막염 주의" },
  { name: "느긋한 시츄", img: "https://i.imgur.com/o5X1z7U.png", traits: [5, 2, 2], tag: "#평화주의자", desc: "여유롭고 느긋한 성격의 당신. 짖지 않고 얌전한 시츄와 함께 조용하고 평화로운 힐링 라이프를 즐겨보세요.", health: "안구 건조증 및 호흡기 질환 주의" },
  { name: "개성파 프렌치불독", img: "https://i.imgur.com/sY9X2bY.png", traits: [6, 4, 4], tag: "#볼매", desc: "유니크한 매력을 알아보는 당신. 무뚝뚝해 보이지만 알고 보면 정이 많은 불독과 깊은 우정을 쌓을 수 있어요.", health: "단두종 호흡기 증후군 및 피부병 주의" },
  { name: "앙큼상큼 포메라니안", img: "https://i.imgur.com/X4y2hW5.png", traits: [7, 2, 4], tag: "#인형미모", desc: "작지만 용감하고 자기애가 강한 포메! 화려한 털 관리와 앙칼진 성격을 받아줄 수 있는 당신에게 추천합니다.", health: "슬개골 탈구 및 골절 주의" },
  { name: "용감한 닥스훈트", img: "https://i.imgur.com/7b7fQ8g.png", traits: [8, 3, 6], tag: "#숏다리", desc: "호기심 많고 고집 센 사냥개 본능! 닥스훈트의 고집을 귀엽게 봐줄 수 있는 인내심 많은 당신과 잘 맞습니다.", health: "허리 디스크 및 비만 주의" },
  { name: "요정 요크셔 테리어", img: "https://i.imgur.com/rN5hP1A.png", traits: [8, 2, 3], tag: "#움직이는보석", desc: "화려한 털과 도도한 성격의 요키. 주인에게는 애교쟁이지만 낯선 이에게는 까칠한 매력이 있죠. 털 관리는 필수!", health: "기관지 협착 및 치아 질환 주의" },
  { name: "미소천사 사모예드", img: "https://i.imgur.com/gK8eP3R.png", traits: [9, 9, 9], tag: "#솜사탕", desc: "항상 웃고 있는 얼굴의 사모예드! 엄청난 털 빠짐과 활동량을 감당할 수 있다면, 세상에서 가장 행복한 반려견이 됩니다.", health: "고관절 및 당뇨병 주의" }
];

// 2. 질문지 (12문항)
const questions = [
  { cat: "🏠 거주 환경", q: "현재 거주하고 계신 주거 형태는?", a: "원룸/오피스텔/아파트 (실내)", b: "마당이 있는 주택/넓은 실내", impact: [0, -2, 0] },
  { cat: "❤️ 성격 매칭", q: "주말 아침, 이상적인 휴식 방법은?", a: "이불 밖은 위험해.. 집콕 힐링", b: "날씨 좋은데 무조건 나가야지!", impact: [0, 0, 3] },
  { cat: "🧹 털 관리", q: "검은 옷에 하얀 강아지 털이 묻는다면?", a: "으악 절대 싫어! 돌돌이 필수.", b: "강아지 키우면 당연한 거지. 괜찮다.", impact: [0, -1, 0] },
  { cat: "🤝 관계성", q: "강아지와의 관계, 당신의 로망은?", a: "나만 바라보는 껌딱지 (애교)", b: "서로 사생활 존중하는 룸메이트 (독립)", impact: [-3, 0, 0] },
  { cat: "⏰ 산책 시간", q: "하루에 강아지 산책, 얼마나 가능하세요?", a: "바빠서 30분 내외가 한계..", b: "1시간 이상 매일 가능!", impact: [0, 0, 2] },
  { cat: "🗣️ 사회성", q: "산책 중 낯선 사람이 말을 건다면?", a: "어색하게 웃고 자리를 피한다.", b: "오! 안녕하세요! 금방 수다를 떤다.", impact: [2, 0, 0] },
  { cat: "💰 경제력", q: "대형견은 병원비/식비가 소형견의 3배입니다.", a: "현실적으로 부담스럽다.", b: "상관없다. 든든한 게 좋다.", impact: [0, -2, 0] },
  { cat: "🛁 관리 난이도", q: "매일 빗질하고 눈물자국 닦아주는 것, 자신 있나요?", a: "솔직히 좀 귀찮을 것 같다.", b: "내 강아지 예뻐지는 건데 당연하지!", impact: [0, -1, 0] },
  { cat: "🎓 훈련", q: "강아지가 말을 안 듣고 고집을 부린다면?", a: "어휴.. 좀 답답할 것 같다.", b: "단호하게 훈육하거나 전문가를 부른다.", impact: [0, 0, 1] },
  { cat: "🔊 짖음 소음", q: "이웃집 소음 민원이 걱정되시나요?", a: "네, 방음이 잘 안돼서 조용해야 해요.", b: "주택이라 좀 짖어도 괜찮아요.", impact: [0, -1, 0] },
  { cat: "🦠 위생", q: "강아지가 내 침대에 올라와서 자는 건?", a: "절대 안됨. 잠자리는 분리!", b: "너무 좋아! 껴안고 잘래.", impact: [-1, 0, 0] },
  { cat: "✈️ 분리불안", q: "집을 비우는 시간이 하루에 얼마나 되나요?", a: "8시간 이상 (직장인)", b: "거의 집에 있거나 재택근무", impact: [0, 0, -1] }
];

let qIdx = 0;
let userScore = [5, 5, 3]; 
let currentDog = null;

function scrollToTop() { window.scrollTo(0, 0); }

function startTest() {
  document.querySelector('#screen-start').classList.remove('active');
  document.querySelector('#screen-question').classList.add('active');
  scrollToTop();
  loadQuestion();
}

function loadQuestion() {
  const q = questions[qIdx];
  document.getElementById('q-idx').innerText = qIdx + 1;
  document.getElementById('q-cat').innerText = q.cat;
  document.getElementById('q-text').innerText = q.q;
  document.getElementById('ans-a').innerText = q.a;
  document.getElementById('ans-b').innerText = q.b;
  document.getElementById('progress').style.width = ((qIdx) / questions.length * 100) + "%";
}

function nextQuestion(choice) {
  const impact = questions[qIdx].impact;
  if (choice === 0) {
    userScore[0] -= impact[0]; userScore[1] += impact[1]; userScore[2] -= impact[2];
  } else {
    userScore[0] += impact[0]; userScore[1] -= impact[1]; userScore[2] += impact[2];
  }
  qIdx++;
  scrollToTop();
  if (qIdx < questions.length) loadQuestion();
  else showLoading();
}

function showLoading() {
  document.querySelector('#screen-question').classList.remove('active');
  document.querySelector('#screen-loading').classList.add('active');
  scrollToTop();
  
  const msgs = ["🏠 거주 환경 분석 중...", "🧬 성향 데이터 대조 중...", "🏥 유전적 건강 체크 중...", "✨ 최종 매칭 완료!"];
  let i = 0;
  const textInterval = setInterval(() => {
    if(i < msgs.length) document.getElementById('load-msg').innerText = msgs[i++];
  }, 800);

  setTimeout(() => {
    clearInterval(textInterval);
    calculateResult();
  }, 3200);
}

function calculateResult() {
  let bestDog = dogs[0];
  let minDiff = 999;

  dogs.forEach(dog => {
    let diff = Math.abs(userScore[0] - dog.traits[0]) * 1.0 +
               Math.abs(userScore[1] - dog.traits[1]) * 1.5 + 
               Math.abs(userScore[2] - dog.traits[2]) * 1.2;
    if (diff < minDiff) { minDiff = diff; bestDog = dog; }
  });
  currentDog = bestDog;

  let matchScore = Math.floor((1 - (minDiff / 25)) * 100);
  if (matchScore > 98) matchScore = 98; if (matchScore < 70) matchScore = 70;

  document.getElementById('res-name').innerText = bestDog.name;
  document.getElementById('res-img').src = bestDog.img; 
  document.getElementById('res-desc').innerText = bestDog.desc;
  document.getElementById('res-tag').innerText = bestDog.tag;
  document.getElementById('match-percent').innerText = matchScore; 
  document.getElementById('res-health').innerText = bestDog.health;
  document.getElementById('ins-btn-text').innerText = bestDog.name.split(' ').pop() + " 보험료 10초 확인 >";

  window.requestAnimationFrame(() => {
    document.getElementById('score-chem').style.width = (bestDog.traits[0] * 10) + "%";
    document.getElementById('score-env').style.width = (bestDog.traits[1] * 10) + "%";
    document.getElementById('score-energy').style.width = (bestDog.traits[2] * 10) + "%";
  });

  document.querySelector('#screen-loading').classList.remove('active');
  document.querySelector('#screen-result').classList.add('active');
  scrollToTop();
  
  // Confetti Effect
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

function shareFinalResult() {
    if (!currentDog) return;
    const shareData = {
        title: `나의 운명적 반려견은 [${currentDog.name}]!`,
        text: `나에게 딱 맞는 강아지는 누구일까요? 지금 테스트해보세요!`,
        url: window.location.href,
    };
    if (navigator.share) {
        navigator.share(shareData).catch(console.error);
    } else {
        navigator.clipboard.writeText(shareData.title + '\n' + shareData.url).then(() => {
            alert("🔗 링크가 복사되었습니다!");
        });
    }
}

function openModal(type) {
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const overlay = document.getElementById('modal-overlay');
  if (type === 'terms') {
    title.innerText = "이용약관"; body.innerText = "본 서비스는 재미를 위한 심리 테스트입니다. 입양 결정은 신중하게 하세요.";
  } else {
    title.innerText = "개인정보처리방침"; body.innerText = "개인정보를 저장하지 않습니다. 쿠키는 광고 및 분석용으로만 사용됩니다.";
  }
  overlay.style.display = 'flex';
}

function closeModal(e) {
  if (!e || e.target.id === 'modal-overlay' || e.target.className === 'modal-close') {
    document.getElementById('modal-overlay').style.display = 'none';
  }
}
