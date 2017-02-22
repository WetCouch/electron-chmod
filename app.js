/**
 * Created by wetcouch on 07.02.2017.
 */



let app = new Vue({
    el: '#app',
    data: {
        permss: [],
        mesStr: '---------',
        mesNum: '000'
    },
    watch: {
        permss: function () {
            this.mesStr = [];
            this.mesNum = [];
            let num = [];
            num[1] = 0;
            num[2] = 0;
            num[3] = 0;

            for (i = 1; i <= 3; i++) {
                if (this.permss.includes('read'+i)) {
                    this.mesStr.push('r');
                    num[i] += 4;
                } else {
                    this.mesStr.push('-')
                }

                if (this.permss.includes('write'+i)) {
                    this.mesStr.push('w');
                    num[i] += 2;
                } else {
                    this.mesStr.push('-')
                }

                if (this.permss.includes('execute'+i)) {
                    this.mesStr.push('x');
                    num[i] += 1;
                } else {
                    this.mesStr.push('-')
                }
            }
            this.mesNum = num.join("");
            this.mesStr = this.mesStr.join("");

        },
        mesNum: function () {
            this.calcMesNum();
        },
        mesStr: function () {
            this.calcMesStr();
        }
    },
    methods: {
        calcMesNum: function () {
            this.permss = [];
            let num = this.mesNum.split("");
            for (i = 1; i <= 3; i++) {
                if (num[i - 1] == 7) {
                    this.permss.push('read' + i);
                    this.permss.push('write' + i);
                    this.permss.push('execute' + i);
                } else if (num[i - 1] == 6) {
                    this.permss.push('read' + i);
                    this.permss.push('write' + i);
                } else if (num[i - 1] == 5) {
                    this.permss.push('read' + i);
                    this.permss.push('execute' + i);
                } else if (num[i - 1] == 4) {
                    this.permss.push('read' + i);
                } else if (num[i - 1] == 3) {
                    this.permss.push('write' + i);
                    this.permss.push('execute' + i);
                } else if (num[i - 1] == 2) {
                    this.permss.push('write' + i);
                } else if (num[i - 1] == 1) {
                    this.permss.push('execute' + i);
                }
            }
        },
        calcMesStr: function () {
            this.permss = [];
            let num = this.mesStr.split("");
            let count = 0;
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
            this.mesNum = newArr.join("");
            this.calcMesNum();
        }
    }


});