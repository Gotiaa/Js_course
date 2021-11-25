function contains(haystack, needle, startIndex=0){
    if(startIndex>haystack.length)return -1;
    for(let i=startIndex;i<haystack.length;i++){
        if(haystack.substring(i, i + needle.length) == needle){
            return i;
        }
    }
    return -1;
}