$(document).ready(function(){
var e = document.getElementsByTagName('BODY');
var paragraphs = document.getElementsByTagName('P');
var ok =false;
var keyword=[]

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
var close = confirm("Do you want to view this page?")
if(close==true)
{

  //close the page
}

 }
}
)
