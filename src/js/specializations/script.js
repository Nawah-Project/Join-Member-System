
let imgs = ["../assets/specializations/ai.jpeg","../assets/specializations/back-end.jpeg","../assets/specializations/ux.jpeg","../assets/specializations/webb.jpeg",
    "../assets/specializations/graphic.jpeg"
]
let figcaptions 

const div = document.createElement("div");
const contentDiv = document.getElementById('content');
for (const imgx of imgs) {

    const figure = document.createElement("figure");

    const img = document.createElement("img");

    img.src = imgx;
    console.log(img)
    img.alt = "صورة توضيحية";
    img.width = 300;
    img.height = 400;

    const caption = document.createElement("figcaption");
    caption.textContent = "وصف الصورة هنا";

    figure.appendChild(img);
    figure.appendChild(caption);
    div.appendChild(figure);
    

}   
contentDiv.appendChild(div);
