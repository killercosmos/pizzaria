var awesome_array = ["1. Double cheese margherita","2. Tandoori paneer pizza","3. Peppe Paneer","4. Chicken Pizza","4. Chicken Pizza"];
function showmenu()
{
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("2").style.visibility = "visible";
    document.getElementById("3").style.visibility = "visible";
    document.getElementById("4").style.visibility = "visible";
    document.getElementById("5").style.visibility = "visible";
    document.getElementById("6").style.visibility = "visible";

}
function hidemenu()
{
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("3").style.visibility = "hidden";
    document.getElementById("4").style.visibility = "hidden";
    document.getElementById("5").style.visibility = "hidden";
    document.getElementById("6").style.visibility = "hidden";

}
function add_item()
{
    document.getElementById("add").style.visibility = "visible";
    document.getElementById("submit").style.visibility = "visible"
   

}
function close()
{
    document.getElementById("add").style.visibility = "hidden"
}

function submit()
{
    var item = document.getElementById("add").value;
    document.getElementById("p1").innerHTML = ("<br>" + "New Item!!" + " " + item+ " Added");
    document.getElementById("p1").style.visibility = "visible";
    
}
