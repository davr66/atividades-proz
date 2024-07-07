# Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
# 1. Soma
# 2. Subtração
# 3. Multiplicação
# 4. Divisão

# Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.
def calcular(num1,num2,operacao):
    if(type(num1) == str or type(num1) == bool):
        return 0
    elif(type(num2) == str or type(num2) == bool):
        return 0
        
    match operacao:
        case 1:
            return num1 + num2
        case 2:
            return num1 - num2
        case 3:
            return num1 * num2
        case 4:
            return num1 / num2
        case _:
            return "Operação inválida"

res = calcular(2,2,1)
print(res) #retorna 4
