//canvas do grayscale
var canvasAriranha = document.getElementById("ariranha-original");
var ctxAriOri = canvasAriranha.getContext("2d");

var canvasAriranhaPB = document.getElementById("ariranha-preto-branco");
var ctxAriPB = canvasAriranhaPB.getContext("2d");

var AriOri = new Image();
var AriPB = new Image();

//protocolos chatos
AriOri.crossOrigin = '';
AriPB.crossOrigin = '';
	
AriOri.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/edge-detection/master/docs/imgs/ariranha.jpg';
AriOri.onload = function(){
	//exibindo imagens
	ctxAriOri.drawImage(AriOri, 0, 0);
	ctxAriPB.drawImage(AriOri, 0, 0);
	

	var imgDataOut = ctxAriOri.getImageData(0, 0, 360, 490);
	var dataCopy = new Uint8ClampedArray(imgDataOut.data);
	var height = imgDataOut.height;
	var width = imgDataOut.width;
	
	//função de grayscale	
	document.getElementById("bt-grayscale").addEventListener("click", function grayscale(){
		//média dos 3 canais
		for (let i = 0; i < imgDataOut.data.length; i += 4){
			aux = (dataCopy[i] + dataCopy[i+1] + dataCopy[i+2])/3;
			imgDataOut.data[i] = aux;
			imgDataOut.data[i+1] = aux;
			imgDataOut.data[i+2] = aux;
		}
		ctxAriPB.putImageData(imgDataOut, 0, 0);
	});
	
	//função para recuperar
	document.getElementById("btr-grayscale").addEventListener("click", function recover(){
		//retornando para 
		imgDataOut.data.set(dataCopy);
		ctxAriPB.putImageData(imgDataOut, 0, 0);
	});
};

//canvas do gaussian
var canvasAriranha2 = document.getElementById("ariranha-preto-branco2");
var ctxAriOri2 = canvasAriranha2.getContext("2d");

var canvasAriranhaG = document.getElementById("ariranha-gaussian");
var ctxAriG = canvasAriranhaG.getContext("2d");

var AriOri2 = new Image();
var AriG = new Image();

//protocolos chatos
AriOri2.crossOrigin = '';
AriG.crossOrigin = '';
	
AriOri2.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/edge-detection/master/docs/imgs/ariranha-pb.jpg';
AriOri2.onload = function(){
	//exibindo imagens
	ctxAriOri2.drawImage(AriOri2, 0, 0);
	ctxAriG.drawImage(AriOri2, 0, 0);
	

	var imgDataOut = ctxAriOri2.getImageData(0, 0, 360, 490);
	var dataCopy = new Uint8ClampedArray(imgDataOut.data);
	var height = imgDataOut.height;
	var width = imgDataOut.width;
	
	//função de gaussian	
	document.getElementById("bt-gaussian").addEventListener("click", function gaussian(){
		//média ponderada com os pesos gaussianos
		for (let i = 0; i < imgDataOut.data.length; i += 4){			
				aux = (41* dataCopy[i]
				+ 1*(dataCopy[i + (-8) + (-4*width*2)] || dataCopy[i])
				+ 4*(dataCopy[i + (-4) + (-4*width*2)] || dataCopy[i])
				+ 7*(dataCopy[i + (0) + (-4*width*2)] || dataCopy[i])
				+ 4*(dataCopy[i + (4) + (-4*width*2)] || dataCopy[i])
				+ 1*(dataCopy[i + (8) + (-4*width*2)] || dataCopy[i])
				+ 4*(dataCopy[i + (-8) + (-4*width)] || dataCopy[i])
				+ 16*(dataCopy[i + (-4) + (-4*width)] || dataCopy[i])
				+ 26*(dataCopy[i + (0) + (-4*width)] || dataCopy[i])
				+ 16*(dataCopy[i + (4) + (-4*width)] || dataCopy[i])
				+ 4*(dataCopy[i + (8) + (-4*width)] || dataCopy[i])
				+ 7*(dataCopy[i + (-8)] || dataCopy[i])
				+ 26*(dataCopy[i + (-4)] || dataCopy[i])
				+ 26*(dataCopy[i + (4)] || dataCopy[i])
				+ 7*(dataCopy[i + (8)] || dataCopy[i])
				+ 1*(dataCopy[i + (-8) + (4*width*2)] || dataCopy[i])
				+ 4*(dataCopy[i + (-4) + (4*width*2)] || dataCopy[i])
				+ 7*(dataCopy[i + (0) + (4*width*2)] || dataCopy[i])
				+ 4*(dataCopy[i + (4) + (4*width*2)] || dataCopy[i])
				+ 1*(dataCopy[i + (8) + (4*width*2)] || dataCopy[i])
				+ 4*(dataCopy[i + (-8) + (4*width)] || dataCopy[i])
				+ 16*(dataCopy[i + (-4) + (4*width)] || dataCopy[i])
				+ 26*(dataCopy[i + (0) + (4*width)] || dataCopy[i])
				+ 16*(dataCopy[i + (4) + (4*width)] || dataCopy[i])
				+ 4*(dataCopy[i + (8) + (4*width)] || dataCopy[i])
				)/273;
				imgDataOut.data[i] = aux;				
				imgDataOut.data[i+1] = aux;
				imgDataOut.data[i+2] = aux;
			}
		ctxAriG.putImageData(imgDataOut, 0, 0);
	});
	
	//função para recuperar
	document.getElementById("btr-gaussian").addEventListener("click", function recover(){
		//retornando para 
		imgDataOut.data.set(dataCopy);
		ctxAriG.putImageData(imgDataOut, 0, 0);
	});
};

