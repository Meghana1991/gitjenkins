class Calculator {
    add(...numbers) {
        if(numbers.length === 0) throw new Error("No Numbers")        
        return numbers.reduce((sum,num) => sum + num, 0)
    }
    mul(a, b) {
        return a * b
    }
}

module.exports = Calculator;
  
