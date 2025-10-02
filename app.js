
var clientId = "3MVG9XgkMlifdwVAPP1QzilrWxN4vxXanUxrP_wtiJKJMqA6GnZ1u41eQ.oP_8lPeh80GlG4byc0QpN3U2.84";
var baseURL = "https://tiger-dev-ed.trailblaze.my.site.com";
var redirectURL = "https://tiger-dev-ed.trailblaze.my.site.com/services/apexrest/code/extraction"
var client_secret="6718620B8A4513CE318C18A789951D47EB0B18E931298F428B9C90F10DE44B56";
function getToken(response){

    var xttreq= new XMLHttpRequest();
    xttreq.open("POST",response.sfdc_community_url+"/services/oauth2/token",true);
    xttreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xttreq.send("code=" + response.code + "&grant_type=authorization_code&client_id=" + clientId  +"client_secret="+client_secret+"&redirect_uri=" + redirectURL);
  
    xttreq.onreadystatechange=function(){
        if(this.readyState==3){
            response = JSON.parse(xttreq.response);
            console.log('token',response);
        }
    }
}
function startLogin(event) {
    // Prevent the form's default submit behavior
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('username ' + username);
    console.log('password ' + password);
var cred=btoa(username+":"+password);
var xhttprequest= new XMLHttpRequest();
xhttprequest.open("POST",baseURL+"/services/oauth2/authorize",true);
xhttprequest.setRequestHeader("Auth-Request-Type","Named-User");
xhttprequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhttprequest.setRequestHeader("Authorization","Basic "+cred);
xhttprequest.send("response_type=code_credentials&client_id="+clientId+"&redirect_uri="+redirectURL);
xhttprequest.onreadystatechange=function (){
if(this.readyState==3){
var response=JSON.parse(xhttprequest.response);
console.log(response);
console.log('sfdc_community_url'+response.sfdc_community_url);
console.log('sfdc_community_url'+response.code);
getToken(response);
}
}
}

// Attach the event listener to the form
document.getElementById('loginForm').addEventListener('submit', startLogin);
