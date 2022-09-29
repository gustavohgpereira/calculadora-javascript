var n1 = document.getElementById("n1")
        var n2 = document.getElementById("n2")
        var res = document.getElementById("res")

        function soma() {
            var n1 = window.document.getElementById("n1")
            var n2 = window.document.getElementById("n2")
            var res = window.document.getElementById("res")

            var num1 = Number(n1.value)
            var num2 = Number(n2.value)
            var r = num1 + num2
            res.innerHTML = "O resultado da soma é: " + r
        }
        function subtrair() {
            var n1 = window.document.getElementById("n1")
            var n2 = window.document.getElementById("n2")
            var res = window.document.getElementById("res")

            var num1 = Number(n1.value)
            var num2 = Number(n2.value)
            var r = num1 - num2
            res.innerHTML = "O resultado da subtração é: " + r
        }
        function multiplicar() {
            var n1 = window.document.getElementById("n1")
            var n2 = window.document.getElementById("n2")
            var res = window.document.getElementById("res")

            var num1 = Number(n1.value)
            var num2 = Number(n2.value)
            var r = num1 * num2
            res.innerHTML = "O resultado da multiplicação é: " + r
        }
        function dividir() {
            var n1 = window.document.getElementById("n1")
            var n2 = window.document.getElementById("n2")
            var res = window.document.getElementById("res")

            var num1 = Number(n1.value)
            var num2 = Number(n2.value)
            var r = num1 / num2
            if(num2==0){
                res.innerHTML = "Não é possível dividir por zero(0)"
            }
            else{
                res.innerHTML = "O resultado da divisão é: " + r     
            }
            
        }
         