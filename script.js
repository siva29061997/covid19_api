
var div = document.createElement('div');
div.innerHTML=`<input class="input" type ="text" id="txt">
<button type="button" class="color" onclick="foo()"> Search </button> </br>
<div class="pera" id="active"></div>
<div class="pera" id="susu"></div>
<div class="pera" id="siva"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function foo() {
    let cc = document.getElementById("txt").value;
    console.log(cc);
    let res = await fetch(`https://api.covid19api.com/dayone/country/${cc}`)
    let res1 = await res.json();
    console.log(res1);

    let index = res1.length-1;
    var result = res1[index].Active;
    console.log(result);
    document.getElementById("active").innerText=`Total Active Cases:${result}`;

    let index1 = res1.length-1;
    var result1 = res1[index1].Deaths;
    document.getElementById("susu").innerHTML=`Total Death Cases:${result1}`;

    let index2 = res1.length-1;
    var result2 = res1[index2].Confirmed;
    document.getElementById("siva").innerHTML=`Total Confirmed Cases:${result2}`;
}

