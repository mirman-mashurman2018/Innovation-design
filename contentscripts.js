$( document ).ready(function(){
var paragraphs = document.getElementsByTagName("P");
var ok=false;
var keywords;
var badkeywords;
var loc= window.location.href;
chrome.runtime.sendmessage({message:"loaded"}, function(response)
{
keywords=response.keywords;
badkeywords=response.badkeywords;
})

for(i=0;i<gwebsites.length;i++){
  if(loc.indexOf(gwebsites[i]) > -1){
    ok=true;
  }
}
for(i=0; i<paragraphs.length;i++)
{
  console.log(paragraphs[i].textContent);
  console.log(paragraphs[i]);
  for(e=0; e<keywords.length;e++)
  {

if(paragraphs[i].textContent.search(keywords[e])!=-1)
{

  ok=true;
}
if(paragraphs[i].textContent.search(badkeywords[e])!=-1)
{
  ok=false;

  }
}

}
 if(ok!=true)
 {
   console.log("bad");
var ting = confirm("We aren't sure this is work. Do you want to stay on this page?");
console.log(ting)
if(ting!=true)
{
  console.log("close");
location.replace("https://drive.google.com/drive/u/0/my-drive");
}

}
else {
    console.log("good");

}
}
);
