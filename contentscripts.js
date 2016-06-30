$( document ).ready(function(){
var paragraphs = document.getElementsByTagName("P");
var ok=false;
var gwebsites=["google"]
var keywords=["the"];
var badkeywords=["blahblahblahblahblahblah"];
var loc=window.location.href
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
<<<<<<< HEAD
  for(i=0;i<gwebsites.length;i++){
    if(loc.indexOf(gwebsite[i]) > -1){
      ok=true;
    }
  }
}

=======
}
>>>>>>> fa6830e47dc999c309b9de45e59e7ec588f34373
}

}
 if(ok!=true)
 {
   else{
   console.log("bad");
var ting = confirm("We aren't sure this is work. Do you want to stay on this page?");
console.log(ting)
}
if(ting!=true)
{
  console.log("close");
location.replace("https://drive.google.com/drive/u/0/my-drive");
}

 }
 else {
   {
     console.log("good");
 }
 }
}
);