//canvas do sobel
var canvasAriranha3 = document.getElementById("ariranha-gaussian2");
var ctxAriOri3 = canvasAriranha3.getContext("2d");

var canvasAriranhaS = document.getElementById("ariranha-sobel");
var ctxAriS = canvasAriranhaS.getContext("2d");

var AriOri3 = new Image();
var AriS = new Image();
var orient;
//protocolos chatos
AriOri3.crossOrigin = '';
AriS.crossOrigin = '';
	
AriOri3.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/edge-detection/master/docs/imgs/ariranha-g.jpg';
AriOri3.onload = function(){
	//exibindo imagens
	ctxAriOri3.drawImage(AriOri3, 0, 0);
	ctxAriS.drawImage(AriOri3, 0, 0);
	

	var imgDataOut = ctxAriOri3.getImageData(0, 0, 360, 490);
	var dataCopy = new Uint8ClampedArray(imgDataOut.data);
	var height = imgDataOut.height;
	var width = imgDataOut.width;
	orient = new Uint8ClampedArray(imgDataOut.data.length);
	//função de sobel	
	document.getElementById("bt-sobel").addEventListener("click", function sobel(){
		for (let i = 0; i < imgDataOut.data.length; i+= 4){
			//calculo do gradiente no eixo x
			gx = (-1 * (dataCopy[i + (-4) + (-4*width)] || 0) 
				-2 * (dataCopy[i + (-4)] || 0) 
				-1 * (dataCopy[i + (-4) + (4*width)] || 0)
				+1 * (dataCopy[i + (+4) + (-4*width)] || 0)
				+2 * (dataCopy[i + (+4)] || 0)
				+1 * (dataCopy[i + (+4) + (4*width)] || 0));
			//calculo do gradiente no eixo y
			gy =  (-1 * (dataCopy[i + (-4) + (-4*width)] || 0) 
				-2 * (dataCopy[i + (-4*width)] || 0) 
				-1 * (dataCopy[i + (+4) + (-4*width)] || 0)
				+1 * (dataCopy[i + (-4) + (+4*width)] || 0)
				+2 * (dataCopy[i + (+4*width)] || 0)
				+1 * (dataCopy[i + (+4) + (4*width)] || 0));
				
			//passando a magnitude
			imgDataOut.data[i] = Math.sqrt(Math.pow(gx, 2) + Math.pow(gy, 2));				
			imgDataOut.data[i+1] = Math.sqrt(Math.pow(gx, 2) + Math.pow(gy, 2));
			imgDataOut.data[i+2] = Math.sqrt(Math.pow(gx, 2) + Math.pow(gy, 2));
			//passando a orientação
			orient[i] = Math.atan2(gx, gy);
		}
		
		ctxAriS.putImageData(imgDataOut, 0, 0);
		
		//calculando a direção do gradiente
		//círculo trigonométrico dividido em 8 partes
		for (let i = 0; i < imgDataOut.data.length; i+= 4){
			if (orient[i] > -Math.PI/8 &&  orient[i] <= Math.PI/8){orient[i] = 1;}
			else if (orient[i] > Math.PI/8 &&  orient[i] <= Math.PI*3/8){orient[i] = 2;}
			else if (orient[i] > Math.PI*3/8 &&  orient[i] <= Math.PI*5/8){orient[i] = 3;}
			else if (orient[i] > Math.PI*5/8 &&  orient[i] <= Math.PI*7/8){orient[i] = 4;}
			else if (orient[i] > Math.PI*7/8 &&  orient[i] <= -Math.PI*7/8){orient[i] = 5;}
			else if (orient[i] > -Math.PI*7/8 &&  orient[i] <= -Math.PI*5/8){orient[i] = 6;}
			else if (orient[i] > -Math.PI*5/8 &&  orient[i] <= -Math.PI*3/8){orient[i] = 7;}
			else if (orient[i] > -Math.PI*3/8 &&  orient[i] <= -Math.PI/8){orient[i] = 8;}
		}
	});
	
	//função para recuperar
	document.getElementById("btr-sobel").addEventListener("click", function recover(){
		//retornando para 
		imgDataOut.data.set(dataCopy);
		ctxAriS.putImageData(imgDataOut, 0, 0);
	});
};

