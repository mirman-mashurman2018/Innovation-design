$( document ).ready(function(){
var e = document.getElementsByTagName('BODY')[0];
var paragraphs = document.getElementsByTagName('P');
var ok=false;
//add some firebase thing with the keywords
var keywords=["Bleh"];

for(paragraph in paragraphs)
{
  for(keyword in keywords)
  {
if(paragraph.search(keyword)!=-1)
{

  ok=true;
}

}

}
 if(ok!=true)
 {
   console.log("bad");
var close = confirm("Do you want to view this page?");
if(close==true)
{

  //close the page
}

 }
}
);
