const specialtiesData = [
   
    {
        title: "تطوير واجهات المستخدم",
        subtitle: "Front-end Developer",
        description: "تحويل التصاميم إلى واقع ملموس باستخدام تقنيات حديثة لضمان تجربة مستخدم سريعة وجذابة بصرياً.",
        image: "./css/images/التخصصات/img-1.jpeg"
    },
     
    {
        title: "الأمن السيبراني",
        subtitle: "حارس الأنظمة ومهندس الدفاعات الرقمية",
        description: "يمتلك مهارات كشف الثغرات قبل أن تُستغل، وتحليل الهجمات قبل أن تتكرر. يدير بدقة عالية التوازن بين الفوضى والنظام ليبقى العالم الرقمي آمناً.",
        image: "./css/images/التخصصات/img-2.jpeg"
    },
    {
        title: "تطوير الأنظمة الخلفية",
        subtitle: "Back-end Developer",
        description: "بناء وإدارة قواعد البيانات والسيرفرات لضمان أداء المواقع واستقرارها بشكل كامل وأمان البيانات.",
        image: "./css/images/التخصصات/img-3.jpeg"
    },
    {
        title: "تطوير تطبيقات الموبايل",
        subtitle: "Mobile App Developer",
        description: "إنشاء تطبيقات ذكية تعمل بسلاسة على أنظمة Android و iOS لتلبية احتياجات المستخدمين في كل مكان.",
        image: "./css/images/التخصصات/img-4.jpeg"
    },
    {
        title: "تحليل البيانات",
        subtitle: "Data Analysis",
        description: "استخراج الأنماط من البيانات الضخمة لمساعدة الشركات على اتخاذ قرارات دقيقة مبنية على حقائق رقمية.",
        image: "./css/images/التخصصات/img-5.jpeg"
    },
    {
        title: "تطوير الألعاب",
        subtitle: "Game Development",
        description: "خلق عوالم افتراضية وتجارب ترفيهية غامرة باستخدام محركات متطورة لتقديم ألعاب احترافية.",
        image: "./css/images/التخصصات/img-6.jpeg"
    },
    {
        title: "الذكاء الاصطناعي",
        subtitle: "AI & Machine Learning",
        description: "بناء خوارزميات ذكية قادرة على التعلم والتنبؤ وحل المشكلات المعقدة بشكل آلي ومبتكر.",
        image: "./css/images/التخصصات/img-7.jpeg"
    },
    {
        title: "الحوسبة السحابية",
        subtitle: "Cloud Computing",
        description: "إدارة البنية التحتية السحابية لضمان توافر الخدمات الرقمية في أي وقت ومن أي مكان في العالم.",
        image: "./css/images/التخصصات/img-8.jpeg"
    }
];

const navItems = document.querySelectorAll('.nav-item');
const mainImg = document.getElementById('mainSpecialtyImage');
const mainTitle = document.getElementById('specialtyTitle');
const mainSubtitle = document.getElementById('specialtySubtitle');
const mainDesc = document.getElementById('specialtyDesc');

let currentIndex = 0;
let autoSwapTimer;

function updateDisplay(index) {
    navItems.forEach(item => item.classList.remove('active'));
    navItems[index].classList.add('active');

    mainImg.style.animation = 'none';
    mainImg.offsetHeight; 
    mainImg.style.animation = 'fadeIn 0.5s ease forwards';

    mainImg.src = specialtiesData[index].image;
    mainTitle.textContent = specialtiesData[index].title;
    mainSubtitle.textContent = specialtiesData[index].subtitle;
    mainDesc.textContent = specialtiesData[index].description;
}

function startTimer() {
    autoSwapTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % specialtiesData.length;
        updateDisplay(currentIndex);
    }, 5000); // 5 seconds
}

function resetTimer() {
    clearInterval(autoSwapTimer);
    startTimer();
}

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateDisplay(currentIndex);
        resetTimer();
    });
});

// Initialization
startTimer();