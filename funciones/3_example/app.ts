function generateError(message: string): never {
    throw new Error(message);
}

generateError("Ha ocurrido un error")


function generateErrorVariante(message: string): never | boolean {
    if (message === "hola") {
        return true;
    }
    throw new Error(message);
}

generateErrorVariante("Ha ocurrido un error")