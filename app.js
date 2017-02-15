/**
 * Created by wetcouch on 07.02.2017.
 */
class Permission {
    toStr(num) {
        let str = num.toString().split("");
        // 4 = Read, 2 = Write, 1 = eXecute
        for (let i = 0; i < str.length; i++) {
            if (str[i] == 0) {
                str[i] = '---'
            } else if (str[i] == 1) {
                str[i] = '--x'
            } else if (str[i] == 2) {
                str[i] = '-w-'
            } else if (str[i] == 3) {
                str[i] = '-wx'
            } else if (str[i] == 4) {
                str[i] = 'r--'
            } else if (str[i] == 5) {
                str[i] = 'r-x'
            } else if (str[i] == 6) {
                str[i] = 'rw-'
            } else if (str[i] == 7) {
                str[i] = 'rwx'
            }
        }
        str = str.join("");
        return str;
    }

    toNum(str) {
        let num = str.split("");
        let count =  0;
        let part = 0;
        let newArr = [];
        if(num.length > 9) {
            num.shift();
        }

        for (let i = 0; i < num.length; i++) {


            if (num[i] == 'r') {
                part += 4;
                count++
            } else if (num[i] == 'w') {
                part += 2;
                count++
            } else if (num[i] == 'x') {
                part+= 1;
                count++
            } else if (num[i] == '-') {
                count++
            }

            if (count >= 3) {
                count = 0;
                newArr.push(part);
                part = 0;
            }
        }
        return newArr;
    }
}

let perm = new Permission();
let numVal = document.getElementById('numVal');
let strVal = document.getElementById('strVal');

function convertNum () {
    strVal.value = perm.toStr(numVal.value);
}

function convertStr () {
    numVal.value = perm.toNum(strVal.value);
}

new Vue({
    el: '#app',
    data: {
        permss: []
    }


});