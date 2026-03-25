async function loadPage(page) {
    const contentDiv = document.getElementById('content');
    
    try {
        console.log(`🔍 جاري تحميل: pages/${page}.html`);

        const response = await fetch(`pages/${page}.html`);
        
        if (!response.ok) throw new Error(`الصفحة ${page}.html مش موجودة`);

        const html = await response.text();
        
        // 1. حط الـ HTML أولاً
        contentDiv.innerHTML = html;

        // 2. هنا الحل السحري: نشغل كل الـ <script> اللي جوا الصفحة يدويًا
        const scripts = contentDiv.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            
            // لو الـ script فيه src (زي بتاعك)
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } 
            // لو فيه كود داخلي (inline)
            else {
                newScript.textContent = oldScript.textContent;
            }
            
            // نسخ أي attributes تانية (async, defer, type...)
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });

            // نشيله من الـ DOM عشان ما يتكررش
            oldScript.remove();
            
            // نضيفه في آخر الـ body عشان يشتغل صح
            contentDiv.appendChild(newScript);
        });

        // تحديث الـ URL
        const newUrl = page === 'aboutThePlace' ? '/' : `/${page}`;
        history.pushState({ page }, '', newUrl);

    } catch (error) {
        console.error("❌ Fetch Error:", error);
        contentDiv.innerHTML = `
            <h2 style="color:red; text-align:center; padding:60px;">
                ❌ فشل تحميل الصفحة: ${page}<br>
                <small>${error.message}</small>
            </h2>`;
    }
}

document.querySelectorAll('nav ul li a').forEach(link => {
    console.log(link.dataset.page);
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage(link.dataset.page);
    });


});




window.addEventListener('popstate', (e)=>{
    if(e.state?.page) loadPage(e.state.page);
})