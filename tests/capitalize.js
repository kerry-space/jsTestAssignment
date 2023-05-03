export function capitalize (str){
    if(str){
        str.trim();
        let firstIndex = str.charAt(0);
        firstIndex = firstIndex.toUpperCase();
        const smallLetter = str.slice(1, str.length);
        const capitStr = firstIndex.concat(smallLetter);
        return capitStr;
    }else{
        console.log("string is empty")
    }
}

