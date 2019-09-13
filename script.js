//canvas do grayscale
var canvasAriranha = document.getElementById("ariranha-original");
var ctxAriOri = canvasAriranha.getContext("2d");

var canvasAriranhaPB = document.getElementById("ariranha-preto-branco");
var ctxAriPB = canvasAriranhaPB.getContext("2d");

var AriOri = new Image();
var AriPB = new Image();
console.log("Hi");

//protocolos chatos
AriOri.crossOrigin = '';
AriPB.crossOrigin = '';
	
AriOri.src = 'https://i.imgur.com/qH9nYB5.jpg';
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
	
AriOri2.src = 'https://i.imgur.com/ea4jNR6.jpg';
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
		for (let i = 0; i < imgDataOut.data.lenght; i += 4){			
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
		console.log("he");
		ctxAriG.putImageData(imgDataOut, 0, 0);
	});
	
	//função para recuperar
	document.getElementById("btr-gaussian").addEventListener("click", function recover(){
		//retornando para 
		imgDataOut.data.set(dataCopy);
		ctxAriG.putImageData(imgDataOut, 0, 0);
	});
}