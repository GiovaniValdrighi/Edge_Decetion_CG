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
	
AriOri.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/Edge_Decetion_CG/master/ariranha.jpg';
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
	
AriOri2.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/Edge_Decetion_CG/master/ariranha-pb.jpg';
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
	
AriOri3.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/Edge_Decetion_CG/master/ariranha-g.jpg';
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
			gx = (-1 * (dataCopy[i + (-4) + (-4*width)] || 0) 
				-2 * (dataCopy[i + (-4)] || 0) 
				-1 * (dataCopy[i + (-4) + (4*width)] || 0)
				+1 * (dataCopy[i + (+4) + (-4*width)] || 0)
				+2 * (dataCopy[i + (+4)] || 0)
				+1 * (dataCopy[i + (+4) + (4*width)] || 0));
			gy =  (-1 * (dataCopy[i + (-4) + (-4*width)] || 0) 
				-2 * (dataCopy[i + (-4*width)] || 0) 
				-1 * (dataCopy[i + (+4) + (-4*width)] || 0)
				+1 * (dataCopy[i + (-4) + (+4*width)] || 0)
				+2 * (dataCopy[i + (+4*width)] || 0)
				+1 * (dataCopy[i + (+4) + (4*width)] || 0));
			imgDataOut.data[i] = Math.sqrt(Math.pow(gx, 2) + Math.pow(gy, 2));				
			imgDataOut.data[i+1] = Math.sqrt(Math.pow(gx, 2) + Math.pow(gy, 2));
			imgDataOut.data[i+2] = Math.sqrt(Math.pow(gx, 2) + Math.pow(gy, 2));
			orient[i] = Math.atan2(gx, gy);
		}
		
		ctxAriS.putImageData(imgDataOut, 0, 0);
		
		//calculando a direção do gradiente
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
	
AriOri4.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/Edge_Decetion_CG/master/ariranha-sp.jpg';
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

var inputHigh = document.getElementById("high-threshold");
var high = inputHigh.valor;

var AriOri5 = new Image();
var AriT = new Image();

//protocolos chatos
AriOri5.crossOrigin = '';
AriT.crossOrigin = '';
	
AriOri5.src = 'https://raw.githubusercontent.com/GiovaniValdrighi/Edge_Decetion_CG/master/ariranha-sp2.jpg';
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
		console.log("hi");
		for (let i = 0; i < imgDataOut.data.length; i+= 4){
			inputLow = document.getElementById("low").value;
			if (dataCopy[i] < inputLow){
				aux = 0;
			}else{
				aux = dataCopy[i];
			}
			imgDataOut.data[i] = aux;
			imgDataOut.data[i+1] = aux;
			imgDataOut.data[i+2] = aux;
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