//canvas da supressão
var canvasAriranha4 = document.getElementById("ariranha-sobel2");
var ctxAriOri4 = canvasAriranha4.getContext("2d");

var canvasAriranhaSP = document.getElementById("ariranha-supre");
var ctxAriSP = canvasAriranhaSP.getContext("2d");

var AriOri4 = new Image();
var AriSP = new Image();

//protocolos chatos
AriOri4.crossOrigin = '';
AriSP.crossOrigin = '';
	
AriOri4.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/edge-detection/master/docs/imgs/ariranha-sp.jpg';
AriOri4.onload = function(){
	//exibindo imagens
	ctxAriOri4.drawImage(AriOri4, 0, 0);
	ctxAriSP.drawImage(AriOri4, 0, 0);
	

	var imgDataOut = ctxAriOri4.getImageData(0, 0, 360, 490);
	var dataCopy = new Uint8ClampedArray(imgDataOut.data);
	var height = imgDataOut.height;
	var width = imgDataOut.width;
	//função de sobel	
	document.getElementById("bt-supre").addEventListener("click", function supression(){
		for (let i = 0; i < imgDataOut.data.length; i+= 4){
			aux = imgDataOut.data[i];
			//comparando o ponto com os outros 2 na direção do gradiente
			if(orient[i] == 1 || orient[i] == 7){
				aux = (aux > dataCopy[i-4] && aux > dataCopy[i+4]) ? aux :0; 
			}
			else if(orient[i] == 2 || orient[i] == 6){
				aux = (aux > dataCopy[i+4-4*width] && aux > dataCopy[i-4+4*width]) ? aux :0; 
			}
			else if(orient[i] == 3 || orient[i] == 5){
				aux = (aux > dataCopy[i - 4*width] && aux > dataCopy[i +4*width]) ? aux :0; 
			}
			else if(orient[i] == 4 || orient[i] == 8){				
				aux = (aux > dataCopy[i -4 -4*width] && aux > dataCopy[i +4 +4*width]) ? aux :0; 
			}
			imgDataOut.data[i] = aux;
			imgDataOut.data[i+1] = aux;
			imgDataOut.data[i+2] = aux;
		}
		
		ctxAriSP.putImageData(imgDataOut, 0, 0);
	});
	
	//função para recuperar
	document.getElementById("btr-supre").addEventListener("click", function recover(){
		//retornando para 
		imgDataOut.data.set(dataCopy);
		ctxAriSP.putImageData(imgDataOut, 0, 0);
	});
};

