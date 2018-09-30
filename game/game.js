const canv = document.querySelector("#plansza");

const ctx = canv.getContext('2d');

canv.width = 1000;
canv.height = 500;


const canvWidth = canv.width;
const canvHeight = canv.height;

function table(){
    ctx.fillStyle = '#fff';//fil style koloruje uzywamy tyych samych wartości co w css
    ctx.fillRect(0,0, canvWidth, canvHeight);
}
//fillRect jest właściwością, rysowanie w canvasie opiera sie na osi X pozima(od lewej do prawej)
// i osi Y (od góry do dołu) najpierw x y początek póżniej xy koniec rysowania
// zamiast wpisywać na sztywno wymiar lepiej podać zmienną z wysokością


table()
