{\rtf1\ansi\ansicpg1252\cocoartf2512
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww35640\viewh19380\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs36 \cf0 /**************************Javascript Assignment #1**************************/
\fs28 \
\
/*********************************************************************************\
* WEB222 \'96 Assignment 01\
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of\
* this assignment has been copied manually or electronically from any other source (including web sites)\
* or distributed to other students. *\
* Name: Shabnoor Sayed Student ID: 133649194 Date: 14/ 06/ 2020*\
********************************************************************************/\
\
/*****************************\
* Task 1 Description as Comments\
*****************************/\
// In a comment section, describe the following terms with examples (Your code example may appear in comments).\
// a) Infinity - Infinity is special	number type and is a variable of global scope, it is also called property of global object and it can be both positive and negative. Example:\
console.log(1/0); /* infinity*/		\
// b) Undefined - it is a special value that indicate that value was never defined. Example:\
var value; \
console.log(value); /*undefined*/\
// c) NaN - It stands for \'93Not - A - Number\'94, it is also a global property like infinity. In modern browser it is a non configurable and non writeable property. Example:\
console.log(0 * Infinity); /*NaN*/ \
\
\
\
/*****************************\
* Task 2 Conversion\
*****************************/\
console.log("1010 Binary into decimal: "+parseInt(1010, 2));   	  //10\
console.log("AF Hex into decimal: "+parseInt("AF", 16));  		 /* 175 */\
console.log("713 Octal into decimal: "+parseInt(713, 8));    		/* 459 */\
\
/*****************************\
* Task 3 Celsius and Fahrenheit temperatures\
*****************************/\
var celciusTemp = 14;\
function converstionToFahernheit(celciusTemp)\{\
    return (celciusTemp * 9/5) + 32;\
\}\
console.log(celciusTemp+"\'b0C is "+converstionToFahernheit(celciusTemp).toFixed(1)+"\'b0F");\
\
var fahrenheitTemp = converstionToFahernheit(celciusTemp);\
\
function converstionToCelcius(fahrenheitTemp)\{\
    return (fahrenheitTemp - 32) * 5/9;\
\}\
\
console.log(fahrenheitTemp+"\'b0F is "+converstionToCelcius(fahrenheitTemp).toFixed(1)+"\'b0C");\
\
/*****************************\
* Task 4 Larger or largest number\
*****************************/\
\
/***Part a***/\
\
function largerNum(num1, num2) \{\
    \
    var larger;\
\
    if(num1 > num2) \{\
         larger = num1;\
    \} else \{\
        larger = num2;\
    \}\
\
    console.log("The larger number of " +num1 +" and " +num2 +" is: "+larger);\
\}\
\
/***Part b***/\
\
var greaterNum = function largerNum(num1, num2) \{\
    var larger;\
\
    if(num1 > num2) \{\
        larger = num1;\
    \} else \{\
        larger = num2;\
    \}\
    console.log("The larger number of " +num1 +" and " +num2 +" is: "+larger);\
\}\
\
/***Part c***/\
\
largerNum(12, 78);\
largerNum(4, 6);\
greaterNum(8, 5);\
greaterNum(9, 0);\
\
/*****************************\
* Task 5 Evaluator\
*****************************/\
\
/***Part a***/\
\
function Evaluator() \{\
    var sum = 0;\
    for(var i = 0; i < arguments.length; i++) \{\
        sum += arguments[i];\
    \}\
    var avg = sum / arguments.length;\
    console.log("Average greater than or equal to 25: " +(avg >= 25));\
\}\
\
/***Part b***/\
\
Evaluator(0, 1, 10);\
Evaluator(8, 7, 66);\
Evaluator(3,16, 9.6);\
\
/*****************************\
* Task 6 ShowMultiples\
*****************************/\
\
/***Part a***/\
\
function showMultiples(num, numMultiples) \{\
    for(var i = 1; i <= numMultiples; i++) \{\
        multiple = num * i;\
        console.log(num+" x "+i+" = "+multiple);\
    \}\
\}\
\
/***Part b***/\
\
showMultiples(5,  8);\
showMultiples(7,  2);\
showMultiples(54,  6);\
\
/*****************************\
* Task 7 Closure/Self Invoking\
*****************************/\
function increament () \{\
  var counter = 100;\
  return function () \{\
    counter += 100; \
    return counter\
    \}\
\}\
\
 var Increament = increament();\
 Increament();\
 Increament();\
 console.log(Increament()+" is the final value for the third call");\
}