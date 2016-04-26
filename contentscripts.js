var e = document.getElementsByTagName('BODY');
var paragraphs = document.getElementsByTagName('P');
var ok =false;

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
e.append("<h1> Do you want to be on this site?</h1>")

 }
