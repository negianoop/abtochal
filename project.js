// Get all buttons with class="icons" inside the container
var btns = document.getElementsByClassName("icons");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active"); 
    this.classList.add("active"); 
  });
}


// home icon
document.getElementsByClassName("icons")[0].addEventListener("click",function(){
  document.getElementsByClassName("work-section-header-text")[0].innerHTML="Tools";
  document.getElementsByClassName("code-section")[0].classList.add("show-code"); 
  document.getElementsByClassName("about-us-section")[0].classList.add("block");
  document.getElementsByClassName("credit-section")[0].classList.add("block");
  document.getElementsByClassName("work-section-content")[0].classList.remove("block");
  
});

// heart icon
document.getElementsByClassName("icons")[1].addEventListener("click",function(){
  document.getElementsByClassName("work-section-header-text")[0].innerHTML="Credits"; 
  document.getElementsByClassName("work-section-content")[0].classList.add("block");
  document.getElementsByClassName("code-section")[0].classList.add("block");
  document.getElementsByClassName("about-us-section")[0].classList.add("block");
  document.getElementsByClassName("credit-section")[0].classList.remove("block");
  document.getElementsByClassName("code-section")[0].classList.remove("show-code");
});

// about us
document.getElementsByClassName("icons")[2].addEventListener("click",function(){  
  document.getElementsByClassName("work-section-header-text")[0].innerHTML = "About Us";
  document.getElementsByClassName("work-section-content")[0].classList.add("block");
  document.getElementsByClassName("code-section")[0].classList.add("block");
  document.getElementsByClassName("credit-section")[0].classList.add("block");
  document.getElementsByClassName("about-us-section")[0].classList.remove("block");
  document.getElementsByClassName("code-section")[0].classList.remove("show-code");

});

// expands work section tools
var tools = document.getElementsByClassName("work-section-text");

for(var i = 0; i<tools.length; i++){
  tools[i].addEventListener("click",expand);
} 
function expand(){
  var current = document.getElementsByClassName("expand"); 
  var all = document.getElementsByClassName("work-section-boxes");
  for(var i = 0; i<all.length; i++){
    all[i].style.display="none";
  }
  if(current.length > 0){
    current[0].classList.remove("expand");
  } 
  this.parentElement.parentElement.classList.add("expand");
  this.parentElement.parentElement.style.display = "flex";
  this.parentElement.nextElementSibling.style.display = "flex";
  this.parentElement.firstElementChild.style.display = "flex";
  this.parentElement.style.justifyContent = "flex-start";
}

// show code in  code section 
function show_code(index,property,value){
  var pro = document.getElementsByClassName("code-property")[index]; 
  var val = document.getElementsByClassName("code-value")[index]; 
  pro.innerHTML = property+":"; 
  val.innerHTML = value+";"; 
  if(value == ""){
    pro.innerHTML = ""; val.innerHTML = ""; 
  }
}
// reset the code-section 
function reset_code(){
  var code_property = document.getElementsByClassName("code-property");
  for(var i = 0; i<code_property.length; i++){
    code_property[i].innerHTML = "";
  }
  var code_value = document.getElementsByClassName("code-value"); 
  for(var i = 0; i<code_value.length; i++){
    code_value[i].innerHTML = "";
  }
  code_property[0].innerHTML = "// here goes your code";
}

// back button 
var back_buttons = document.getElementsByClassName("back-button");
for(var i = 0; i<back_buttons.length; i++){
  back_buttons[i].addEventListener("click",back);
}
function back(){
  var current = document.getElementsByClassName("expand"); 
  current[0].classList.remove("expand");
  var all = document.getElementsByClassName("work-section-boxes");
  for(var i = 0; i<all.length; i++){
    all[i].style.display = "flex";
  }
  var hidden_content = document.getElementsByClassName("hidden-content-container");
  for(var i = 0; i<hidden_content.length; i++){
    hidden_content[i].style.display = "none";
  }
  var back = document.getElementsByClassName("back-button");
  for(var i = 0; i<back.length; i++){
    back[i].style.display = "none";
  } 
  this.parentElement.style.justifyContent = "center";  
  reset_code();
}

