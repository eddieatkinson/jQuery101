// console.log("Loaded!");
// console.log(jQuery);
// console.log($); // Same as above.

// Targeting.
// Native JS:
// var header = document.getElementById('header');
// console.log(header);

// // In jQuery
// // IDs...
// var header = $('#header');
// // Because...
// document.getElementById = $('#');

// // Classes...
// var colsm12 = document.getElementsByClassName('col-sm-12');
// // becomes...
// var colsm12 = $('.col-sm-12');
// // because...

// // Tags...
// document.getElementsByClassName = $('.');
// // becomes...
// var colsm12 = $('body');
// // because...
// document.getElementsByTagName = $('');

// WAIT UNTIL THE DOM IS READY...
// First... target the document
// var dom = $(document);
// console.dir(dom);
// console.log(dom);



// The difference between window.onload and document.ready is that window.onload
// will wait until images/viceos/etc. are done loading, too.
// $(window).on('load', function(){
// 	console.log("Window finished loading.")

// });

// Call the ready method. It is an event listener. It will fire when ALL the HTML is loaded.
// It takes 1 are...the function to run when the event happens.
$(document).ready(function(){ // EVERYTHING will go in here!
	// code to run when the DOM is finished loading...
	// var header = $('#header')
	// console.log(header);
	// $('#thing').click(function(){
	// 	console.log("User clicked on the green button.")
	// })
	// Add a click listener to all buttons...
	$('button').click(function(){
		// console.log(this);
		var whatToDo = $(this).attr('toDo');
		console.log(whatToDo);
		if(whatToDo == 'hide'){
			$('#thing').hide();
		}else if(whatToDo == 'show'){
			$('#thing').show();
		}else if(whatToDo == 'toggle'){
			$('#thing').toggle();
		}else if(whatToDo == 'html'){
			// If we don't pass anything, html() will return current contents
			$('#thing').html('<strong>Someone Changed my HTML</strong>');
		}else if(whatToDo == 'text'){
			// The text method will put the literal text in there.
			$('#thing').text('<strong>Someone Changed my text</strong>');
		}else if(whatToDo == 'css'){
			// css method takes a JS object...
			// key is a string, for any css property
			// value is the value you want to apply
			$('#thing').css({
				'background-color': 'orange',
				'border-radius': '50%',
				'font-size': '100px'
			});
		}else if(whatToDo == 'add-class'){
			// The text method will put the literal text in there.
			$('#thing').addClass('btn-danger');
		}else if(whatToDo == 'remove-class'){
			$('#thing').removeClass('btn-danger');
		}else if(whatToDo == 'toggle-class'){
			$('#thing').toggleClass('btn-danger');
		}else if(whatToDo == 'prepend'){
			// prepend is the same as innerHTML = ... + innerHTML
			$('#thing').prepend('This is some prepended text.');
		}else if(whatToDo == 'append'){
			// append is the same as innerHTML += ...
			$('#thing').append('This is some appended text.');
		}else if(whatToDo == 'fade-toggle'){
			// takes ms as argument
			$('#thing').fadeToggle(1500);
		}else if(whatToDo == 'slide-toggle'){
			// takes ms as argument
			$('#thing').slideToggle(1500);
		}else if(whatToDo == 'animate'){
			// Animate takes 2 args:
			// 1. an object of css properties to animate to
			// 2. how long you want it to animate over (in ms)
			$('#thing').animate({
				'width': '40%',
				'opacity': .3,
				'font-size': '100%',
				'border-width': '10px'
			}, 1500);
		}else if(whatToDo == 'goodbye'){
			$('#thing').animate({
				'margin-left': '-3000px'
			}, 1500);
		}else if(whatToDo == 'hello'){
			$('#thing').animate({
				'margin': '0px'
			}, 1500);
		}else if(whatToDo == 'loop'){
			$('button').each(function(){
				console.log(this);
			})
		}else if(whatToDo == 'closest'){
			$('#thing').closest('.row').css({
				'background-color': 'orange'
			});
		}else if(whatToDo == 'parent'){
			$('#thing').parent().css({
				'background-color': 'red'
			});
		}else if(whatToDo == 'explode'){
			$('#thing').toggle('explode', {pieces:100}, 4000);
		}else if(whatToDo == 'bounce'){
			$('#thing').toggle('bounce');
		}
	})



});

// console.log("JS is running...");