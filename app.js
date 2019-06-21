process.stdin.resume()
process.stdin.setEncoding('utf8')
console.log('what s your age ?')
process.stdin.on('data', (age) => {
    if (isNaN(age) == false && age < 99) {
        console.log('born ' + ('2019' - age));
    }
    else console.log('your age is incorrect ...');
    process.exit()
})