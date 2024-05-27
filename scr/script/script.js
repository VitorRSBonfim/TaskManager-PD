
/* Data */

function diasNoMes(mes, ano) {
    var data = new Date(ano, mes, 0);
    return data.getDate();
}

const date = new Date();
let mes = date.getMonth();
let ano = date.getFullYear();
console.log(ano)

for ( i = 1; i < diasNoMes(mes + 1, ano) + 1 ; i ++ ) {
    $("#lista-data").append("<p> " + i + " </p>")
}



