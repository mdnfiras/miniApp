var modID = [0, 0, 0, 0];
var awws = new Array();
function add(type, el){
	el.id = "mod"+type+"_"+modID[type];
	el = el.getElementsByClassName("modcontent")[0];
	switch(type){
		case 0:
			el.innerHTML = '<span style="font-size:15px;">type 1</span>';
		break;
		case 1:
			el.innerHTML = '<div style="width:100%;height:100%;" id="aww' + modID[type] + '"></div>';
			awws[modID[type]] = new AwwBoard('#aww'+modID[type], {
            apiKey: '391e33ce-16fb-41e9-aced-ad424988deba',
            autojoin: true,
            boardLink: '5aj5342-56tz-uhjk-9874',
            sizes: [3, 5, 8, 13, 20],
            fontSizes: [10, 12, 16, 22, 30],
            menuOrder: ['colors', 'sizes', 'tools', 'admin',
              'utils'],
            tools: ['pencil', 'eraser', 'text', 'image'],
            colors: [ "#000000", "#f44336", "#4caf50", "#2196f3",
              "#ffc107", "#9c27b0",     "#e91e63", "#795548"],
            defaultColor: "#000000",
            defaultSize: 8,
            defaultTool: 'pencil',
     });
		break;
		case 2:
			el.innerHTML = '<span style="font-size:15px;">type 2</span>';
		break;
		case 3:
			el.innerHTML = '<span style="font-size:15px;">type 3</span>';
		break;
		case 4:
			el.innerHTML = '<span style="font-size:15px;">type 4</span>';
		break;
		case 5:
			el.innerHTML = '<span style="font-size:15px;">type 5</span>';
		break;
	}
	modID[type]++;
}

function closeb(el){
	el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}

function addModuleSpace(type){
	el = document.createElement('div');
	el.className = "draggable resizable modwin";
	
	el1 = document.createElement('div');
	el1.className = "modheader";
	el1.innerHTML = '<span class="tt">Draggable Module</span><div class="closeb" onclick="closeb(this);">X</div>';
	
	el2 = document.createElement('div');
	el2.className = "modcontent";
	
	el.appendChild(el1);
	el.appendChild(el2);
	
	document.getElementById("workspace").appendChild(el);
	dragElement(el);
	add(type, el);
}

// Make the DIV element draggable:

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.firstChild) {
    // if present, the header is where you move the DIV from:
    elmnt.firstChild.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    if((elmnt.offsetTop - pos2 < (document.getElementById("workspace").offsetHeight - elmnt.offsetHeight)) &&
		(elmnt.offsetTop - pos2 > 0)) elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    if((elmnt.offsetLeft - pos1 < (document.getElementById("workspace").offsetWidth - elmnt.offsetWidth)) &&
		(elmnt.offsetLeft - pos1 > 0)) elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// ----------------------------   VIEWER   ----------------------------------------

$('#my-button').click(function(){
    $('#my-file').click();
});