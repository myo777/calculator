
class Memory {

    constructor() {
        //on initialization, first check if a number is set in the local storage
        //localStorage can only store strings, so I also cast to a float
        let numberFromStorage = parseFloat(localStorage.getItem("memoryNumber"));
        //if the localStorage has no valid number, default to 0
        this.setNumber(isNaN(numberFromStorage) ? 0 : numberFromStorage);
    }

    
    setNumber(number) {
        this.number = number;
        localStorage.setItem("memoryNumber", number);
        return this.number;
    }

    
    addNumber(number) {
        //this.number gets updated with the new number and returns itself
        return this.setNumber(this.number += number);
    }

    
    subtractNumber(number) {
        //this.number gets updated with the new number and returns itself
        return this.setNumber(this.number -= number);
    }

    
    reset() {
        return this.setNumber(0);
    }
}