const Calculator = function () {
    inputFirst = 0
    inputSecond = 0
    array= []
}

Calculator.prototype.inputFirst = function (a) {
    this.inputFirst = a
}
Calculator.prototype.inputSecond = function (b) {
    this.inputSecond = b
}

Calculator.prototype.add = function () {
    console.log(
        this.inputFirst + this.inputSecond)
}

Calculator.prototype.subtract = function () {
    console.log(
        this.inputFirst - this.inputSecond)
}

Calculator.prototype.multiply = function () {
    console.log(
        this.inputFirst * this.inputSecond)
}

Calculator.prototype.divide = function () {
    if (this.inputSecond === 0) {
        console.log('nie dziel przez zero')
    } else
        console.log(this.inputFirst / this.inputSecond)
}

Calculator.prototype.power = function () {
    this.array= Array(this.inputSecond)
    this.array.fill(this.inputFirst)
    
   
}


const calc = new Calculator()

calc.inputFirst(2)
calc.inputSecond(3)

calc.add() //5in browser
calc.subtract() //-1 in browser
calc.multiply()
calc.divide()
calc.power()