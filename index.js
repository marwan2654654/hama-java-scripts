const newWindow = document.createElement("a");
const newTarger = document.createElement("a");

document.body.appendChild(newTarger);
document.body.appendChild(newWindow);

const smartLinckAll = "https://mathspositionuproar.com/aat6tgeyki?key=6a5aecfd1e90e19910ef60f1c046dc2a";
const smartLincksex = "https://mathspositionuproar.com/g2wukktg49?key=ddb0e6026c76eb0841c4956797e4055d";

window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.banneradd').forEach(container => {
        insertBannerAd(container);
    });

    const NativeBanner = document.getElementById("NativeBanner");

    if(NativeBanner){

        const containerNative = document.createElement('div');
        containerNative.id = 'container-b6c2c98f1fd9e6b002e8d71027098226';

        const natScript = document.createElement('script');
        natScript.src = "https://pl28225183.effectivegatecpm.com/b6c2c98f1fd9e6b002e8d71027098226/invoke.js";
        natScript.async = true;
        natScript.setAttribute("data-cfasync", "false");

        NativeBanner.appendChild(containerNative);
        NativeBanner.appendChild(natScript);
    }

});


function insertBannerAd(container){

    const outer = document.createElement("div");
    outer.style.display = "flex";
    outer.style.justifyContent = "center";
    outer.style.width = "100%";

    const inner = document.createElement("div");
    inner.style.borderRadius = "5px";
    inner.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.25)";
    inner.style.overflow = "hidden";
    inner.style.width = "320px";
    inner.style.height = "50px";

    window.atOptions = {
        'key' : 'bf82d08b4cfbca89197fb5aa8eab981e',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.highperformanceformat.com/bf82d08b4cfbca89197fb5aa8eab981e/invoke.js";
    script.async = true;

    inner.appendChild(script);
    outer.appendChild(inner);
    container.appendChild(outer);
}

function getWindowSmartLinck(target){

    newTarger.href = target;
    newTarger.target = "_blank";
    newTarger.style.display = "none";

    let randomChise = Math.floor(Math.random() * 2);
    newWindow.href = randomChise === 0 ? smartLinckAll : smartLincksex;

    newWindow.target = "_blank";
    newWindow.style.display = "none";

    newTarger.click();
    setTimeout(() => newWindow.click(), 150);
}

console.log("Ads System Loaded Successfully ✅");