// Abaixo segue todas as referências necessárias dos elementos que iremos necessitar:

var video 				= document.querySelector('#camera-stream'),
	image 				= document.querySelector('#snap'),
	start_camera 		= document.querySelector('#start-camera'),
	controls			= document.querySelector('.controls'),
	take_photo_btn  	= document.querySelector('#take-photo'),
	delete_photo_btn 	= document.querySelector('#delete-photo-btn'),
	download_photo_btn 	= document.querySelector('#download-photo'),
	error_message 		= document.querySelector('#error-message');

// O getUserMedia é usado para manipular a entrada da câmera.
// Alguns navegadores precisam de prefixo para que possamos cobrir todas as opções:

navigator.getMedia = ( navigator.getUserMedia ||
					   navigator.webkitGetUserMedia ||
					   navigator.mozGetUserMedia ||
					   navigator.msGetUserMedia);

if(!navigator.getMedia) {
	displayErrorMessage("Seu browser não tem suporte para o navigator.getUserMedia");
} else {

}




