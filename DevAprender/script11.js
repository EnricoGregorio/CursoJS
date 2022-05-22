// Clonando objetos.
const mouse = {
    marca : 'Logitech',
    semFio : true,
    ligar : function() {
        return "ligado";
    }
};

// Clonando e add propriedades.
const newMouse = Object.assign({
    bateria : 5000
}, mouse);
console.log(newMouse);


const newMouse2 = {...mouse};
console.log(newMouse2);