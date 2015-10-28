
describe("themeMe", function() {

  var email = element(by.model('email'));
  var password = element(by.model('password'));
  var passwordConf = element(by.model('passwordconf'));
  var signUp = element(by.id('signUp'));

  describe("On startup", function(){
    beforeEach(function(){
      browser.get('http://localhost:8080/www/index.html');
    });

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('Theme Me');
    });

    it('has an email field', function(){
      expect(email.isDisplayed()).toBeTrue;
    });

    it('has a password field', function(){
      expect(password.isDisplayed()).toBeTrue;
    });

    it('has a password confirmation field', function(){
      expect(passwordConf.isDisplayed()).toBeTrue;
    });

    it('has a sign up button', function(){
      expect(signUp.isDisplayed()).toBeTrue;
    });

    it('directs user to set song page', function(){
      browser.get('http://localhost:8080/www/index.html');
      email.sendKeys('test@test.com');
      password.sendKeys('test');
      passwordConf.sendKeys('test');
      signUp.click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/www/setsong.html');
    });
  });

  describe('when signed in', function(){

    beforeEach(function(){
      browser.get('http://localhost:8080/www/setsong.html');
    });

    var searchTerm = element(by.model('searchTerm'));
    var searchSong = element(by.id('searchSC'));

    it('has a search song field', function(){
      expect((searchTerm).isDisplayed()).toBeTrue;
    });

    it('has an empty search field when initialised', function(){
      expect(searchTerm).toBeUndefined;
    });

    describe('when searching for a song', function() {

    });
  });
});
