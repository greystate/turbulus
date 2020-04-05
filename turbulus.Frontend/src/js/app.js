
class Movies extends Stimulus.Controller {
	static get targets() {
		return ['filter', 'list']
	}
	
	initialize() {
		const me = this
		document.addEventListener('turbolinks:before-visit', event => me.fadeOutList())
		document.addEventListener('turbolinks:before-render', me.hideList)
		document.addEventListener('turbolinks:render', console.log('render'))
	}
	
	connect() {
		console.log('connecting...')
		const me = this
		setTimeout(() => me.fadeInList(), 10)
	}

	fadeOutList() {
		console.log('fading...')
		this.listTarget.classList.add('fade')
	}
	
	fadeInList() {
		console.log('unfading...')
		this.listTarget.classList.remove('fade')
	}
	
	hideList(event) {
		let newBody = event.data.newBody
		newBody.querySelector('.movielist').classList.add('fade')
		event.data.newBody = newBody
		console.log(newBody.querySelector('.movielist').className)
	}
}


const app = Stimulus.Application.start()

app.register('movies', Movies)

