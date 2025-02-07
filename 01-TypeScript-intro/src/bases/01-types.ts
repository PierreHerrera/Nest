export let name: string = "Pierre"
export const age: number = 31
export const isValid: boolean = true

name = "Melissa"


export const templateString = `Esto es un string multiliena que puede tener 
" dobles
' Simples
imyectar valores \$${name}
expresiones ${1+1}
numero: ${age}
booleanos: ${isValid}
`

console.log(templateString)