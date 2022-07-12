// window.human = false;

// var canvasEl = document.querySelector('.fireworks');
// var ctx = canvasEl.getContext('2d');
// var numberOfParticules = 30;
// var pointerX = 0;
// var pointerY = 0;
// var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
// var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

// function setCanvasSize() {
//   canvasEl.width = window.innerWidth * 2;
//   canvasEl.height = window.innerHeight * 2;
//   canvasEl.style.width = window.innerWidth + 'px';
//   canvasEl.style.height = window.innerHeight + 'px';
//   canvasEl.getContext('2d').scale(2, 2);
// }

// function updateCoords(e) {
//   pointerX = e.clientX || e.touches[0].clientX;
//   pointerY = e.clientY || e.touches[0].clientY;
// }

// function setParticuleDirection(p) {
//   var angle = anime.random(0, 360) * Math.PI / 180;
//   var value = anime.random(50, 180);
//   var radius = [-1, 1][anime.random(0, 1)] * value;
//   return {
//     x: p.x + radius * Math.cos(angle),
//     y: p.y + radius * Math.sin(angle)
//   }
// }

// function createParticule(x,y) {
//   var p = {};
//   p.x = x;
//   p.y = y;
//   p.color = colors[anime.random(0, colors.length - 1)];
//   p.radius = anime.random(16, 32);
//   p.endPos = setParticuleDirection(p);
//   p.draw = function() {
//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//     ctx.fillStyle = p.color;
//     ctx.fill();
//   }
//   return p;
// }

// function createCircle(x,y) {
//   var p = {};
//   p.x = x;
//   p.y = y;
//   p.color = '#FFF';
//   p.radius = 0.1;
//   p.alpha = .5;
//   p.lineWidth = 6;
//   p.draw = function() {
//     ctx.globalAlpha = p.alpha;
//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//     ctx.lineWidth = p.lineWidth;
//     ctx.strokeStyle = p.color;
//     ctx.stroke();
//     ctx.globalAlpha = 1;
//   }
//   return p;
// }

// function renderParticule(anim) {
//   for (var i = 0; i < anim.animatables.length; i++) {
//     anim.animatables[i].target.draw();
//   }
// }

// function animateParticules(x, y) {
//   var circle = createCircle(x, y);
//   var particules = [];
//   for (var i = 0; i < numberOfParticules; i++) {
//     particules.push(createParticule(x, y));
//   }
//   anime.timeline().add({
//     targets: particules,
//     x: function(p) { return p.endPos.x; },
//     y: function(p) { return p.endPos.y; },
//     radius: 0.1,
//     duration: anime.random(1200, 1800),
//     easing: 'easeOutExpo',
//     update: renderParticule
//   })
//     .add({
//     targets: circle,
//     radius: anime.random(80, 160),
//     lineWidth: 0,
//     alpha: {
//       value: 0,
//       easing: 'linear',
//       duration: anime.random(600, 800),  
//     },
//     duration: anime.random(1200, 1800),
//     easing: 'easeOutExpo',
//     update: renderParticule,
//     offset: 0
//   });
// }

// var render = anime({
//   duration: Infinity,
//   update: function() {
//     ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
//   }
// });

// document.addEventListener(tap, function(e) {
//   window.human = true;
//   render.play();
//   updateCoords(e);
//   animateParticules(pointerX, pointerY);
// }, false);

// var centerX = window.innerWidth / 2;
// var centerY = window.innerHeight / 2;

// function autoClick() {
//   if (window.human) return;
//   animateParticules(
//     anime.random(centerX-50, centerX+50), 
//     anime.random(centerY-50, centerY+50)
//   );
//   anime({duration: 200}).finished.then(autoClick);
// }

// autoClick();
// setCanvasSize();
// window.addEventListener('resize', setCanvasSize, false);

//this is for the wave


const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z",
      wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
      wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
      wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";

anime({
  targets: '.wave-top > path',
  easing: 'linear',
  duration: 7500,
  loop: true,
  d: [
    { value: [wave1, wave2] },
    { value: wave3 },
    { value: wave4 },
    { value: wave1 },
  ],
});

//lettrize 

const test = new Letterize({
      targets: "#animateMeSome"
    });

    var animation = anime.timeline({
      targets: test.listAll,
      delay: anime.stagger(50),
      loop: true
    });

    animation
      .add({
        translateY: -40
      })
      .add({
        translateY: 0
      });

//autoscroll js   

