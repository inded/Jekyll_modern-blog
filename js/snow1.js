
var no = 25; // Số tuyết

var speed = 10; // Số càng nhỏ tuyết di chuyển(rơi) càng nhanh

var snowflake = "https://trytoforget.github.io/kidtoyshop.github.io/img/effect/snow.png"; // Nơi đây chèn hình bông tuyết

var ns4up = (document.layers) ? 1 : 0; // Bộ duyệt tìm nạp vào

var ie4up = (document.all) ? 1 : 0;

var dx, xp, yp; // tọa độ và những vị trí thay đổi

var am, stx, sty; // Độ rộng và những bước thay đổi

var i, doc_width = 800, doc_height = 600;

if (ns4up) {

doc_width = self.innerWidth;

doc_height = self.innerHeight;

} else if (ie4up) {

doc_width = document.body.clientWidth;

doc_height = document.body.clientHeight;

}

dx = new Array();

xp = new Array();

yp = new Array();

am = new Array();

stx = new Array();

sty = new Array();

for (i = 0; i < no; ++ i) {

dx[i] = 0; // những biến đổi toạ độ tập hợp

xp[i] = Math.random()*(doc_width-50); // tập hợp những thay đổi vị trí

yp[i] = Math.random()*doc_height;

am[i] = Math.random()*20; // tập hợp những thay đổi độ rộng

stx[i] = 0.02 + Math.random()/10; // tập hợp những thay đổi bước

sty[i] = 0.7 + Math.random(); //tập hợp những thay đổi bước

if (ns4up) { // những lớp tập hợp

if (i == 0) {

document.write("<layer name=\"dot"+ i +"\" left=\"15\" ");

document.write("top=\"15\" visibility=\"show\"><img src=\"");

document.write(snowflake + "\" border=\"0\"></layer>");

} else {

document.write("<layer name=\"dot"+ i +"\" left=\"15\" ");

document.write("top=\"15\" visibility=\"show\"><img src=\"");

document.write(snowflake + "\" border=\"0\"></layer>");

}

} else if (ie4up) {

if (i == 0) {

document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");

document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");

document.write("visible; TOP: 15px; LEFT: 15px;\"><img src=\"");

document.write(snowflake + "\" border=\"0\"></div>");

} else {

document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");

document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");

document.write("visible; TOP: 15px; LEFT: 15px;\"><img src=\"");

document.write(snowflake + "\" border=\"0\"></div>");

}

}

}

function snowNS() { // hàm Netscape hoạt cảnh chính

for (i = 0; i < no; ++ i) { // vòng lặp cho mỗi điểm

yp[i] += sty[i];

if (yp[i] > doc_height-50) {

xp[i] = Math.random()*(doc_width-am[i]-30);

yp[i] = 0;

stx[i] = 0.02 + Math.random()/10;

sty[i] = 0.7 + Math.random();

doc_width = self.innerWidth;

doc_height = self.innerHeight;

}

dx[i] += stx[i];

document.layers["dot"+i].top = yp[i];

document.layers["dot"+i].left = xp[i] + am[i]*Math.sin(dx[i]);

}

setTimeout("snowNS()", speed);

}

function snowIE() { // hàm IE hoạt cảnh chính

for (i = 0; i < no; ++ i) { // vòng lặp cho mỗi điểm

yp[i] += sty[i];

if (yp[i] > doc_height-50) {

xp[i] = Math.random()*(doc_width-am[i]-30);

yp[i] = 0;

stx[i] = 0.02 + Math.random()/10;

sty[i] = 0.7 + Math.random();

doc_width = document.body.clientWidth;

doc_height = document.body.clientHeight;

}

dx[i] += stx[i];

document.all["dot"+i].style.pixelTop = yp[i];

document.all["dot"+i].style.pixelLeft = xp[i] + am[i]*Math.sin(dx[i]);

}

setTimeout("snowIE()", speed);

}

if (ns4up) {

snowNS();

} else if (ie4up) {

snowIE();

}