// copy
function copy() {
  var input = document.createElement('textarea');
  var text = ""; 
  var copy_property = document.getElementsByClassName("code-property");
  var copy_value = document.getElementsByClassName("code-value"); 
  for(var i = 0; i<copy_property.length; i++){
    text += copy_property[i].innerHTML; 
    text += copy_value[i].innerHTML + "&#013;"; 
  }
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}

document.getElementsByClassName("code-copy-btn")[0].addEventListener("click",copy); 
document.getElementsByClassName("code-copy-btn")[0].addEventListener("click",function (){
  document.getElementsByClassName("code-copy-btn")[0].innerHTML="copied"; 
}); 
document.getElementsByClassName("code-copy-btn")[0].addEventListener("mouseout",function(){
  document.getElementsByClassName("code-copy-btn")[0].innerHTML = "copy"; 
});

// transform tools
var transform = new Object();

function transform_style(){
  var s = ""; 
  for(x in transform){
   s += x+"(" + transform[x] + ")"; 
  }
  return s;
}

document.getElementById("rotate-slider").oninput = function(){
  transform.rotate = this.value+"deg ";
  if(this.value == 0) delete transform.rotate; 
  document.getElementById("rotate-value").innerHTML = this.value + "deg";
  var output = document.getElementsByClassName("output-rectangle")[0];
  output.style.transform = transform_style();
  //for updated browsers
  show_code(0,"transform",output.style.transform); 
  //for webkit browsers
  show_code(1,"-webkit-transform",output.style.transform);
  //for mozzilla browser
  show_code(2,"-moz-transform",output.style.transform); 
  //for internet explorer
  show_code(3,"-ms-transform",output.style.transform);
  //for opera
  show_code(4,"-o-transform",output.style.transform);
};

document.getElementById("skew-slider").oninput = function(){
  transform.skew = this.value+"deg ";
  if(this.value == 0) delete transform.skew;
  document.getElementById("skew-value").innerHTML = this.value + "deg";
  var output = document.getElementsByClassName("output-rectangle")[0];
  output.style.transform = transform_style();
  //for updated browsers
  show_code(0,"transform",output.style.transform); 
  //for webkit browsers
  show_code(1,"-webkit-transform",output.style.transform);
  //for mozzilla browser
  show_code(2,"-moz-transform",output.style.transform); 
  //for internet explorer
  show_code(3,"-ms-transform",output.style.transform);
  //for opera
  show_code(4,"-o-transform",output.style.transform);
};

document.getElementById("scale-slider").oninput = function(){
  transform.scale = (this.value/10)+" "; 
  if(this.value/10 == 1) delete transform.scale; 
  document.getElementById("scale-value").innerHTML = this.value/10;
  var output = document.getElementsByClassName("output-rectangle")[0];
  output.style.transform = transform_style();
  show_code(0,"transform",output.style.transform); 
  //for webkit browsers
  show_code(1,"-webkit-transform",output.style.transform);
  //for mozzilla browser
  show_code(2,"-moz-transform",output.style.transform); 
  //for internet explorer
  show_code(3,"-ms-transform",output.style.transform);
  //for opera
  show_code(4,"-o-transform",output.style.transform);
};
 
document.getElementById("translateX-slider").oninput = function(){
  transform.translateX = this.value+"px "; 
  if(this.value == 0) delete transform.translateX; 
  document.getElementById("translateX-value").innerHTML = this.value+"px";
  var output = document.getElementsByClassName("output-rectangle")[0];
  output.style.transform = transform_style();
  //for updated browsers
  show_code(0,"transform",output.style.transform); 
  //for webkit browsers
  show_code(1,"-webkit-transform",output.style.transform);
  //for mozzilla browser
  show_code(2,"-moz-transform",output.style.transform); 
  //for internet explorer
  show_code(3,"-ms-transform",output.style.transform);
  //for opera
  show_code(4,"-o-transform",output.style.transform);
};

