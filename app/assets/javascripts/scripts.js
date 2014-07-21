$(document).ready(function(){
	// The DOM (document object model) is constructed
	// We will initialize and run our plugin here
	// Prepare layout options.

	// Generate a new quote
	generateQuote();


	var options = {
		autoResize : true, // This will auto-update the layout when the browser window is resized.
		container : $('#projects-container'), // Optional, used for some extra CSS styling
		offset : 15, // Optional, the distance between grid items
		itemWidth : 330, // Optional, the width of a grid item
		resizeDelay: 50
	};
	// Get a reference to your grid items.
	var handler = $('#projects-tiles li');
	// Call the layout function.
	handler.wookmark(options);
	
	$('#contact-container').waypoint(function(event){
		$(this).animate({'left':'0px','opacity':1},"slow");
	},{
		triggerOnce: true,
		offset: '95%'
	});
	
	
	//config fadeout on click
	$('.project-overlay').click(function(){
    	var url=$(this).find("a").attr("href"); 
    	$('#content').fadeOut("fast",function(){
    		location.href = url;
    	});
    	
    	//Prevent default browser click behavior
    	return true;
	});
	
	//slide in the back button
	$('.back').animate({'left':'30px','opacity':1},"slow");

});

var generateQuote = function(){
	
	var quotes = new Array();
	// Add new quotes here
	quotes[0]= new quote("The best way to predict the future is to invent it.",
				   "Alan Kay",48);
	quotes[1]=new quote("The future belongs to the few of us still willing to get our hands dirty.","Unknown",48);
	quotes[2]=new quote("Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
						"Mark Twain",32);
	quotes[3]=new quote("A smooth sea never made a skilled sailor.","English Proverb",48);
	quotes[4]=new quote("I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", "Leonardo da Vinci",32);
	quotes[5]=new quote("You can't use up creativity. The more you use, the more you have.", "Maya Angelou", 48);
	quotes[6]=new quote("Dream big and dare to fail.", "Norman Vaughan",48);
	quotes[7]=new quote("The way to get started is to quit talking and begin doing.", "Walt Disney", 48);
	quotes[8]=new quote("Doubt kills more dreams than failure ever will.", "Unknown", 48);
						
	// /end add new quotes					
	var randQuoteIndex=Math.floor(Math.random()*quotes.length);
	
	$("#quote-text").html('"'+quotes[randQuoteIndex].text+'"');
	$("#quote-person").html("- "+quotes[randQuoteIndex].person);
	$(".quote").css("font-size",quotes[randQuoteIndex].size);
}
function quote(text,person,size){
	this.text = text;
	this.person = person;
	this.size = size; 
}


