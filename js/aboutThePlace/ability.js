{
  const abilityNavItems = document.querySelectorAll(".ability-nav-item");
  const abilityMainImg = document.getElementById("abilityMainImg");
  const abilityTitleEl = document.getElementById("abilitySubtitle");
  const abilityDescEl = document.getElementById("abilityText");

  const abilityDataList = [
    {
      t: "١- هيكل الصفحة – HTML",
      d: " القدرة الأساسية لكل مطوّر. تشكّل البنية العظمية للموقع وتمنح الفكرة جسدها الأول. دونها، لا وجود لأي واجهة يمكن بناؤها أو تزيينها. ",
      i: "./css/images/قدرات التخصصات/الصور اللي بتتبدل حسب الايكون/img-html.jpeg",
    },
    {
      t: "٢- تناغم العناصر – CSS",
      d: "تمنح الحياة للشكل وتزرع الجمال في كل تفصيلة. تضبط الألوان والحركات والمسافات لتجعل التجربة مرئية وسلسة. السلاح المفضل لإظهار الشخصية والهوية."
      ,
      i: "./css/images/قدرات التخصصات/الصور اللي بتتبدل حسب الايكون/img-css.jpeg",
    },
    {
      t: "٣- نبض التفاعل – JS",
      d: "يطلق الحياة في الصفحة ويمنحها ذكاءً وسرعة استجابة. كل حدث ونقرة وحركة تنبع من هذه اللغة التي تُمكّن مطور الويب من التحكم في كل شيء."
      ,
      i: "./css/images/قدرات التخصصات/الصور اللي بتتبدل حسب الايكون/img-js.jpeg",
    },
    {
      t: "٤- العقل الديناميكي – React",
      d: "قدرة متقدمة تُمكّنك من بناء واجهات ضخمة وقابلة للتفاعل بسهولة. تنسّق المكونات بذكاء وتدير تدفق البيانات بسلاسة، كأنك تتحكم في شبكة من العقول الصغيرة المتصلة."  ,
      i: "./css/images/قدرات التخصصات/الصور اللي بتتبدل حسب الايكون/img-react.jpeg",
    },
    {
      t: "٥- ذاكرة البيانات – MongoDB",
      d:"تمنح موقعك القدرة على التذكّر. تخزن المعلومات وتستدعيها بمرونة وسرعة، لتجعل المشاريع قابلة للنمو بلا حدود. إنها قلب النظام النابض بالبيانات.",
      i: "./css/images/قدرات التخصصات/الصور اللي بتتبدل حسب الايكون/img-mangoDB.jpeg",
    },
  ];

  let currentIdx = 0;
  let autoPlayTimer;

  function updateDisplay(index) {
    if (!abilityNavItems[index]) return;

    abilityNavItems.forEach((item) => item.classList.remove("active"));
    abilityNavItems[index].classList.add("active");

    if (abilityMainImg) {
      abilityMainImg.style.opacity = 0;
      setTimeout(() => {
        abilityMainImg.src = abilityDataList[index].i;
        abilityTitleEl.innerText = abilityDataList[index].t;
        abilityDescEl.innerText = abilityDataList[index].d;
        abilityMainImg.style.opacity = 1;
      }, 300);
    }
    currentIdx = index;
  }

  abilityNavItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
      updateDisplay(idx);
      resetAutoPlay();
    });
  });

  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      currentIdx = (currentIdx + 1) % abilityDataList.length;
      updateDisplay(currentIdx);
    }, 5000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  startAutoPlay();
}
