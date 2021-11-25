function split(str, sep){
    let t = new Array();
    let strtmp = "";
    let index = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]!==sep){
            strtmp += str[i];
        }else if(str[i]===sep){
            t[index] = strtmp;
            index++;
            strtmp = "";
        }
    }
    if(strtmp.length!==0)t[index]=strtmp;
    return t;
}

console.log("test de separateur",' ');