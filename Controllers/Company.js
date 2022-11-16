const getCompany = (req, res) => {
    res.send([{
        symbol: 'AAPL',
        companyName: 'Apple Inc.',
        exchange: 'NASDAQ Global Select',
        industry: 'Consumer Electronics',
        website: 'https://www.apple.com'
    }])
}

module.exports = {
    getCompany
}