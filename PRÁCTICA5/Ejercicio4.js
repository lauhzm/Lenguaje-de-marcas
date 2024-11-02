function calcular() {
    let op1 = parseFloat(document.getElementById("op1").value) ;
    let op2 = parseFloat(document.getElementById("op2").value) ;
    let operacion = document.getElementById("operacion").value ;
    let resultado ;

    switch (operacion) {
        case "suma":
            resultado = op1+op2 ;
            break;
        case "resta":
            resultado = op1-op2 ;
            break;
        case "multiplicacion":
            resultado = op1*op2 ;
            break;
        case "division":
            resultado = op1/op2 ;
            break;
    }

    document.getElementById("resultado").value = resultado ; 

}