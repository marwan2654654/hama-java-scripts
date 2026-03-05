const newWindow = document.createElement("a");
const newTarger = document.createElement("a");

let plaseAdd = document.querySelectorAll('.banneradd');
let NativeBanner = document.getElementById('NativeBanner');
let smartLinckAll;
let smartLincksex;

const files = {
    index: "/https://marwan2654654.github.io/hama-java-scripts/data/index.json"
};

document.body.appendChild(newTarger);
document.body.appendChild(newWindow);

fetch(files.index).then(res => res.json()).then(data => CreatAdd(data));
function CreatAdd(data){
    if(!data || !data.SmartlinckSex || !data.smartLinckAll) {console.error('data not defined'); return}


    smartLinckAll = data.smartLinckAll;
    smartLincksex = data.SmartlinckSex;

    if(plaseAdd){
        plaseAdd.forEach(i => {
            i.innerHTML = data.babber;
        });
    }

    if(NativeBanner) NativeBanner.innerHTML = data.NativeBanner;
}

function getWindowSmartLinck(bool = true, target){
    if(!smartLinckAll) return;
    if(!smartLincksex) return;

    newTarger.href = target;
    newTarger.target = "_blank";
    newTarger.style.display = "none";

    let randomChise = parseInt(Math.random() * 2) + 1;
    if(randomChise === 1) newWindow.href = smartLinckAll;
    if(randomChise === 2) newWindow.href = smartLincksex;
    newWindow.style.display = "none";

    newTarger.click();
    setTimeout(() =>newWindow.click(), 100);
}

alert('tis is oky')