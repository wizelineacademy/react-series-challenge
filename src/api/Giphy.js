const generateRandomPrices = () => ({
    BTC: parseInt(8500 + 1000 * Math.random(), 10),
    ETH: parseInt(860 + 100 * Math.random(), 10),
    LTC: parseInt(155 + 10 * Math.random(), 10),
    XRP: parseInt(.98 * Math.random(), 10),
    fetching: false,
});

export const loadTrending = () => {
    console.log('[API] loading prices...');
    return new Promise(resolve => setTimeout(() => resolve(generateRandomPrices()), 2000));
};