export default class ImageEditor {
	constructor(canvasElement) {
		this.canvasContext = null

		this.setImageEditor(canvasElement)
	}

	setImageEditor(canvasElement) {
		const canvas = document.querySelector(`#${canvasElement}`)
		this.canvasContext = canvas.getContext('2d')
	}

	openImage(file) {
		const canvasContext = this.canvasContext
		const reader = new FileReader()
		reader.onload = function(e) {
			const src = e.target.result

			let img = new Image()
			img.src = src
			img.onload = function() {
				console.log(1, canvasContext)
				canvasContext.drawImage(img,0,0,100,100)
			}
		}
		reader.readAsDataURL(file)
	}
}