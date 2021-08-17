// Diferencia entre los anos
export function obtenerDiferenciaYear(year) { 
    return new Date().getFullYear() - year;
}

// diferencia entre marcas
export function calcularMarca(marca){

    let incremento;
    
    switch (marca) {
        case 'Europeo':
                incremento = 1.30;            
                break;
            case 'Americano':
                incremento = 1.15;            
                break;
            case 'Asiatico':
                incremento = 1.05;            
                break;   
        default:
            break;
    }
    return incremento;
}
// Calcula el tipo de seguro

export function obtenerPlan(plan){
    return (plan === 'Basico') ? 1.20 : 1.50;
}

// Pasar la primera letra en mayuscula, Auque ya las tenia en mayusculas
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
} 