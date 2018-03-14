/* global localStorage */

const getItem = item => localStorage.getItem(item)

const removeItem = item => localStorage.removeItem(item)

const setItem = (item, value) => localStorage.setItem(item, value)

export { getItem, removeItem, setItem }
