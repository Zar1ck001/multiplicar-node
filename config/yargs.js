const opts = {
    base: {
        demmand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear un archivo de la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}