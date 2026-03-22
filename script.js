
let imgs = ["assets/التخصصات/ai.jpeg","assets/التخصصات/back-end.jpeg","assets/التخصصات/ux.jpeg","assets/التخصصات/webb.jpeg"]

const div = document.createElement("div");
const header = document.createElement("header");
for (const imgx of imgs) {

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = imgx;
    img.alt = "صورة توضيحية";
    img.width = 300;
    img.height = 400;

    const caption = document.createElement("figcaption");
    caption.textContent = "وصف الصورة هنا";

    figure.appendChild(img);
    figure.appendChild(caption);
    div.appendChild(figure);
    

}   
header.appendChild(div);
document.body.appendChild(header);
