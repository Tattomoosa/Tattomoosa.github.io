var likedThings = ['art', 'music', 'dogs', 'space', 'nature', 'water', 'swimming', 'bass', 'ukulele', 'bikes', 'stars', 'painting',  'turtles', 'elephants', 'penguins', 'orangutans', 'books', 'mountains',  'computers', 'javascript', 'quantum physics', 'beer', 'steak', 'open-source', 'pianos', 'polyrhythms', 'DSP', 'hardcover books', 'painting', 'the moon', 'the stars', 'the clouds', 'the ocean', 'snowboarding', 'kangaroos', 'peaches', 'quesadillas',  'signal processing', 'machine learning', 'dreaming',  'puns', 'hiking', 'eating', 'pizza', 'science', 'grass', 'rain',  'sleeping', 'blue skies', 'whiskey', 'coral reefs', 'Earth', 'games', 'puzzles', 'fiction', 'sci-fi', 'fantasy', 'storms', 'programming', 'drawing', 'designing',  'recording',  'theremins', 'trains', 'neural networks', 'stories',  'painting',  'books', 'ravioli',  'porkchops', 'cheese',  'the beach', 'the universe', 'the milky way',  'parks'];

var interestDelay = 1600;
var whichInterest = 4;

$( document ).ready(function() {

	//sizes up front page real nice
	frontPagePadder();
	$(window).on('resize', function(){
		frontPagePadder();
	});
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

	function frontPagePadder() {
		//here we get window height and adjust front page padding...
		var windowHeight = $(window).height();
		var imgHeight = 360; //default
		var mainPageHeight = 466; //main page height except for main-img

		if (windowHeight < imgHeight + mainPageHeight) {
			imgHeight = windowHeight - mainPageHeight;
			if (imgHeight < 0) {
				imgHeight = 40;
			}
		}
		var toFill = windowHeight - (98 + imgHeight + 68 + 120 + 80);
		console.log (toFill);
		if ( toFill > 1 ) {
			var space = toFill/8; //divide by 8 to do 5/8 on top, 3/8 on bottom
			$( '#top-spacer' ).css('height', space*5 + 'px');
			console.log( $('#top-spacer').height() );
			$( '#bottom-spacer' ).css('height', space*3 + 'px');
		} else {
			$('#top-spacer').css('height', 100 + 'px');
		};

		$( '#main-img' ).css('height', imgHeight + 'px')
		//position main image inside div #main-img
		$( '#main-img' ).css('background-position-y', 40 + '%')

		console.log ('made it!');
	}

});
