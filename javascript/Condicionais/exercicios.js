// Se salario for menor que 5000 terá bonus de 10%;
// Salario maior ou igual a 11000 tera bonus de 5%;
// Salario menor que 11000 terá bonus de 7%

const salario = 8500;

if(salario < 5000){
    let bonus = 10
    console.log(`Parabens você vai receber um bonus de  ${bonus}%` )
}
else if (salario >= 11000){
    let bonus = 5
    console.log(`Parabens você vai receber um bonus de  ${bonus}%` )
}
else{
    let bonus = 7
    console.log(`Parabens você vai receber um bonus de  ${bonus}%` )
}

