function DeleteMe(){
    document.getElementById("MyResult").value="";
}

function Calculator(NewValue){
    document.getElementById("MyResult").value+=NewValue;
}


function Backspace() {
    var value = document.getElementById("MyResult").value;
    document.getElementById("MyResult").value = value.substr(0,value.length - 1);
}

function Answer(){
    var a = document.getElementById("MyResult").value;
    var b = eval(a)
    document.getElementById("MyResult").value=b;
}