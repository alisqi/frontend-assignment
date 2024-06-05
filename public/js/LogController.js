import {Controller} from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js'

export default class LogController extends Controller {
	
	connect() {
		console.info('Connected to', this.element)
	}
	
}
