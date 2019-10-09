var turtles = [
  {
    name: "Leo",
    color: "blue",
    noise: "Slash"
  },
  {
    name: "Donnie",
    color: "purple",
    noise: "Bonk"
  },
  {
    name: "Raph",
    color: "red",
    noise: "Kachink"
  },
  {
    name: "Mikey",
    color: "orange",
    noise: "Whack"
  }
];

var newEle = document.createElement("div");

newEle.style.position = "fixed";
newEle.style.top = "50%";
newEle.style.left = "50%";
newEle.style.height = "100px";
newEle.style.width = "100px";
newEle.style.backgroundColor = "darkgreen";
newEle.style.color = "white";
newEle.style.display = "flex";
newEle.style.justifyContent = "center";
newEle.style.alignItems = "center";
newEle.style.borderRadius = "15px";
newEle.style.fontSize = "15pt";
newEle.style.border = "4px solid white";
document.body.appendChild(newEle);

function turtleBox(name, color, noise, newEle) {
  var that = this;
  this.name = name;
  this.color = color;
  this.noise = noise;

  this.ele = document.createElement("div");

  this.ele.style.height = "100px";
  this.ele.style.width = "100px";
  this.ele.style.fontSize = "15pt";
  this.ele.style.margin = "10px";
  this.ele.style.backgroundColor = "darkgreen";
  this.ele.style.border = "4px solid white";
  this.ele.style.display = "flex";
  this.ele.style.flexDirection = "column";
  this.ele.style.justifyContent = "center";
  this.ele.style.alignItems = "center";
  this.ele.style.borderRadius = "15px";
  this.ele.style.cursor = "pointer";

  this.mesEle = document.createElement("div");
  this.mesEle.style.color = "white";
  this.mesEle.innerHTML = this.name;
  this.ele.appendChild(this.mesEle);

  document.body.appendChild(this.ele);

  this.ele.addEventListener("mouseover", function() {
    that.ele.style.borderColor = that.color;
  });
  this.ele.addEventListener("mouseout", function() {
    that.ele.style.borderColor = "white";
  });
  this.ele.addEventListener("click", function() {
    newEle.innerHTML = that.noise;
    newEle.style.borderColor = that.color;
  });
}

for (var i = 0; i < turtles.length; i++) {
  new turtleBox(turtles[i].name, turtles[i].color, turtles[i].noise, newEle);
}