# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on "ready page:load", ->

	# The DOM (document object model) is constructed
	# We will initialize and run our plugin here
	# Prepare layout options.


	# Generate a new quote
	$('.tlt').textillate({

		# the default selector to use when detecting multiple texts to animate
		selector: '.texts',
		# enable looping
		loop: true,
		# sets the minimum display time for each text before it is replaced
		minDisplayTime: 6500,
		in: { 
			effect: 'fadeInUp',
			sync: true
		},
		out: {
			effect: 'fadeOutDown',
			sync: true
		},
		# set the type of token to animate (available types: 'char' and 'word')
		type: 'char'

	});

