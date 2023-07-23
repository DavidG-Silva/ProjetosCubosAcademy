![](https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png)

# Purificação


Você e seus amigos estavam fazendo um projeto da faculdade e encontraram um banco de dados com nomes científicos de animais que poderia ajudá-los, porém os dados estavam corrompidos.

O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.

A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

| Dado corrompido |	Dado purificado|
| - | - |
| *Canis %lupus )familiaris	| Canis lupus familiaris |
| Felis) silvestris *catus&	| Felis silvestris catus |
| $Ailuropoda@ melanoleuca!	| Ailuropoda melanoleuca |

**Input Format**

A entrada será sempre uma string representando um nome corrompido com alguns dos seguintes caracteres !@#$%&*().

**Output Format**

A saída deverá ser sempre uma string representando o nome purificado sem os seguinte caracteres especiais !@#$%&*().


**Sample Input 0**
```
*Canis %lupus )familiaris
``````

**Sample Output 0**
```
Canis lupus familiaris
```