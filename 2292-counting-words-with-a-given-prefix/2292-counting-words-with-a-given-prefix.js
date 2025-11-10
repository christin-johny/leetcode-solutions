/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count=0;
    for(let i=0;i<words.length;i++){
        let temp =0
        let word= words[i]
        for(let j=0;j<pref.length;j++){
            if(word[j] == pref[j]){
                temp++
            }else{
                break
            }
        }
        if(temp ==pref.length){
            count++
        }
    }
    return count;
};