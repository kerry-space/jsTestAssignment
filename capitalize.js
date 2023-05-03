export function capitalize (str){
    // if(str){
    //     str.trim();
    //     let firstIndex = str.charAt(0);
    //     firstIndex = firstIndex.toUpperCase();
    //     const smallLetter = str.slice(1, str.length);
    //     const capitStr = firstIndex.concat(smallLetter);
    //     return capitStr;
    //     str = str.trim();
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // }else{
    //     console.log("string is empty")
    // }

    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

