function calcular() {
    let op1 = document.getElementById("op1").value ;
    let op2 = document.getElementById("op2").value ;
    let operacion = document.getElementById("operacion").value ;
    let resultado ;

    switch (operacion) {
        case "suma":
            resultado = a+b ;
            break;
        case "resta":
            resultado = a-b ;
            break;
        case "multiplicacion":
            resultado = a*b ;
            break;
        case "division":
            resultado = a/b ;
            break;
    }

    document.getElementById("resultado").value = resultado ; 

}