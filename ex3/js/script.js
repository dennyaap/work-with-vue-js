function getRandom(min, max){
    return ~~(Math.random() * (max - min) + min);
}

const app = {
    data() {
        return {
            min: '',
            max: '',
            number: '',
            userNumber: '',
            text: `Угадайка`,
            status: '',
            rangeVisible: true,
            guessVisible: false
        }
    },
    methods:{
        checkNumber(){
            console.log(this.number);
            if(this.number == this.userNumber){
                this.status = `Поздравляю, вы угадали! ${this.number}`
            }
            else if(this.number > this.userNumber){
                this.status = 'Загаданное число больше, чем ваше!'
            }
            else if(this.number < this.userNumber){
                this.status = 'Загаданное число меньше, чем ваше!'
            }
        },
        makeGuess(){
            [this.min, this.max] = [Math.min(this.min, this.max), Math.max(this.min, this.max)];

            this.number = getRandom(this.min, this.max);

            this.rangeVisible = false;
            this.guessVisible = true;
        },
        refreshGuess(){
            this.rangeVisible = true;
            this.guessVisible = false;
            this.min = '';
            this.max = '';
            this.status = '';
        }
    }
}


export {app};