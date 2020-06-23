
// const defaultBackgroundColor = '#86bbff'
// const digits = 2
// const local = 'pt-br'
// const currency
export default function (value) {

    let val = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

