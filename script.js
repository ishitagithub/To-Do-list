function addTask(){var input=document.getElementById("in")
var newtask=input.value;
  
if (newtask!=""){
  var it=document.createElement("li");
  it.innerHTML='<input type="button"class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" />' + newtask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(it);
  input.value=""
  input.placeholder="enter next task"
  }}
function markDone(item){item.className="finished";}
function remove(item){
  if (item.className=="finished")
  {item.remove();}}

function about()
{var text=document.getElementById("divab");
 text.innerHTML = 'Author is Ishita Agarwal';}
function clearab()
{var text=document.getElementById("divab");
 text.innerHTML = '';}