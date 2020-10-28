
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

let genes2 = []
genes2 .push(genes[0]) 
genes2 .push(genes[1]) 
genes2 .push(genes[genes.length-1])
genes2 .push(genes[2])
genes2 .push(genes[genes.length-2]) 
genes2 .push(genes[genes.length-2]) 
genes2.unshift("FXT")
console.log(genes2) 