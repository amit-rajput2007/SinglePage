
// var clientId = "3MVG9XgkMlifdwVAPP1QzilrWxN4vxXanUxrP_wtiJKJMqA6GnZ1u41eQ.oP_8lPeh80GlG4byc0QpN3U2.84";
// var baseURL = "https://tiger-dev-ed.trailblaze.my.site.com";
// var redirectURL = "https://tiger-dev-ed.trailblaze.my.site.com/services/apexrest/code/extraction"
//
// function getToken(response){

//     var xttreq= new XMLHttpRequest();
//     xttreq.open("POST",response.sfdc_community_url+"/services/oauth2/token",true);
//     xttreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     xttreq.send("code=" + response.code + "&grant_type=authorization_code&client_id=" + clientId + "&redirect_uri=" + redirectURL);
  
//     xttreq.onreadystatechange=function(){
//         if(this.readyState==3){
//             response = JSON.parse(xttreq.response);
//             console.log('token',response);
//         }
//     }
// }
// function startLogin(event) {
//     // Prevent the form's default submit behavior
//     event.preventDefault();

//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     console.log('username ' + username);
//     console.log('password ' + password);
// var cred=btoa(username+":"+password);
// var xhttprequest= new XMLHttpRequest();
// xhttprequest.open("POST",baseURL+"/services/oauth2/authorize",true);
// xhttprequest.setRequestHeader("Auth-Request-Type","Named-User");
// xhttprequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
// xhttprequest.setRequestHeader("Authorization","Basic "+cred);
// xhttprequest.send("response_type=code_credentials&client_id="+clientId+"&redirect_uri="+redirectURL);
// xhttprequest.onreadystatechange=function (){
// if(this.readyState==3){
// var response=JSON.parse(xhttprequest.response);
// console.log(response);
// console.log('sfdc_community_url'+response.sfdc_community_url);
// console.log('sfdc_community_url'+response.code);
// getToken(response);
// }
// }
    
// }

// // Attach the event listener to the form
// document.getElementById('loginForm').addEventListener('submit', startLogin);


var salesforceURL="https://tiger-dev-ed.trailblaze.my.salesforce.com";
var client_id='3MVG9XgkMlifdwVAPP1QzilrWxN4vxXanUxrP_wtiJKJMqA6GnZ1u41eQ.oP_8lPeh80GlG4byc0QpN3U2.84';
var redirect_uri='https://github.com/amit-rajput2007/SinglePage/oauth2/callback';

function getAuthCode(){
var req=new XMLHttpRequest();
req.open("POST",salesforceURL+"services/oauth2/authorize",true);
req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
req.setRequestHeader("response_type=code&client_id="+client_id+"&redirect_uri="+redirect_uri);
xhttprequest.onreadystatechange=function (){
if(this.readyState==3){
 var response=JSON.parse(xhttprequest.response);
 console.log(response);

 }
 }
 document.getElementById('loginForm').addEventListener('submit', getAuthCode);
}

