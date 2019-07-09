const reverseString= (s)=>{
    if (s.length===1){
        return s
    }
    let remaining = s.split('')
    const lastLetter = s[s.length-1]
    remaining.pop()
    
    const ir = reverseString(remaining.join(''))
    console.log(`letter is: ${lastLetter}, ir is: ${ir}`)
    return lastLetter + ir

}

console.log(reverseString('Jennifer'))
