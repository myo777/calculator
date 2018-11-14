


class Error {

    
    throwError(message) {
        alert(message);
        throw message;
    }

    
    throwUnsupportedError(functionType) {
        return this.throwError(`${functionType} is an unsupported operation`);
    }


}