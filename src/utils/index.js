const debounce = (f, time) => {
    let timeout
    /**
     * 
     */
    return (...args) => {
        const call = f.bind(this, args)
        clearTimeout(timeout)
        timeout = setTimeout(call, time)
    }
}

export {
    debounce
}