//canvas do double threshold
var canvasAriranha5 = document.getElementById("ariranha-supre2");
var ctxAriOri5 = canvasAriranha5.getContext("2d");

var canvasAriranhaT = document.getElementById("ariranha-threshold");
var ctxAriT = canvasAriranhaT.getContext("2d");

var AriOri5 = new Image();
var AriT = new Image();

//protocolos chatos
AriOri5.crossOrigin = '';
AriT.crossOrigin = '';
	
AriOri5.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/edge-detection/master/docs/imgs/ariranha-sp2.jpg';
AriOri5.onload = function(){
	//exibindo imagens
	ctxAriOri5.drawImage(AriOri5, 0, 0);
	ctxAriT.drawImage(AriOri5, 0, 0);
	

	var imgDataOut = ctxAriOri5.getImageData(0, 0, 360, 490);
	var dataCopy = new Uint8ClampedArray(imgDataOut.data);
	var height = imgDataOut.height;
	var width = imgDataOut.width;

	//função de threshold
	document.getElementById("bt-threshold").addEventListener("click", function threshold(){
		//listas de indices dos pontos fracos e fortes
		pts_fracos = new Array();
		pts_fortes = new Array();
		for (let i = 0; i < imgDataOut.data.length; i+= 4){
			inputLow = 2.55*document.getElementById("low").value;
			inputHigh = 2.55*document.getElementById("high").value;
			
			//ponto forte
			if (dataCopy[i] > inputHigh){
				aux = 255;
				pts_fortes.push(i);
			//ponto fraco
			}else if (dataCopy[i] < inputHigh && dataCopy[i] > inputLow){
				aux = dataCopy[i];
				pts_fracos.push(i);
			//ponto ignorado
			}else{
				aux = 0;
			}
			imgDataOut.data[i] = aux;
			imgDataOut.data[i+1] = aux;
			imgDataOut.data[i+2] = aux;
		}
		
		//função recursiva que verifica se existe algum ponto fraco
		//ao redor de um ponto forte, se tiver, classifica ele em forte
		//e chama recursivamente
		function hysteresis(ind, recursao){
			//limite de profundidade da recursão
			if(recursao>200){return;}
			else{recursao++}
			if(imgDataOut.data[ind - 4 - 4*width] != 0){
				imgDataOut.data[ind - 4 - 4*width] = 255;
				imgDataOut.data[ind - 4 - 4*width +1] = 255;
				imgDataOut.data[ind - 4 - 4*width +2] = 255;
				hysteresis(ind - 4 - 4*width, recursao);
			}else if(imgDataOut.data[ind - 4*width] != 0){
				imgDataOut.data[ind - 4*width] = 255;
				imgDataOut.data[ind - 4*width +1] = 255;
				imgDataOut.data[ind - 4*width + 2] = 255;
				hysteresis(ind - 4*width, recursao);
			}else if(imgDataOut.data[ind + 4 - 4*width] != 0){
				imgDataOut.data[ind + 4 - 4*width] = 255;
				imgDataOut.data[ind + 4 - 4*width +1] = 255;
				imgDataOut.data[ind + 4 - 4*width + 2] = 255;
				hysteresis(ind + 4 - 4*width, recursao);
			}else if(imgDataOut.data[ind - 4] != 0){
				imgDataOut.data[ind - 4] = 255;
				imgDataOut.data[ind - 4 +1] = 255;
				imgDataOut.data[ind - 4 +2] = 255;
				hysteresis(ind - 4, recursao);
			}else if(imgDataOut.data[ind + 4] != 0){
				imgDataOut.data[ind + 4] = 255;
				imgDataOut.data[ind + 4 + 1] = 255;
				imgDataOut.data[ind + 4 + 2] = 255;
				hysteresis(ind + 4, recursao);
			}else if(imgDataOut.data[ind - 4 + 4*width] != 0){
				imgDataOut.data[ind - 4 + 4*width] = 255;
				imgDataOut.data[ind - 4 + 4*width +1] = 255;
				imgDataOut.data[ind - 4 + 4*width +2] = 255;
				hysteresis(ind - 4 + 4*width, recursao);
			}else if(imgDataOut.data[ind + 4*width] != 0){
				imgDataOut.data[ind + 4*width] = 255;
				imgDataOut.data[ind + 4*width +1] = 255;
				imgDataOut.data[ind + 4*width +2] = 255;
				hysteresis(ind + 4*width, recursao);
			}else if(imgDataOut.data[ind + 4 + 4*width] != 0){
				imgDataOut.data[ind + 4 + 4*width] = 255;
				imgDataOut.data[ind + 4 + 4*width +1] = 255;
				imgDataOut.data[ind + 4 + 4*width +2] = 255;
				hysteresis(ind + 4 + 4*width, recursao);
			}
		}
		
		//inicialização da recursão
		recursao = 0;
		//caminho para todos os pontos fortes
		for (let i = 0; i < pts_fortes.length; i++){
			hysteresis(pts_fortes[i], recursao);
		}
		
		//depois, todos os pontos fracos que sobraram recebem o valor 0
		for (let i = 0; i< pts_fracos.length; i++){
			if(imgDataOut.data[pts_fracos[i]] != 255){
				imgDataOut.data[pts_fracos[i]] = 0;
				imgDataOut.data[pts_fracos[i] +1] = 0;
				imgDataOut.data[pts_fracos[i] +2] = 0;
			}
		}
		ctxAriT.putImageData(imgDataOut, 0, 0);
	});
	
	//função para recuperar
	document.getElementById("btr-threshold").addEventListener("click", function recover(){
		//retornando para 
		imgDataOut.data.set(dataCopy);
		ctxAriT.putImageData(imgDataOut, 0, 0);
	});
};

