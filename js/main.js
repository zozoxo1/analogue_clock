Number.prototype.leadingZero = function () {
	return ('0' + this).slice(-2)
}

window.addEventListener('DOMContentLoaded', () => {
	const hours = document.getElementsByClassName('clock-hours')[0]
	const minutes = document.getElementsByClassName('clock-minutes')[0]
	const seconds = document.getElementsByClassName('clock-seconds')[0]
	const clock_time = document.getElementsByClassName('clock-time')[0]

	let lastSecond = new Date().getSeconds()
	let totalRotation = lastSecond * 6 // Startwert für die Sekundenrotation

	function updateClock() {
		let now = new Date()
		let currentSecond = now.getSeconds()
		let ms = now.getMilliseconds()

		// Prüfen, ob eine neue Sekunde begonnen hat, um die Rotation weiterzuführen
		if (currentSecond !== lastSecond) {
			totalRotation += 6 // Pro Sekunde 6° aufaddieren
			lastSecond = currentSecond
		}

		// Smooth Übergang basierend auf Millisekunden
		let secondRotation = totalRotation + (ms / 1000) * 6 - 90

		// Winkelberechnungen für Stunden und Minuten
		let hourRotation =
			(now.getHours() % 12) * 30 + now.getMinutes() * 0.5 - 90
		let minuteRotation = now.getMinutes() * 6 - 90

		// Zeiger rotieren
		hours.style.rotate = hourRotation + 'deg'
		minutes.style.rotate = minuteRotation + 'deg'
		seconds.style.rotate = secondRotation + 'deg'

		// Uhrzeit anzeigen
		clock_time.innerHTML =
			now.getHours().leadingZero() +
			':' +
			now.getMinutes().leadingZero() +
			':' +
			now.getSeconds().leadingZero()

		// Nächste Aktualisierung
		setTimeout(updateClock, 1000 - ms)
	}

	// Start der Animation
	updateClock()
})

particlesJS('particles-js', {
	particles: {
		number: {
			value: 160,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#ffffff',
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000',
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 4,
				size_min: 0.3,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 600,
			},
		},
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: false,
				mode: 'bubble',
			},
			onclick: {
				enable: false,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 250,
				size: 0,
				duration: 2,
				opacity: 0,
				speed: 3,
			},
			repulse: {
				distance: 400,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
})
