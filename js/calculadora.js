
var operador=""; //variable global

function borrar(){
	operador="";
	document.calculadora.operando1.value= 0;
	document.calculadora.operando2.value= 0;
	document.calculadora.resultado.value= 0;
}
function igual(){
	var valor1=document.calculadora.operando1.value;
	var valor2=document.calculadora.operando2.value;
		document.calculadora.resultado.value=eval(valor1+operador+valor2); 
//eval compara los operadores y hace la operacion regresand el resultado. concatenas los valores y operador
}

function operadores(ope){
	operador=ope;
}

function numeros(num){
	if(operador=="0"){ //escribir en el operando1
		var valorInicial= document.calculadora.operando1.value;
		if(valorInicial==""){ //elimino el cero
			document.cal.operando1.value="";
		} //concatena los valores de num con los del operando1
		document.calculadora.operando1.value = 
		document.calculadora.operando1.value + num;
	}else{ //entonces se escribe en el operando2
		var valorInicial= document.calculadora.operando2.value;
		if(valorInicial=="0"){ //elimino el cero
			document.cal.operando2.value="";
		} //concatena los valores de num con los del operando1
		document.calculadora.operando2.value = 
		document.calculadora.operando2.value + num;
	}
}
}
