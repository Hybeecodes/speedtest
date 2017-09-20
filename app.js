#!/usr/bin/env node
// console.log("Hello",process.argv[2]);
var speedTest    =  require('speedtest-net');
var ProgressBar  =  require('progress');
var chalk        =  require("chalk");

var test = speedTest({maxTime:5000});

var bar,pingTime;
test.on('data',data=>{
    console.dir(data);
});
test.on('error',err =>{
    console.error(err);
});

