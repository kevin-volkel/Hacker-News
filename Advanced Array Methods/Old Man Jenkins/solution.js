let colArr = []
let rowArr = []
//decoding the gridNum
function decode(code, mode = 'num') {
    let col = code.substring(0, 7).split('')
    let row = code.substring(7, 10).split('')
    // console.log(`Row: ${row} Col: ${col}`);

    let colRange = [0, 127];
    col.map( (dir) => {
        if(dir == 'F') colRange[1] = Math.floor((colRange[1] + colRange[0]) / 2)
        if(dir == 'B') colRange[0] = Math.ceil((colRange[1] + colRange[0]) / 2)
    })

    let rowRange = [0, 7]
    row.map( (dir) => {
        if(dir == 'L') rowRange[1] = Math.floor((rowRange[1] + rowRange[0]) / 2)
        if (dir == 'R') rowRange[0] = Math.ceil((rowRange[1] + rowRange[0]) / 2)
    })

    gridNum = colRange[0] * 8 + rowRange[0]

    if(mode == 'num') return gridNum
    if(mode == 'rowcol') {
        rowArr.push(rowRange[0])
        colArr.push(colRange[0])
    }
}

//finding largest and smallest num
let largestNum = 0
let lowestNum = 1024
input.forEach( (square) => {
    let num = decode(square)
    if (num < lowestNum) lowestNum = num
    if (num > largestNum) largestNum = num
})
console.log(`Largest: ${largestNum}  Lowest: ${lowestNum}`);

//finding missing number
let missingNumber = 0;

for(let i = lowestNum; i <= largestNum; i++){
    if(!input.some( (square) => decode(square) == i)){
        missingNumber = i;
        break
    }
}
console.log(`Missing Number: ${missingNumber}`);






//encode the missing number
function encodeNum(num){
    let row = num % 8
    let col = (num - row) / 8
    console.log(`Col: ${row} Row: ${col}`);

    let rowRange = [0, 7]
    let rowCode = ""
    for(let i = 0; i < 3; i++){
        let mid = (rowRange[0] + rowRange[1]) / 2
        if(row < mid){
            rowCode += "L"
            rowRange[1] = Math.floor(mid)
        }else if(row > mid){
            rowCode += "R"
            rowRange[0] = Math.ceil(mid)
        }
    }

    let colRange = [0, 127]
    let colCode = ""
    for(let i = 0; i < 7; i++){
        let mid = (colRange[0] + colRange[1]) / 2
        if(col < mid) {
            colCode += "F"
            colRange[1] = Math.floor(mid)
        }
        if(col > mid) {
            colCode += "B"
            colRange[0] = Math.ceil(mid)
        }
    }
    return colCode + rowCode
}

console.log(encode(missingNumber)); //BFFFFFFRLR

input.map( (code) => {
    decode(code, 'rowcol')
})

let rowTotal = rowArr.reduce( (total, row) => total + row)
let colTotal = colArr.reduce( (total, col) => total + col)
let lockCode = String((colTotal * rowTotal)).split("0").join('')
console.log(`Lockcode: ${lockCode}`);

//Next Level: Make a map of the yard
let yard = []
for(let i = 0; i < 128; i++){
    yard.push(['.', '.', '.', '.', '.', '.', '.', '.'])
}

input.map( (code) => {
    let decoded = decode(code)
    let row = (decoded % 8)
    let col = (decoded - row) / 8

    yard[col][row] = '#'
})

for(row of yard){
    let div = document.createElement('div')
    div.textContent = row.join(' ')
    document.getElementById("yardContainer").appendChild(div)
}