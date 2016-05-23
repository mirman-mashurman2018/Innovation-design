$( document ).ready(function(){
var paragraphs = document.getElementsByTagName("P");
var ok=false;
//add some firebase thing with the keywords
var keywords=["the"];

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

}

}
 if(ok!=true)
 {
   console.log("bad");
var ting = confirm("Are you sure this page is work?");
console.log(ting)
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
