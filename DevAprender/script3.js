function verifySpeed(speed) {
    const velMaxima = 70;
    const kmPonto = 5;
    if (speed <= velMaxima) {
        return "Está no limite";
    } else {
        const pontos = Math.floor((speed - velMaxima) / kmPonto);

        if (pontos > 12) {
            return "Carteira suspensa!";
        } else {
            return "Pontos: ", pontos;
        }
    }
}

console.log(verifySpeed(128));