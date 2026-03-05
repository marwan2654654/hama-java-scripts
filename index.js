const newWindow = document.createElement("a");
const newTarger = document.createElement("a");
const scriptNatefBar = "//pl28225183.effectivegatecpm.com/b6c2c98f1fd9e6b002e8d71027098226/invoke.js";

let plaseAdd = document.querySelectorAll('.banneradd');
let NativeBanner = document.getElementById('NativeBanner');
let smartLinckAll;
let smartLincksex;

const files = {
    index: "https://marwan2654654.github.io/hama-java-scripts/data/index.json"
};

document.body.appendChild(newTarger);
document.body.appendChild(newWindow);

fetch(files.index)
.then(res => res.json())
.then(data => CreatAdd(data))
.catch(err => console.error("Fetch Error:", err));

function CreatAdd(data){

    if(!data || !data.SmartlinckSex || !data.smartLinckAll){
        console.error('Data not defined correctly');
        return;
    }

    smartLinckAll = data.smartLinckAll;
    smartLincksex = data.SmartlinckSex;

    if(plaseAdd){
        plaseAdd.forEach(i => {
            i.innerHTML = data.babber;
        });
    }

    if(NativeBanner){
        const natcreat = document.createElement('script');
        natcreat.src = scriptNatefBar;
        natcreat.async = "async";
        natcreat.setAttribute("data-cfasync", false);

        const containernatevebar = document.createElement('div');
        containernatevebar.id = 'container-b6c2c98f1fd9e6b002e8d71027098226';

        NativeBanner.appendChild(natcreat);
        NativeBanner.appendChild(containernatevebar);
    }

    loadAdScript();
}

function loadAdScript(){

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

    document.getElementById("ad-slot").appendChild(script);
}

function getWindowSmartLinck(target){

    if(!smartLinckAll || !smartLincksex) return;

    newTarger.href = target;
    newTarger.target = "_blank";
    newTarger.style.display = "none";

    let randomChise = parseInt(Math.random() * 2) + 1;

    if(randomChise === 1){
        newWindow.href = smartLinckAll;
    }else{
        newWindow.href = smartLincksex;
    }

    newWindow.target = "_blank";
    newWindow.style.display = "none";

    newTarger.click();
    setTimeout(() => newWindow.click(), 150);
}

console.log("Ads Script Loaded Successfully");