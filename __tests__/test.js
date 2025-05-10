const {stat} = require('../dist/solar.esm');
const isEmptyStat = stat(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123)
        }, 2000);
    })
}, 'isEmpty')
isEmptyStat()