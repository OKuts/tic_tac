export const getResult = (arr, step) => {
    // diagonals
    if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0]) {
        return [`${arr[0]} won`, [0, 4, 8]]
    }
    if (arr[2] === arr[4] && arr[2] === arr[6] && arr[2]) {
        return [`${arr[2]} won`, [2, 4, 6]]
    }

    // rows
    const temp = []
    for (let i = 0; i < 3; i++) {
        const row = arr.slice(i * 3, i * 3 + 3)
        temp.push(row)
        const symbols = [...new Set(row)]
        if (symbols[0] && symbols.length === 1) {
            return [`${symbols[0]} won`,[i * 3, i * 3 + 1, i * 3 + 2]]
        }
    }

    // columns
    for (let i = 0; i < 3; i++) {
        if (temp[0][i] === temp[1][i] && temp[0][i] === temp[2][i] && temp[0][i]) {
            return [`${temp[0][i]} won`,[i, i + 3, i + 6]]
        }
    }

    return step === 9 ? ['standoff',[]]  : ['', []]
}