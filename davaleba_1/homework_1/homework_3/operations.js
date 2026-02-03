import { numbers } from "./data.js";
function getSum() {
    const total = numbers.reduce((acc, val) => {
        return acc + val;
}, 0)
    return total
} 
export {getSum}