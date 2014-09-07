var express = require("express"),
	util 	= require('util'),
    http    = require("http"),
    request = require("request"),
    argv	= require('minimist')(process.argv.slice(2));

// MOVIES
if (argv.m) {	
	/*
	
	id : movie IMDB code (required)
	link : url or magnet to get movie. Support: youtube, magnet link, torrent, direct URL to video (required)
	
	quality : link quality: 1080p, 720p o 480p (optional)
	seeders : number of seeders if link is a magnet or torrent file (optional)
	size : size del link (optional)
	
	*/
	
	// Select one option and comment the code not used:
	
	
	// MODE 1 : node.js code
	// ---------------------
	
	var movies = [
	{ id : 'tt2147423', quality : '720p', link : 'https://www.youtube.com/watch?v=VUcB4p2oyp8'},
	{ id : 'tt1722443', quality : '720p', link : 'https://www.youtube.com/watch?v=lV6orhP378Q'}];
	
	// Here must be a console.log() to return JSON.
	console.log(JSON.stringify(movies));
	
	// ----------------------
	
}
