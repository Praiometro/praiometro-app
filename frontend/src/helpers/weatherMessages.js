
function getHumidityMessage(humidity) {
    if (humidity >= 80) {
        return "Umidade alta. Vista roupas leves!";
    } else if (humidity >= 60) {
        return "Sem riscos, mas não deixe de se hidratar!";
    } else if (humidity >= 40) {
        return "Risco moderado. Hidrate-se!";
    } else if (humidity >= 20) {
        return "Risco alto. Hidrate-se e fique em locais frescos!";
    } else {
        return "Risco extremo. Hidrate-se ao máximo!";
    }
}

function getSensationMessage(temperature) {
    if (temperature >= 36) {
        return "Calor extremo. Fique em locais frescos e ventilados!";
    } else if (temperature >= 26) {
        return "Calor. Hidrate-se e use protetor solar!";
    } else if (temperature >= 16) {
        return "Clima agradável. Aproveite!";
    } else {
        return "Frio. Use roupas quentes e proteja-se do vento!";
    }
}

function getUVIndexMessage(uvIndex) {
    if (uvIndex <= 2) {
        return "Risco baixo. Use protetor solar se ficar exposto por muito tempo.";
    } else if (uvIndex <= 5) {
        return "Risco moderado. Use protetor solar e evite exposição direta ao sol.";
    } else if (uvIndex <= 7) {
        return "Risco alto. Use protetor solar e evite exposição direta ao sol durante o pico do dia.";
    } else if (uvIndex <= 10) {
        return "Risco muito alto. Use roupas protetoras e evite exposição direta ao sol.";
    } else {
        return "Risco extremo. Evite exposição direta ao sol e use roupas protetoras.";
    }
}

function getUVIndexLevel(uvIndex) {
    if (uvIndex <= 2) {
        return 'Baixo';
    } else if (uvIndex <= 5) {
        return 'Moderado';
    } else if (uvIndex <= 7) {
        return 'Alto';
    } else if (uvIndex <= 10) {
        return 'Muito Alto';
    } else {
        return 'Extremo';
    }
}

export {
    getHumidityMessage,
    getSensationMessage,
    getUVIndexMessage,
    getUVIndexLevel
};