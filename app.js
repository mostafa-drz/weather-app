const yargs = require('yargs');
const { getTemperature } = require('./weather')
const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true,
        }
    })
    .help('h')
    .alias('help')
    .argv;
getTemperature(encodeURIComponent(argv.address));