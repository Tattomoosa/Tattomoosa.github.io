var likedThings = ['art', 'music', 'dogs', 'space', 'nature', 'leg day', 'kind people', 'water', 'swimming', 'bass', 'ukulele', 'bikes', 'stars', 'painting', 'the number 4', 'turtles', 'elephants', 'penguins', 'orangutans', 'books', 'mountains', 'buffalo wings', 'the internet', 'computers', 'javascript', 'quantum physics', 'beer', 'steak', 'open-source', 'wasting time', 'pianos', 'polyrhythms', 'DSP', 'chill people', "chillin'", 'the oxford comma', 'hardcover books', 'painting', 'the moon', 'the stars', 'the clouds', 'the ocean', 'snowboarding', 'secret beatboxing', 'kangaroos', 'dunkaroos', 'my fam', 'quakkas', 'tomatoes', 'peaches', 'quesadillas', 'oscilloscopes', 'signal processing', 'machine learning', 'dreaming', 'yawning', 'subwoofers', 'sick beats', 'puns', 'brick jokes', 'apples', 'oranges', 'hiking', 'eating', 'pizza', 'science', 'memes', 'grass', 'rain', 'smooth rocks', 'sleeping', 'blue skies', 'showers', 'old fashioneds', 'whiskey', 'coral reefs', 'Earth', 'games', 'puzzles', 'fiction', 'sci-fi', 'fantasy', 'video games', 'storms', 'programming', 'drawing', 'designing', 'filming', 'recording', 'editing', 'lifting', "hangin' out", 'theremins', 'trains', 'neural networks', 'stories', 'Mars', 'NASA', 'Jupiter', 'painting', 'snacking', 'wubba-lubba-dub-dub', 'books', 'ravioli', 'spaghetti', 'porkchops', 'cheese', 'ice cream', 'the beach', 'the universe', 'the milky way', 'our solar system', 'parks', 'national parks' ];

var interestDelay = 1600;
var whichInterest = 4;

$( document ).ready(function() {
	//here we get window height and adjust front page padding...
	var imgHeight = 360;
	var toFill = $(window).height() - (98 + imgHeight + 68 + 120 + 80);
	console.log (toFill);
	if ( toFill > 1 ) {
		var space = toFill/2;
		$( '#top-spacer' ).css('height', space + 'px');
		console.log( $('#top-spacer').height() );
		$( '#bottom-spacer' ).css('height', space + 'px');
	};


	//randomly changes my interests at interestDelay interval, man
	setTimeout(onTimeOut, interestDelay)

	function onTimeOut()	{

		//randomizes my interests
		var matching = false;
		var aRandomThing = Math.round(Math.random()*likedThings.length);
		var anInterest = likedThings[aRandomThing];
		//checks that against my currently displayed interests
		//but currently DOES NOTHING EVEN IF IT MATCHES
		//maybe no point with so many options?
		for (var i = 1; i <= 4; i++) {
			if (anInterest == $( '#interest' + i )) {
				matching = true;
				console.log('ops it matched');
				break;
			}
		}
			
		$('#interest' + whichInterest).html(anInterest);

		//resets whichInterest count
	  whichInterest+=1;
		if (whichInterest>4) {whichInterest=1};

		//}
	setTimeout(onTimeOut, interestDelay);
	}

});
