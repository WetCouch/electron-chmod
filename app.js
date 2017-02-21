/**
 * Created by wetcouch on 07.02.2017.
 */



new Vue({
    el: '#app',
    data: {
        permss: [],
        mesStr: [],
        mesNum: []
    },
    methods: {
        calculate: function () {
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
            this.mesNum.push(num[1], num[2], num[3]);
            this.mesNum = this.mesNum.join("");
            this.mesStr = this.mesStr.join("");
        }
    }


});