new fullpage('#fullpage', {
	//options here

});

//methods
//fullpage_api.setAllowScrolling(false);


//carousal anime.js
function init() {
	const slider = document.querySelector(".slider");
	const nextBtn = slider.querySelector(".slider .nav .next");
	const prevBtn = slider.querySelector(".slider .nav .prev");
	const items = slider.querySelectorAll(".slider .item");

	let current = 0;

	items.forEach((item) => {
		const textWrapper = item.querySelector(".wrap");
		textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
		);
	});

	function anim(current, next, callback) {
		const currentImgs = current.querySelectorAll(".img");
		const currentText = current.querySelectorAll(".content .letter");
		const nextImgs = next.querySelectorAll(".img");
		const nextText = next.querySelectorAll(".content .letter");

		const duration = 400;
		const offset = "-=" + 300;
		const imgOffset = duration*.8;

		const tl = anime.timeline({
			easing: "easeInOutQuint",
			duration: duration,
			complete: callback
		});

    	// Add children
		tl.add({
			targets: currentText,
			translateY: [0, '-.75em'],
			/*clipPath: ['polygon(0 0, 100% 0, 100% 100%, 0% 100%)', 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'],*/
			opacity: [1, 0],
			easing: "easeInQuint",
			duration: 600,
			delay: (el, i) => 10 * (i + 1)
		})
		.add({
			targets: currentImgs[0],
			translateY: -600,
			rotate: [0, '-15deg'],
			opacity: [1, 0],
			easing: "easeInCubic"
		}, offset )
		.add({
			targets: currentImgs[1],
			translateY: -600,
			rotate: [0, '15deg'],
			opacity: [1, 0],
			easing: "easeInCubic"
		}, "-=" + imgOffset )
		.add({
			targets: currentImgs[2],
			translateY: -600,
			rotate: [0, '-15deg'],
			opacity: [1, 0],
			easing: "easeInCubic"
		}, "-=" + imgOffset )
		.add({
			targets: currentImgs[3],
			translateY: -600,
			rotate: [0, '15deg'],
			opacity: [1, 0],
			easing: "easeInCubic"
		}, "-=" + imgOffset )
		.add({
			targets: current,
			opacity: 0,
			duration: 10,
			easing: "easeInCubic"
		})
		.add({
			targets: next,
			opacity: 1,
			duration: 10
		}, offset )
		.add({
			targets: nextImgs[0],
			translateY: [600, 0],
			rotate: ['15deg', 0],
			opacity: [0, 1],
			easing: "easeOutCubic"
		}, offset )
		.add({
			targets: nextImgs[1],
			translateY: [600, 0],
			rotate: ['-15deg', 0],
			opacity: [0, 1],
			easing: "easeOutCubic"
		}, "-=" + imgOffset )
		.add({
			targets: nextImgs[2],
			translateY: [600, 0],
			rotate: ['15deg', 0],
			opacity: [0, 1],
			easing: "easeOutCubic"
		}, "-=" + imgOffset )
		.add({
			targets: nextImgs[3],
			translateY: [600, 0],
			rotate: ['-15deg', 0],
			opacity: [0, 1],
			easing: "easeOutCubic"
		}, "-=" + imgOffset )
		.add({
			targets: nextText,
			translateY: ['.75em', 0],
			/*clipPath: ['polygon(0 0, 100% 0, 100% 0, 0 0)','polygon(0 0, 100% 0, 100% 100%, 0% 100%)'],*/
			opacity: [0, 1],
			easing: "easeOutQuint",
			duration: 600,
			delay: (el, i) => 10 * (i + 1)
		}, offset );
	}

	let isPlaying = false;

	function updateSlider(newIndex) {
		const currentItem = items[current];
		const newItem = items[newIndex];

		function callback() {
			currentItem.classList.remove("is-active");
			newItem.classList.add("is-active");
			current = newIndex;
			isPlaying = false;
		}

		anim(currentItem, newItem, callback);
	}

	function next() {
		if (isPlaying) return;
		isPlaying = true;
		const newIndex = current === items.length - 1 ? 0 : current + 1;
		updateSlider(newIndex);
	}

	function prev() {
		if (isPlaying) return;
		isPlaying = true;
		const newIndex = current === 0 ? items.length - 1 : current - 1;
		updateSlider(newIndex);
	}

	nextBtn.onclick = next;
	prevBtn.onclick = prev;
}

document.addEventListener("DOMContentLoaded", init);
//projects

