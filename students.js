var a=[];
function buttonsub(){
    var a1 = document.getElementById("1st").value;
    var a2 = document.getElementById("2st").value;
    var a3 = document.getElementById("3st").value;
    var a4 = document.getElementById("4st").value;

    a.push(a1);
    a.push(a2);
    a.push(a3);
    a.push(a4);
    console.log(a);

    document.getElementById("empty").innerHTML=a;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function buttons(){
    a.sort();

    console.log(a);
    document.getElementById("empty").innerHTML=a;
}