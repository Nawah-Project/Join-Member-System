{
    // --- UI Element Selectors ---
    const expNavItems = document.querySelectorAll(".exp-nav-item");
    const expSubtitle = document.getElementById("expSubtitle");
    const expText = document.getElementById("expText");

    // --- Content Repository ---
    const expContent = [
        {
            t: "تخصصك",
            d: "اجعل تخصصك ساحة بطولتك. واجه التحديات، ووسّع قدراتك بالممارسة والتجربة، فكل مشروع تنجزه هو خطوة نحو مستوى أعلى من الإتقان. كلما تعمقت أكثر، ازدادت مهارتك وضوحًا، ورؤيتك نضجًا، وأثرك اتساعًا."
        },
        {
            t: "الخبرة",
            d: "اكسب خبرتك بجهدك الحقيقي. شارك في التحديات، أنجز المهام، تعاون مع الآخرين، واستخلص من كل تجربة درسًا يعزز مسارك. فالمعرفة التي تكتسبها بالممارسة هي أثمن من أي مكسب مؤقت."
        },
        {
            t: "الأدوات",
            d: "طوّر قدراتك بأدواتك الخاصة. من اللغات والمكتبات إلى الأطر والمنصات، كل أداة تتقنها تمنحك بعدًا جديدًا من القوة. كوّن مجموعتك التقنية التي تمكّنك من تحويل الأفكار إلى مشاريع نابضة بالحياة."
        }
    ];

    // --- Tab Switching Logic & Click Event Handling ---
    expNavItems.forEach((item, idx) => {
        item.addEventListener("click", () => {
            // Update Active State for Tabs
            expNavItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            // Trigger Fade-out transition
            expSubtitle.style.opacity = 0;
            expText.style.opacity = 0;

            // Swap content and fade back in after transition delay
            setTimeout(() => {
                expSubtitle.innerText = expContent[idx].t;
                expText.innerText = expContent[idx].d;
                expSubtitle.style.opacity = 1;
                expText.style.opacity = 1;
            }, 300); // Wait for 300ms to ensure smooth transition
        });
    });
}