document.getElementById("translateY-slider").oninput = function(){
  transform.translateY = this.value+"px "; 
  if(this.value == 0) delete transform.translateY; 
  document.getElementById("translateY-value").innerHTML = this.value+"px";
  var output = document.getElementsByClassName("output-rectangle")[0];
  output.style.transform = transform_style();
  //for updated browsers
  show_code(0,"transform",output.style.transform); 
  //for webkit browsers
  show_code(1,"-webkit-transform",output.style.transform);
  //for mozzilla browser
  show_code(2,"-moz-transform",output.style.transform); 
  //for internet explorer
  show_code(3,"-ms-transform",output.style.transform);
  //for opera
  show_code(4,"-o-transform",output.style.transform);
};

// box shadow tools
var horizontal = 22; 
var vertical = 22; 
var blur_ = 25; 
var spread = 0; 
var box_shadow_color = "#000000";  
document.getElementById("horizontal-shadow-slider").oninput = function(){
  horizontal = this.value; 
  document.getElementById("horizontal-shadow-value").innerHTML = horizontal + "px";
  var output = document.getElementsByClassName("output-rectangle")[1];
  output.style.boxShadow = horizontal + "px " + vertical + "px " + blur_ +"px " + spread + "px " + box_shadow_color;
  //for updated browsers
  show_code(0,"box-shadow",output.style.boxShadow); 
  //for webkit browsers
  show_code(1,"-webkit-box-shadow",output.style.boxShadow);
  //for mozzilla browser
  show_code(2,"-moz-box-shadow",output.style.boxShadow); 
};

document.getElementById("vertical-shadow-slider").oninput = function(){
  vertical = this.value; 
  document.getElementById("vertical-shadow-value").innerHTML = vertical + "px";
  var output = document.getElementsByClassName("output-rectangle")[1];
  output.style.boxShadow = horizontal + "px " + vertical + "px " + blur_ +"px " + spread + "px " + box_shadow_color;
  //for updated browsers
  show_code(0,"box-shadow",output.style.boxShadow); 
  //for webkit browsers
  show_code(1,"-webkit-box-shadow",output.style.boxShadow);
  //for mozzilla browser
  show_code(2,"-moz-box-shadow",output.style.boxShadow);
};

document.getElementById("blur-radius-slider").oninput = function(){
  blur_ = this.value; 
  document.getElementById("blur-radius-value").innerHTML = blur_ + "px";
  var output = document.getElementsByClassName("output-rectangle")[1];
  output.style.boxShadow = horizontal + "px " + vertical + "px " + blur_ +"px " + spread + "px " + box_shadow_color;
  //for updated browsers
  show_code(0,"box-shadow",output.style.boxShadow); 
  //for webkit browsers
  show_code(1,"-webkit-box-shadow",output.style.boxShadow);
  //for mozzilla browser
  show_code(2,"-moz-box-shadow",output.style.boxShadow);
};

document.getElementById("spread-radius-slider").oninput = function(){
  spread = this.value; 
  document.getElementById("spread-radius-value").innerHTML = spread+"px";
  var output = document.getElementsByClassName("output-rectangle")[1];
  output.style.boxShadow = horizontal + "px " + vertical + "px " + blur_ +"px " + spread + "px " + box_shadow_color;
  //for updated browsers
  show_code(0,"box-shadow",output.style.boxShadow); 
  //for webkit browsers
  show_code(1,"-webkit-box-shadow",output.style.boxShadow);
  //for mozzilla browser
  show_code(2,"-moz-box-shadow",output.style.boxShadow);
};
document.getElementById("box-shadow-color-slider").oninput = function(){
  box_shadow_color = this.value; 
  var output = document.getElementsByClassName("output-rectangle")[1];
  output.style.boxShadow = horizontal + "px " + vertical + "px " + blur_ +"px " + spread + "px " + box_shadow_color;
  //for updated browsers
  show_code(0,"box-shadow",output.style.boxShadow); 
  //for webkit browsers
  show_code(1,"-webkit-box-shadow",output.style.boxShadow);
  //for mozzilla browser
  show_code(2,"-moz-box-shadow",output.style.boxShadow);
}

