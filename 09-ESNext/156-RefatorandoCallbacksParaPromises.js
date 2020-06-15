// com promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]).then(x => console.log(x)).then(turmas => [].concat(...turmas)).then(x => console.log(x)).then(alunos => alunos.map(aluno => aluno.nome)).then(nomes => conolse.log(nomes))

getTurma('D').catch(e => console.log(e.message))