//canvas do url
var canvasURL1 = document.getElementById("canvas-url1");
var ctxURLOri = canvasURL1.getContext("2d");

var canvasURL2 = document.getElementById("canvas-url2");
var ctxURLOut = canvasURL2.getContext("2d");

var url_box = document.getElementById("url");
var url = url_box.value;

var URLOri = new Image();
var URLOut = new Image();

//protocolos chatos
URLOri.crossOrigin = '';
URLOut.crossOrigin = '';
	
URLOri.src = "https://raw.githubusercontent.com/GiovaniValdrighi/edge-detection/master/docs/imgs/gamba.jpg";
function swap(){
	URLOri.src = document.getElementById("url").value;
}
URLOri.onload = function(){
	//exibindo imagens
	canvasURL1.width = URLOri.width;
	canvasURL1.height = URLOri.height;
	canvasURL2.width = URLOri.width;
	canvasURL2.height = URLOri.height;
	ctxURLOri.drawImage(URLOri, 0, 0, URLOri.width, URLOri.height);
	ctxURLOut.drawImage(URLOri, 0, 0, URLOri.width, URLOri.height);
	

	var imgDataOut = ctxURLOut.getImageData(0, 0, URLOri.width, URLOri.height);
	var dataCopy = new Uint8ClampedArray(imgDataOut.data);
	var height = imgDataOut.height;
	var width = imgDataOut.width;

	//todas as funções
	document.getElementById("bt-url").addEventListener("click", function full_canny(){
		//grayscale
		//média dos 3 canais
		for (let i = 0; i < imgDataOut.data.length; i += 4){
			aux = (dataCopy[i] + dataCopy[i+1] + dataCopy[i+2])/3;
			imgDataOut.data[i] = aux;
		}
		
		new_dataCopy = new Uint8ClampedArray(imgDataOut.data);
		
		//gaussian
		for (let i = 0; i < imgDataOut.data.length; i += 4){
			//média ponderada utilizando os pesos de uma dist. gaussiana
			aux = (41* dataCopy[i]
				+ 1*(new_dataCopy[i + (-8) + (-4*width*2)] || new_dataCopy[i])
				+ 4*(new_dataCopy[i + (-4) + (-4*width*2)] || new_dataCopy[i])
				+ 7*(new_dataCopy[i + (0) + (-4*width*2)] || new_dataCopy[i])
				+ 4*(new_dataCopy[i + (4) + (-4*width*2)] || new_dataCopy[i])
				+ 1*(new_dataCopy[i + (8) + (-4*width*2)] || new_dataCopy[i])
				+ 4*(new_dataCopy[i + (-8) + (-4*width)] || new_dataCopy[i])
				+ 16*(new_dataCopy[i + (-4) + (-4*width)] || new_dataCopy[i])
				+ 26*(new_dataCopy[i + (0) + (-4*width)] || new_dataCopy[i])
				+ 16*(new_dataCopy[i + (4) + (-4*width)] || new_dataCopy[i])
				+ 4*(new_dataCopy[i + (8) + (-4*width)] || new_dataCopy[i])
				+ 7*(new_dataCopy[i + (-8)] || new_dataCopy[i])
				+ 26*(new_dataCopy[i + (-4)] || new_dataCopy[i])
				+ 26*(new_dataCopy[i + (4)] || new_dataCopy[i])
				+ 7*(new_dataCopy[i + (8)] || new_dataCopy[i])
				+ 1*(new_dataCopy[i + (-8) + (4*width*2)] || new_dataCopy[i])
				+ 4*(new_dataCopy[i + (-4) + (4*width*2)] || new_dataCopy[i])
				+ 7*(new_dataCopy[i + (0) + (4*width*2)] || new_dataCopy[i])
				+ 4*(new_dataCopy[i + (4) + (4*width*2)] || new_dataCopy[i])
				+ 1*(new_dataCopy[i + (8) + (4*width*2)] || new_dataCopy[i])
				+ 4*(new_dataCopy[i + (-8) + (4*width)] || new_dataCopy[i])
				+ 16*(new_dataCopy[i + (-4) + (4*width)] || new_dataCopy[i])
				+ 26*(new_dataCopy[i + (0) + (4*width)] || new_dataCopy[i])
				+ 16*(new_dataCopy[i + (4) + (4*width)] || new_dataCopy[i])
				+ 4*(new_dataCopy[i + (8) + (4*width)] || new_dataCopy[i])
				)/273;
			imgDataOut.data[i] = aux;				
		}
		
		new_dataCopy = imgDataOut.data.slice();
		orient = new Uint8ClampedArray(imgDataOut.data);
		
		//sobel
		for (let i = 0; i < imgDataOut.data.length; i+= 4){
			//calculando a derivada no eixo x
			gx = (-1 * (new_dataCopy[i + (-4) + (-4*width)] || 0) 
				-2 * (new_dataCopy[i + (-4)] || 0) 
				-1 * (new_dataCopy[i + (-4) + (4*width)] || 0)
				+1 * (new_dataCopy[i + (+4) + (-4*width)] || 0)
				+2 * (new_dataCopy[i + (+4)] || 0)
				+1 * (new_dataCopy[i + (+4) + (4*width)] || 0));
			//calculando a derivada no eixo y
			gy =  (-1 * (new_dataCopy[i + (-4) + (-4*width)] || 0) 
				-2 * (new_dataCopy[i + (-4*width)] || 0) 
				-1 * (new_dataCopy[i + (+4) + (-4*width)] || 0)
				+1 * (new_dataCopy[i + (-4) + (+4*width)] || 0)
				+2 * (new_dataCopy[i + (+4*width)] || 0)
				+1 * (new_dataCopy[i + (+4) + (4*width)] || 0));
			//passando a magnitude
			imgDataOut.data[i] = Math.sqrt(Math.pow(gx, 2) + Math.pow(gy, 2));
			//passando a orientação
			orient[i] = Math.atan2(gx, gy);
		}
	
		
		//calculando a direção do gradiente
		//o circulo trigonométrico foi dividido em 8 partes
		for (let i = 0; i < imgDataOut.data.length; i+= 4){
			if (orient[i] > -Math.PI/8 &&  orient[i] <= Math.PI/8){orient[i] = 1;}
			else if (orient[i] > Math.PI/8 &&  orient[i] <= Math.PI*3/8){orient[i] = 2;}
			else if (orient[i] > Math.PI*3/8 &&  orient[i] <= Math.PI*5/8){orient[i] = 3;}
			else if (orient[i] > Math.PI*5/8 &&  orient[i] <= Math.PI*7/8){orient[i] = 4;}
			else if (orient[i] > Math.PI*7/8 &&  orient[i] <= -Math.PI*7/8){orient[i] = 5;}
			else if (orient[i] > -Math.PI*7/8 &&  orient[i] <= -Math.PI*5/8){orient[i] = 6;}
			else if (orient[i] > -Math.PI*5/8 &&  orient[i] <= -Math.PI*3/8){orient[i] = 7;}
			else if (orient[i] > -Math.PI*3/8 &&  orient[i] <= -Math.PI/8){orient[i] = 8;}
		}
		
		new_dataCopy = imgDataOut.data.slice();
		
		//non-max supression
		//verifico se o ponto é maior do que os dois pontos da direção do gradiente dele
		for (let i = 0; i < imgDataOut.data.length; i+= 4){
			aux = imgDataOut.data[i];
			if(orient[i] == 1 || orient[i] == 7){
				aux = (aux > new_dataCopy[i-4] && aux > new_dataCopy[i+4]) ? aux :0; 
			}
			else if(orient[i] == 2 || orient[i] == 6){
				aux = (aux > new_dataCopy[i+4-4*width] && aux > new_dataCopy[i-4+4*width]) ? aux :0; 
			}
			else if(orient[i] == 3 || orient[i] == 5){
				aux = (aux > new_dataCopy[i - 4*width] && aux > new_dataCopy[i +4*width]) ? aux :0; 
			}
			else if(orient[i] == 4 || orient[i] == 8){				
				aux = (aux > new_dataCopy[i -4 -4*width] && aux > new_dataCopy[i +4 +4*width]) ? aux :0; 
			}
			imgDataOut.data[i] = aux;
		}
		
		new_dataCopy = imgDataOut.data.slice();
		
		//função de threshold
		//vetores de indices de pontos fortes e fracos
		pts_fracos = new Array();
		pts_fortes = new Array();
		inputLow = 2.55*document.getElementById("low-url").value;
		inputHigh = 2.55*document.getElementById("high-url").value;	
		for (let i = 0; i < imgDataOut.data.length; i+= 4){	
			//ponto forte
			if (new_dataCopy[i] > inputHigh){
				aux = 255;
				pts_fortes.push(i);
			//ponto fraco
			}else if (new_dataCopy[i] < inputHigh && new_dataCopy[i] > inputLow){
				aux = new_dataCopy[i];
				pts_fracos.push(i);
			//ponto ignorado
			}else{
				aux = 0;
			}
			imgDataOut.data[i] = aux;
			imgDataOut.data[i+1] = aux;
			imgDataOut.data[i+2] = aux;
		}
		
		
		//funçao recursiva que em cada ponto forte, verifico se existe um ponto fraco ao redor dele
		//se existir, ele passa a ser classificado como forte e é chamado recursivamente
		function hysteresis(ind, recursao){
			//profundidade máxima de recursão
			if(recursao>1000){return;}
			else{recursao++}
			if(imgDataOut.data[ind - 4 - 4*width] != 0 && imgDataOut.data[ind - 4 - 4*width] != 255){
				imgDataOut.data[ind - 4 - 4*width] = 255;
				imgDataOut.data[ind - 4 - 4*width +1] = 255;
				imgDataOut.data[ind - 4 - 4*width +2] = 255;
				hysteresis(ind - 4 - 4*width, recursao);
			}else if(imgDataOut.data[ind - 4*width] != 0 && imgDataOut.data[ind - 4*width] != 255){
				imgDataOut.data[ind - 4*width] = 255;
				imgDataOut.data[ind - 4*width +1] = 255;
				imgDataOut.data[ind - 4*width + 2] = 255;
				hysteresis(ind - 4*width, recursao);
			}else if(imgDataOut.data[ind + 4 - 4*width] != 0 && imgDataOut.data[ind + 4 - 4*width] != 255){
				imgDataOut.data[ind + 4 - 4*width] = 255;
				imgDataOut.data[ind + 4 - 4*width +1] = 255;
				imgDataOut.data[ind + 4 - 4*width + 2] = 255;
				hysteresis(ind + 4 - 4*width, recursao);
			}else if(imgDataOut.data[ind - 4] != 0 && imgDataOut.data[ind - 4] != 0){
				imgDataOut.data[ind - 4] = 255;
				imgDataOut.data[ind - 4 +1] = 255;
				imgDataOut.data[ind - 4 +2] = 255;
				hysteresis(ind - 4, recursao);
			}else if(imgDataOut.data[ind + 4] != 0 && imgDataOut.data[ind + 4] != 255){
				imgDataOut.data[ind + 4] = 255;
				imgDataOut.data[ind + 4 + 1] = 255;
				imgDataOut.data[ind + 4 + 2] = 255;
				hysteresis(ind + 4, recursao);
			}else if(imgDataOut.data[ind - 4 + 4*width] != 0 && imgDataOut.data[ind - 4 + 4*width] != 255){
				imgDataOut.data[ind - 4 + 4*width] = 255;
				imgDataOut.data[ind - 4 + 4*width +1] = 255;
				imgDataOut.data[ind - 4 + 4*width +2] = 255;
				hysteresis(ind - 4 + 4*width, recursao);
			}else if(imgDataOut.data[ind + 4*width] != 0 && imgDataOut.data[ind + 4*width] != 255){
				imgDataOut.data[ind + 4*width] = 255;
				imgDataOut.data[ind + 4*width +1] = 255;
				imgDataOut.data[ind + 4*width +2] = 255;
				hysteresis(ind + 4*width, recursao);
			}else if(imgDataOut.data[ind + 4 + 4*width] != 0 && imgDataOut.data[ind + 4 + 4*width] != 255){
				imgDataOut.data[ind + 4 + 4*width] = 255;
				imgDataOut.data[ind + 4 + 4*width +1] = 255;
				imgDataOut.data[ind + 4 + 4*width +2] = 255;
				hysteresis(ind + 4 + 4*width, recursao);
			}
		}
		
		//inicialização da recursão
		recursao = 0;
		//caminho para cada ponto forte
		for (let i = 0; i < pts_fortes.length; i++){
			hysteresis(pts_fortes[i], recursao);
		}
		
		for (let i = 0; i< pts_fracos.length; i++){
			if(imgDataOut.data[pts_fracos[i]] != 255){
				imgDataOut.data[pts_fracos[i]] = 0;
				imgDataOut.data[pts_fracos[i] +1] = 0;
				imgDataOut.data[pts_fracos[i] +2] = 0;
			}
		}
		
		ctxURLOri.putImageData(imgDataOut, 0, 0);
	});
	
	//função para recuperar
	document.getElementById("btr-url").addEventListener("click", function recover(){
		//retornando para 
		imgDataOut.data.set(dataCopy);
		ctxURLOri.putImageData(imgDataOut, 0, 0);
	});
};