// text tools 
var horizontal_text = 3; 
var vertical_text = 3; 
var blur_text = 3; 
var text_shadow_color = "#000000"; 
document.getElementById("horizontal-text-slider").oninput = function(){
  horizontal_text = this.value; 
  document.getElementById("horizontal-text-value").innerHTML = horizontal_text + "px";
  var output = document.getElementsByClassName("output-rectangle")[2];
  output.style.textShadow = horizontal_text + "px " + vertical_text + "px " + blur_text +"px " + text_shadow_color;
  //for updated browsers
  show_code(0,"text-shadow",output.style.textShadow); 
};

document.getElementById("vertical-text-slider").oninput = function(){
  vertical_text = this.value; 
  document.getElementById("vertical-text-value").innerHTML = vertical_text+"px";
  var output = document.getElementsByClassName("output-rectangle")[2];
  output.style.textShadow = horizontal_text + "px " + vertical_text + "px " + blur_text +"px " + text_shadow_color;
  //for updated browsers
  show_code(0,"text-shadow",output.style.textShadow);
};

document.getElementById("blur-text-slider").oninput = function(){
  blur_text = this.value; 
  document.getElementById("blur-text-value").innerHTML = blur_text+"px";
  var output = document.getElementsByClassName("output-rectangle")[2]; 
  output.style.textShadow = horizontal_text + "px " + vertical_text + "px " + blur_text +"px " + text_shadow_color;
  //for updated browsers
  show_code(0,"text-shadow",output.style.textShadow);
};

document.getElementById("text-shadow-color-slider").oninput = function(){
  text_shadow_color = this.value; 
  var output = document.getElementsByClassName("output-rectangle")[2];
  output.style.textShadow = horizontal_text + "px " + vertical_text + "px " + blur_text +"px " + text_shadow_color;
  //for updated browsers
  show_code(0,"text-shadow",output.style.textShadow);
};


// gradient tool
var degree = 145; 
var start_color = 20; 
var end_color = 60; 
var gradient_start_color = "#9600ff"; 
var gradient_end_color = "#d22ed4"; 
document.getElementById("degree-slider").oninput = function(){
  degree = this.value; 
  document.getElementById("degree-value").innerHTML = degree+"deg";
  var output = document.getElementsByClassName("output-rectangle")[3];
  output.style.background = "linear-gradient(" + degree + "deg, " + gradient_start_color + " " + start_color + "%, " + gradient_end_color + " " + end_color + "%)";
  //for updated browsers
  show_code(0,"background",output.style.background); 
  //for webkit browsers
  show_code(1,"background","-webkit-" + output.style.background);
  //for mozzilla browser
  show_code(2,"background","-moz-"+output.style.background); 
  //for opera
  show_code(4,"background","-o-"+output.style.background);
};

document.getElementById("start-color-slider").oninput = function(){
  start_color = this.value; 
  document.getElementById("start-color-value").innerHTML = start_color+"%";
  var output = document.getElementsByClassName("output-rectangle")[3];
  output.style.background = "linear-gradient(" + degree + "deg, " + gradient_start_color + " " + start_color + "%, " + gradient_end_color + " " + end_color + "%)";
  //for updated browsers
  show_code(0,"background",output.style.background); 
  //for webkit browsers
  show_code(1,"background","-webkit-" + output.style.background);
  //for mozzilla browser
  show_code(2,"background","-moz-"+output.style.background); 
  //for opera
  show_code(4,"background","-o-"+output.style.background);
};

