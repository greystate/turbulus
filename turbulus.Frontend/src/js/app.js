
class Movies extends Stimulus.Controller {
	static get targets() {
		return ['filter', 'list']
	}
	
	initialize() {
		window.DEBUG = false
		this.reporter = {
			log: function(msg) {
				if (DEBUG) console.info(msg)
			}
		}
		const me = this
		document.addEventListener('turbolinks:before-visit', event => me.fadeOutList())
		document.addEventListener('turbolinks:before-render', me.hideList)
		document.addEventListener('turbolinks:render', this.reporter.log('render'))
	}
	
	connect() {
		this.reporter.log('connecting...')
		const me = this
		setTimeout(() => me.fadeInList(), 10)
	}

	fadeOutList() {
		this.reporter.log('fading...')
		this.listTarget.classList.add('fade')
	}
	
	fadeInList() {
		this.reporter.log('unfading...')
		this.listTarget.classList.remove('fade')
	}
	
	hideList(event) {
		let newBody = event.data.newBody
		newBody.querySelector('.movielist').classList.add('fade')
		event.data.newBody = newBody
	}
}


const app = Stimulus.Application.start()

app.register('movies', Movies)

