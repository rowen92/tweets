"use strict";

/**
 * Represents tweets
 * @module app/index
 */

var tokens = require("./tokens"),
  OAuth = require( "oauth" ),
  oauth = new OAuth.OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    tokens.access.consumerKey,
    tokens.access.consumerSecret,
    "1.0A",
    null,
    "HMAC-SHA1"
  ),
  nickName = "goneiva464",
  i = 0;

/**
 * Get the all tweets using Twitter API
 * @param  {Object}   https: tokens.access.tokenKey,
 *                          tokens.access.tokenSecret,
 *                          function( error, data, res Parse tweets
 * @return {JSON}     List of tweets
 */
oauth.get(
  "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + nickName,
  tokens.access.tokenKey,
  tokens.access.tokenSecret,
  function( error, data, res ) {
    var lengthOfDataJSON,
        tweets = [],
        dataJSON;

    if ( error ) {
      throw new Error( error );
    }

    dataJSON = JSON.parse( data );
    lengthOfDataJSON = dataJSON.length;

    for ( ; i < lengthOfDataJSON; i++ ) {
      tweets.push( dataJSON[ i ].text );
    }

    console.log( tweets );
  }
);
