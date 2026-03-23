
// John Spaugh Assignment 5
//https://johnspaugh.github.io/Assign5/fancifymytext.html 

function AlertBoxTest() {
  alert("Hello, world!, Alert, the Text area will increase its font size.");

  document.getElementById("textarea1").style.fontSize = "24pt";
}

function FancyRadio(){
    alert("Fancy application will happen to the Text area, change text to be bold, blue and underlined");

    document.getElementById("textarea1").style.fontWeight="bold";
    document.getElementById("textarea1").style.color="blue";
  // the css 'text-decoration' is textdecoration in javascript
    document.getElementById("textarea1").style.textDecoration="underline green";

}

function BoringRadio(){
    alert("Boring application will happen to the Text area, change text back to normal");

    document.getElementById("textarea1").style.fontWeight="normal";
    document.getElementById("textarea1").style.color="black";
  // the css 'text-decoration' is textdecoration in javascript
    document.getElementById("textarea1").style.textDecoration="none";

}

function Moo(){
    alert("'-Moo' will add after period sentence.-Moo");

    let str = document.getElementById("textarea1");
// was used for testing/debugging, comment out now
    // alert("text in box:"+str);
    let upperstr = str.value.toUpperCase();
    let sentences = upperstr.split(".");
    // alert("text in box:"+sentences);
    let moo_sentence = sentences.join("-Moo ");
    // alert("text in box:"+moo_sentence);
    // document.getElementById("testarea1") = str;
    str.value = moo_sentence;
}
