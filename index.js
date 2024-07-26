import ImageEditor from './src/imageEditor.js'

const imageEditor = new ImageEditor('imageCanvas')

const fileInput = document.querySelector('#fileUpload')
fileInput.addEventListener('change', (e) => {
	imageEditor.openImage(e.target.files[0])
})