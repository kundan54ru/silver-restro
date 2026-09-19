document.getElementById("year")?.textContent = new Date().getFullYear();
const h=document.querySelector(".hamburger"), nav=document.querySelector(".nav nav");
h?.addEventListener("click",()=>{if(nav.style.display==="flex"){nav.style.display="none"}else{nav.style.display="flex";nav.style.position="absolute";nav.style.top="82px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px";nav.style.background="#fff";nav.style.flexDirection="column";nav.style.alignItems="center";nav.style.borderBottom="1px solid #e6edf3";nav.style.zIndex="10"}});
