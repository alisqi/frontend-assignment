import {Controller} from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js'

export default class LogController extends Controller {
	
	connect() {
		console.info('Connected to', this.element)
	}
	
	filter(e) {
		const level = e.currentTarget.value
		
		console.info(`Filter level: ${level}`)
	}
	
}
