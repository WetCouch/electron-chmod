let app = new Vue({
    el: '#app',
    data: {
        permss: [],
        mesStr: [],
        mesNum: [],
        newmodel: [],
        num: []
    },
    methods: {
        calToStr: function () {
            this.mesStr = [];
            
            for (i = 1; i <= 3; i++) {
                if (this.permss.includes('read'+i)) {
                    this.mesStr.push('r');
                } else {
                    this.mesStr.push('-')
                }

                if (this.permss.includes('write'+i)) {
                    this.mesStr.push('w');
                } else {
                    this.mesStr.push('-')
                }

                if (this.permss.includes('execute'+i)) {
                    this.mesStr.push('x');
                } else {
                    this.mesStr.push('-')
                }
            }

            return this.mesStr = this.mesStr.join("");
        },
        calToNum: function () {
            this.mesNum = [];
            let num = [];
            num[1] = 0;
            num[2] = 0;
            num[3] = 0;

            for (i = 1; i <= 3; i++) {
                if (this.permss.includes('read'+i)) {
                    num[i] += 4;
                }

                if (this.permss.includes('write'+i)) {
                    num[i] += 2;
                }

                if (this.permss.includes('execute'+i)) {
                    num[i] += 1;
                }
            }
            this.mesNum.push(num[1], num[2], num[3]);
            return this.mesNum = this.mesNum.join("");
        },
        calFromNum:  function () {
            // let num = this.mesNum.split("");
            // this.num = num;
            // if (num[0] == 4) {
            //     this.permss.push('read1')
            // }
        }
    }
});
