function startsWith(str, start){
    if(str.length < start.length){return false}
    else{
        for(let i=0;i<start.length;i++){
            if(start[i]===str[i])continue;
            else return false;
        }
    }
    return true;
}