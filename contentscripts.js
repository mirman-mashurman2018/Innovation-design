var convert = (function() {
    var convertElement = function(element) {
        switch(element.tagName) {
            case "BR":
                return "\n";
            case "P": // fall through to DIV
            case "DIV":
                return (element.previousSibling ? "\n" : "") + [].map.call(element.childNodes, convertElement).join("");
            default:
                return element.textContent;
        }
    };

    return function(element) {
        return [].map.call(element.childNodes, convertElement).join("");
    };
})();


$( document ).ready(function(){
var e = document.getElementsByTagName('BODY')[0];
var paragraphs = document.getElementsByTagName('P');
var ok=false;
//add some firebase thing with the keywords
var keywords=["the"];

for(paragraph in paragraphs)
{
  console.log(convert(paragraph));
  for(keyword in keywords)
  {
if(convert(paragraph).search(keyword)!=-1)
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
location.replace("chrome://newtab");
}

 }
 else {
   {
     console.log("good");
 }
 }
}
);