document.getElementById("end-color-slider").oninput = function(){
  end_color = this.value; 
  document.getElementById("end-color-value").innerHTML = end_color+"%";
  var output = document.getElementsByClassName("output-rectangle")[3];
  output.style.background = "linear-gradient(" + degree + "deg, " + gradient_start_color + " " + start_color + "%, " + gradient_end_color + " " + end_color + "%)";
  //for updated browsers
  show_code(0,"background",output.style.background); 
  //for webkit browsers
  show_code(1,"background","-webkit-" + output.style.background);
  //for mozzilla browser
  show_code(2,"background","-moz-"+output.style.background); 
  //for opera
  show_code(4,"background","-o-"+output.style.background);
};

document.getElementById("gradient-start-color-slider").oninput = function(){
  gradient_start_color = this.value; 
  var output = document.getElementsByClassName("output-rectangle")[3];
  output.style.background = "linear-gradient(" + degree + "deg, " + gradient_start_color + " " + start_color + "%, " + gradient_end_color + " " + end_color + "%)";
  //for updated browsers
  show_code(0,"background",output.style.background); 
  //for webkit browsers
  show_code(1,"background","-webkit-" + output.style.background);
  //for mozzilla browser
  show_code(2,"background","-moz-"+output.style.background); 
  //for opera
  show_code(4,"background","-o-"+output.style.background);
};
document.getElementById("gradient-end-color-slider").oninput = function(){
  gradient_end_color = this.value; 
  var output = document.getElementsByClassName("output-rectangle")[3];
  output.style.background = "linear-gradient(" + degree + "deg, " + gradient_start_color + " " + start_color + "%, " + gradient_end_color + " " + end_color + "%)";
  //for updated browsers
  show_code(0,"background",output.style.background); 
  //for webkit browsers
  show_code(1,"background","-webkit-" + output.style.background);
  //for mozzilla browser
  show_code(2,"background","-moz-"+output.style.background); 
  //for opera
  show_code(4,"background","-o-"+output.style.background);
};

// CSS Cursor 

var cursors = document.getElementsByClassName("cursors");
// Loop through the buttons and add the select class to the current/clicked cursor
for (var i = 0; i < cursors.length; i++) {
    cursors[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("select");
      current[0].classList.remove("select"); 
      this.classList.add("select");  
      this.parentElement.parentElement.style.cursor = this.innerHTML;
      show_code(0,"cursor",this.innerHTML)
    });
}

// Border
var border_width = 2; 
var border_style = "solid";
var border_color = "#6d1eff";
document.getElementById("border-width-slider").oninput = function(){ 
  border_width = this.value; 
  document.getElementById("border-width-value").innerHTML = this.value + "px";
  var output = document.getElementsByClassName("output-rectangle")[4];
  output.style.border = border_width + "px " + border_style + " " + border_color;
  //for updated browsers
  show_code(0,"border",output.style.border);
};

document.getElementById("border-color-slider").oninput = function(){
  border_color = this.value; 
  var output = document.getElementsByClassName("output-rectangle")[4];
  output.style.border = border_width + "px " + border_style + " " + border_color;
  //for updated browsers
  show_code(0,"border",output.style.border);
}
document.getElementById("border-style-slider").oninput = function(){
  border_style = this.value; 
  var output = document.getElementsByClassName("output-rectangle")[4];
  output.style.border = border_width + "px " + border_style + " " + border_color;
  //for updated browsers
  show_code(0,"border",output.style.border);
}

// Border radius 
var top_left = 0; 
var top_right = 0; 
var bottom_right = 0; 
var bottom_left = 0; 
var all_corners = 0; 
document.getElementById("border-top-left-slider").oninput = function(){
  top_left = this.value; 
  document.getElementById("border-top-left-value").innerHTML = top_left+"px";
  var output = document.getElementsByClassName("output-rectangle")[5];
  output.style.borderRadius = top_left+"px " + top_right+"px " + bottom_right+"px " + bottom_left+"px";
  //for updated browsers
  show_code(0,"border-radius",output.style.borderRadius); 
  //for webkit browsers
  show_code(1,"-webkit-border-radius",output.style.borderRadius);
  //for mozzilla browser
  show_code(2,"-moz-border-radius",output.style.borderRadius); 
};

