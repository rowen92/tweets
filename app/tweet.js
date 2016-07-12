"use strict";

function Tweet () {
  this.authentication = require("./authentication");
}

Tweet.prototype.getTweets = function( screenName ) {
  this.screenName = screenName;

  var i = 0,
    textOfTweets = [],
    params = { screen_name: this.screenName };

  this.authentication.client.get("statuses/user_timeline",
                                  params,
                                  function( error, tweets, response ) {

    if ( error ) {
      throw error;
    }

    for ( ; i < tweets.length; i++ ) {
      textOfTweets.push( tweets[ i ].text );
    }

    return textOfTweets;
  });
};

module.exports = Tweet;
