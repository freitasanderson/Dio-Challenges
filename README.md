# Dio-Challenges
Desafios dos Bootcamps Dio

Aqui listo os desafios de bootcamps e cursos feitos na Digital Innovation One.

Para auxiliar na resolução, recomendo que utilize o Python Tutor e o Replit.

OBS: Os códigos estão adaptados para rodar utilizando os snippets do editor de texto da Dio. Funções como a 'print' terão que ser adaptadas para 'console.log' por exemplo.

- Funções como **gets()** podem ser subistituida utilizando prompt-sync.

De:

```
let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 
```

Para:

```
const prompt = require('prompt-sync')();
let n = parseInt(prompt('Digite um numero: ')); 
```
    npm install prompt-sync in the terminal