document.getElementById("border-top-right-slider").oninput = function(){
  top_right = this.value; 
  document.getElementById("border-top-right-value").innerHTML = top_right+"px";
  var output = document.getElementsByClassName("output-rectangle")[5];
  output.style.borderRadius = top_left+"px " + top_right+"px " + bottom_right+"px " + bottom_left+"px";
  //for updated browsers
  show_code(0,"border-radius",output.style.borderRadius); 
  //for webkit browsers
  show_code(1,"-webkit-border-radius",output.style.borderRadius);
  //for mozzilla browser
  show_code(2,"-moz-border-radius",output.style.borderRadius);
};

document.getElementById("border-bottom-right-slider").oninput = function(){
  bottom_right = this.value; 
  document.getElementById("border-bottom-right-value").innerHTML = bottom_right+"px";
  var output = document.getElementsByClassName("output-rectangle")[5];
  output.style.borderRadius = top_left+"px " + top_right+"px " + bottom_right+"px " + bottom_left+"px";
  //for updated browsers
  show_code(0,"border-radius",output.style.borderRadius); 
  //for webkit browsers
  show_code(1,"-webkit-border-radius",output.style.borderRadius);
  //for mozzilla browser
  show_code(2,"-moz-border-radius",output.style.borderRadius);
};
document.getElementById("border-bottom-left-slider").oninput = function(){
  bottom_left = this.value; 
  document.getElementById("border-bottom-left-value").innerHTML = bottom_left+"px";
  var output = document.getElementsByClassName("output-rectangle")[5];
  output.style.borderRadius = top_left+"px " + top_right+"px " + bottom_right+"px " + bottom_left+"px";
  //for updated browsers
  show_code(0,"border-radius",output.style.borderRadius); 
  //for webkit browsers
  show_code(1,"-webkit-border-radius",output.style.borderRadius);
  //for mozzilla browser
  show_code(2,"-moz-border-radius",output.style.borderRadius);
};
document.getElementById("border-radius-slider").oninput = function(){
  all_corners = this.value; 
  bottom_right = all_corners; 
  bottom_left = all_corners; 
  top_left = all_corners; 
  top_right = all_corners;
  document.getElementById("border-bottom-left-slider").value = all_corners; 
  document.getElementById("border-bottom-right-slider").value = all_corners; 
  document.getElementById("border-top-right-slider").value = all_corners; 
  document.getElementById("border-top-left-slider").value = all_corners; 
  document.getElementById("border-bottom-right-value").innerHTML = all_corners+"px"; 
  document.getElementById("border-bottom-left-value").innerHTML = all_corners+"px"; 
  document.getElementById("border-top-right-value").innerHTML = all_corners+"px"; 
  document.getElementById("border-top-left-value").innerHTML = all_corners+"px"; 
  
  document.getElementById("border-radius-value").innerHTML = all_corners+"px";
  var output = document.getElementsByClassName("output-rectangle")[5];
  output.style.borderRadius = top_left+"px " + top_right+"px " + bottom_right+"px " + bottom_left+"px";
  //for updated browsers
  show_code(0,"border-radius",output.style.borderRadius); 
  //for webkit browsers
  show_code(1,"-webkit-border-radius",output.style.borderRadius);
  //for mozzilla browser
  show_code(2,"-moz-border-radius",output.style.borderRadius);
};

