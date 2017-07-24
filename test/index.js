var OAuth = require("oauth" ),
tokens = require("../app/tokens");

describe( "OAuth", function() {
  it("test access to Twitter API", function( done ) {
    var oauth = new OAuth.OAuth(
      "https://api.twitter.com/oauth/request_token",
      "https://api.twitter.com/oauth/access_token",
      tokens.access.consumerKey,
      tokens.access.consumerSecret,
      "1.0A",
      null,
      "HMAC-SHA1"
    );
    oauth.get(
      "https://api.twitter.com/1.1/trends/place.json?id=23424977",
      tokens.access.tokenKey,
      tokens.access.tokenSecret,
      function( error, data, res ) {
        if ( error ) {
          throw new Error( error );
        }
        done();
      });
  });
});
