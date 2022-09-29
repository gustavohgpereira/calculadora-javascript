var n1 = document.getElementById("n1")
        var n2 = document.getElementById("n2")
        var res = document.getElementById("res")

        function imc() {
            var n1 = window.document.getElementById("n1")
            var n2 = window.document.getElementById("n2")
            var res = window.document.getElementById("res")

            var a = Number(n1.value)
            var p = Number(n2.value)
            var r = p / (a*a)
            if(r> 18){
                res.innerHTML = "O IMC é " + r + ", indicando magreza"
                res.style = "background-color:red;color:white"  
            }
            else if(r > 18 && r <24){
                res.innerHTML = "O IMC é " + r + ", indicando peso normal"
                res.style = "background-color:red;color:white" 
            }
            else{
                res.innerHTML = "O IMC é " + r + ", indicando obesidade"
                res.style = "background-color:red;color:white" 
            }
        }