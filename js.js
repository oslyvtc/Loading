/////// Pure JavaScript 

// function sel(a) {
// 	return document.querySelector(a);
// };

// (function() {

// 	var halfLeft = sel('.half-left');
// 	var halfRight = sel('.half-right');
// 	var leftDeg = 0, rightDeg = 0;
// 	var number = 1;

// 	var rotate = setInterval(function() {
// 		if (leftDeg != 181) {
// 			halfLeft.style.transform = `rotate(${leftDeg}deg)`;
// 			leftDeg += 1;
// 		} else {
// 			clearInterval(rotate);
// 		}
// 	},20)

// 	setTimeout(function() {

// 		halfRight.style.zIndex = '7';
// 		var rotate = setInterval(function() {
// 		if (rightDeg != 181) {
// 			halfRight.style.transform = `rotate(${rightDeg}deg)`;
// 			rightDeg += 1;
// 		} else {
// 			clearInterval(rotate);
// 		}
// 	},20)
// 	},20 * 180)

// 	var numbers = setInterval(function() {
// 		if (number != 101) {
// 			sel('.numbers').innerHTML = `${number}%`;
// 			number += 1;
// 		}
// 	},((20 * 180) * 2)/100);

// })();

////// Jquery

$(function() {

	var number = 0;

	$({deg: 0}).animate({
		deg: 180
	},{
		duration: 5000,
		easing: 'linear',
		step: function(now) {
			$('.half-left').css({
				transform: 'rotate(' + now + 'deg)'
			});
		}
	})

	setTimeout(function() {
		$('.half-right').css({
			zIndex: '7'
		});
		$({deg: 0}).animate({
			deg: 180
		},{
			duration: 5000,
			easing: 'linear',
			step: function(now) {
				$('.half-right').css({
					transform: 'rotate(' + now + 'deg)'
				});
			}
		})
	},5000)

	var numbers = setInterval(function() {
		if (number != 101) {
			$('.numbers').html(`${number}%`);
			number += 1;
		}
	},99);

});