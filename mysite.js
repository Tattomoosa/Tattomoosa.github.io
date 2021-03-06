var likedThings = ['art', 'music', 'dogs', 'space', 'nature', 'water', 'swimming', 'bass', 'ukulele', 'bikes', 'stars', 'painting',  'turtles', 'elephants', 'penguins', 'orangutans', 'books', 'mountains',  'computers', 'javascript', 'quantum physics', 'beer', 'steak', 'open-source', 'pianos', 'polyrhythms', 'DSP', 'painting', 'the moon', 'the stars', 'the clouds', 'the ocean', 'snow', 'dreaming',  'puns', 'hiking', 'eating', 'pizza', 'science', 'grass', 'rain',  'sleeping', 'blue skies', 'whiskey', 'coral reefs', 'Earth', 'games', 'puzzles', 'fiction', 'sci-fi', 'fantasy', 'storms', 'programming', 'drawing', 'designing',  'recording',  'theremins', 'trains', 'neural networks', 'stories',  'painting',  'books', 'ravioli',  'porkchops', 'cheese',  'the beach', 'the universe', 'the milky way',  'parks'];

var interestDelay = 3200; //how long, in ms, before we change an interest
var whichInterest = 4; //which interest we start on
var onMobile = false; //on mobile we treat main img resize differently, and we hide nav/socialbar except on scroll up

//scrolling vars
var didScroll = false; //true if up-scroll occurred
var lastScrollTop = 0; //top of page rn
var scrollDelta = 5; //how far scroll needs to move to trigger that ish


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

	function showNav(value) {
		if (value) {
			//show nav
			$('#navbar').css('top', 0 + 'px');
			$('#socialbar').css('bottom', 0 + 'px');
		} else {
			//hide nav
			$('#navbar').css('top', -100 + 'px');
			$('#socialbar').css('bottom', -100 + 'px');
		}
	}

	function frontPagePadder() {
		//here we get window height and adjust front page padding...
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var imgHeight = 360; //default
		var imgHeightMin = 120;
		var mainPageHeight = 466; //main page height except for main-img

		//hides navbar + socialbar on mobile -- except on scroll up (not implemented yet!!)
		if (windowWidth < 767) {
			showNav(false);
			$('#navbar').css('transition', '.2s');
			$('#socialbar').css('transition', '.2s');
			onMobile = true;

		} else {
			showNav(true);
			$('#navbar').css('transition', '0s');
			$('#socialbar').css('transition', '0s');
			onMobile = false;
		}
		if (!onMobile) {
			//determine dynamic img height
			if (windowHeight < imgHeight + mainPageHeight) {
				imgHeight = windowHeight - mainPageHeight;
				if (imgHeight < imgHeightMin) {
					imgHeight = imgHeightMin;
				}
			}

			//handles dynamic sizing on desktop 
			//is there a better spacing for mobile??
			var toFill = windowHeight - (98 + imgHeight + 68 + 120 + 80);
			console.log (toFill);
			if ( toFill > 50 ) {
				var space = toFill/8; //divide by 8 to do 5/8 on top, 3/8 on bottom
				$( '#top-spacer' ).css('height', space*5 + 'px');
				console.log( $('#top-spacer').height() );
				$( '#bottom-spacer' ).css('height', space*3 + 'px');
			} else {
				$('#top-spacer').css('height', 40 + 'px');
				//$('#navbar-container').css('display', 'none');
			};

		} else {

			//ON MOBILE
			//mobile browsers (at least iOS chrome) resize to hide their own navigation bar so
			//dynamic img size on mobile is bad
			imgHeight = imgHeightMin;
			//handles sizing on mobile -- could be better	
			$('#top-spacer').css('height', 0 + 'px');
			$('#bottom-spacer').css('height', 0 + 'px');
		}

		$( '#main-img' ).css('height', imgHeight + 'px')
		//position main image inside div #main-img
		//$( '#main-img' ).css('background-position-y', 40 + '%')
		$( '#main-img' ).css('background-position', '0% 40%');
	}


	// on orientation change, reset our sizes...
	$(window).on('orientationchange', function(event) {
		frontPagePadder();
	});
	// on scroll, let the interval function know the user has scrolled
	$(window).scroll(function(event){
		didScroll = true;
	});
	// run hasScrolled() and reset didScroll status
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		// do stuff here...
		var pos = $(this).scrollTop();
		if (onMobile) {
			if (Math.abs(lastScrollTop - pos) <= scrollDelta) {return}
			if (pos > lastScrollTop) {
				//scrollin DOWN
				showNav(false);
				console.log ('scrollin down');
			} else {
				//scrollin UP
				showNav(true);
				console.log ('scrollin up');
			}
			lastScrollTop = pos;
		}
	}

});
