import { fabric } from "fabric";

export default class ImageEditor {
	constructor(canvasElement) {
		this.canvas = null

		this.setImageEditor(canvasElement)
	}

	setImageEditor(canvasElement) {
		this.canvas = new fabric.Canvas(canvasElement, { width: 1000, height: 1000 })
	}

	openImage(file) {
		const canvas = this.canvas
		const reader = new FileReader()
		reader.onload = function(e) {
			const src = e.target.result

			fabric.Image.fromURL(src, function(img) {
				canvas.setBackgroundImage(src, canvas.renderAll.bind(canvas), {
					originX: 'left',
					originY: 'top'
				})
			});
		}
		reader.readAsDataURL(file)
	}
}