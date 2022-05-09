
var array = []
var input = document.getElementById("input");

input.addEventListener("keydown", function (e) {
    document.getElementById('imprimir').innerHTML='';
    if(input.value!=''){
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            validate(e);
        }
    }
});

function validate(e) {
    let value = document.getElementById('input').value;
    array.push(value);
    array.push('<br>');
    let imprimir = array.toString()
    document.getElementById('imprimir').innerHTML=imprimir.replace(/,/g, "");

}

function limpiar(){
    array = [];
    document.getElementById('imprimir').innerHTML='';
}