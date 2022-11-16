const getStock = (req, res) => {
    res.send([{
        symbol: 'META',
        name: 'Meta Platforms, Inc.',
        price: 113.03,
        change: -4.05,
        yearHigh: 353.83
    }])
}

module.exports = {
    getStock
}