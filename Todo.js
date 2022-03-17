const formDom = document.querySelector("#form");
formDom.addEventListener("submit", newElement);

function newElement(e) {
  const doNewThing = document.querySelector("#task");
  const liItem = document.createElement("li");
  const liText = document.createTextNode(doNewThing.value);
  if (doNewThing.value === "") {
    alert("dsk");
  } else {
    liItem.appendChild(liText);
    document.getElementById("list").appendChild(liItem);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liItem.appendChild(span);

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var c;
for (c = 0; c < close.length; c++) {
  close[c].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
