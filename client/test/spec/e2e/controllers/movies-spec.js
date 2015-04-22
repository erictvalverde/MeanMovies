describe('Mean Movies List', function() {


	var movieList = element.all(by.repeater('movie in movies'));
	var movieTitle = element(by.binding('movie.title'));
	var movieUrl = element(by.binding('movie.url'));


	beforeEach(function() {
      browser.get('http://localhost:9000/#/movies');
   	});

	it('should have a list of movies', function() {
		expect(movieList.count()).not.toBe(0);
  	});

  	it('should have a movie title', function() {
  		expect(movieTitle.getText()).not.toBe('');
  	});

  	it('should have a movie url', function() {
  		expect(movieUrl.getText()).toMatch('http');
  	});




/*
	var firstNumber     = element(by.model('first'));
	var secondNumber    = element(by.model('second'));
	var goButton        = element(by.id('gobutton'));
	var latestResult    = element(by.binding('latest'));
	var history         = element.all(by.repeater('result in memory'));

	var operationSelect = function(operation){
		return element(by.cssContainingText('option', operation));
	}

	function add(a, b) {
		firstNumber.sendKeys(a);
	    secondNumber.sendKeys(b);
	    goButton.click();
	}

   
   	beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
   	});

  	it('should have a title', function() {
   
		expect(browser.getTitle()).toEqual('Super Calculator');
  
  	});

  	it('should add one and two', function(){
  		firstNumber.sendKeys(1);
  		secondNumber.sendKeys(2);
  		goButton.click();
 		expect(latestResult.getText()).toEqual('3');

  	});
	
	it('should subtract five and three', function(){
		firstNumber.sendKeys(4);
		operationSelect('*').click();
  		secondNumber.sendKeys(2);
  		goButton.click();
  		expect(latestResult.getText()).toEqual('8');
	});

	it('should have a history', function() {
	    add(1, 2);
	    add(3, 4);

	    expect(history.count()).toEqual(2);

	    add(5, 6);

	    expect(history.count()).toEqual(3); // This is wrong!
	    
	    expect(history.last().getText()).toContain('1 + 2');
	});
*/
});