// color options 
var red = 148; 
var blue = 194; 
var green = 255;
var opacity = 1;  
document.getElementById("red-slider").oninput = function(){
  red = this.value; 
  document.getElementById("red-value").innerHTML = red;
  var output = document.getElementsByClassName("output-rectangle")[6];
  output.style.background = "rgba("+red+","+blue+","+green+","+opacity+")";
  //for updated browsers
  show_code(0,"color",output.style.background);
};
document.getElementById("blue-slider").oninput = function(){
  blue = this.value; 
  document.getElementById("blue-value").innerHTML = blue;
  var output = document.getElementsByClassName("output-rectangle")[6];
  output.style.background = "rgba("+red+","+blue+","+green+","+opacity+")";
  //for updated browsers
  show_code(0,"color",output.style.background);
};
document.getElementById("green-slider").oninput = function(){
  green = this.value; 
  document.getElementById("green-value").innerHTML = green;
  var output = document.getElementsByClassName("output-rectangle")[6];
  output.style.background = "rgba("+red+","+blue+","+green+","+opacity+")";
  //for updated browsers
  show_code(0,"color",output.style.background);
};
document.getElementById("opacity-slider").oninput = function(){
  opacity = this.value/100; 
  document.getElementById("opacity-value").innerHTML = opacity;
  var output = document.getElementsByClassName("output-rectangle")[6];
  output.style.background = "rgba("+red+","+blue+","+green+","+opacity+")";
  //for updated browsers
  show_code(0,"color",output.style.background);
};

// filters
var filters = new Object(); 
function filter_style(){
  var s = ""; 
  for(x in filters){
    if(x == "hue") s += "hue-rotate("+filters[x]+")";
    else s += x+"(" + filters[x] + ")"; 
  }
  return s;
}
document.getElementById("grayscale-filter-slider").oninput = function(){
  filters.grayscale = this.value+"% "; 
  if(this.value == 0) delete filters.grayscale; 
  document.getElementById("grayscale-filter-value").innerHTML = this.value+"%";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style();
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
document.getElementById("sepia-filter-slider").oninput = function(){
  filters.sepia = this.value+"% "; 
  if(this.value == 0) delete filters.sepia;
  document.getElementById("sepia-filter-value").innerHTML = this.value+"%";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style();
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
document.getElementById("blur-filter-slider").oninput = function(){
  filters.blur = this.value+"px "; 
  if(this.value == 0) delete filters.blur; 
  document.getElementById("blur-filter-value").innerHTML = this.value+"px";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style(); 
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
document.getElementById("brightness-filter-slider").oninput = function(){
  filters.brightness = this.value+"% "; 
  if(this.value == 100) delete filters.brightness; 
  document.getElementById("brightness-filter-value").innerHTML = this.value+"%";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style();
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
document.getElementById("hue-rotate-filter-slider").oninput = function(){
  filters.hue = this.value+"deg "; 
  if(this.value == 0) delete filters.hue; 
  document.getElementById("hue-rotate-filter-value").innerHTML = this.value+"deg";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style();
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
document.getElementById("saturate-filter-slider").oninput = function(){
  filters.saturate = this.value+"% "; 
  if(this.value == 100) delete filters.saturate; 
  document.getElementById("saturate-filter-value").innerHTML = this.value+"%";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style();
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
document.getElementById("opacity-filter-slider").oninput = function(){
  filters.opacity = this.value+"% "; 
  if(this.value == 100) delete filters.opacity; 
  document.getElementById("opacity-filter-value").innerHTML = this.value+"%";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style();
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
document.getElementById("contrast-filter-slider").oninput = function(){
  filters.contrast = this.value+"% "; 
  if(this.value == 100) delete filters.contrast; 
  document.getElementById("contrast-filter-value").innerHTML = this.value+"%";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style(); 
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
document.getElementById("invert-filter-slider").oninput = function(){
  filters.invert = this.value+"% "; 
  if(this.value == 0) delete filters.invert; 
  document.getElementById("invert-filter-value").innerHTML = this.value+"%";
  var output = document.getElementsByClassName("output-rectangle")[7];
  output.style.filter = filter_style(); 
  //for updated browsers
  show_code(0,"filter",output.style.filter); 
  //for webkit browsers
  show_code(1,"-webkit-filter",output.style.filter);
};
