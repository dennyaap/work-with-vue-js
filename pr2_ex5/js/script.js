
const app = {
    data() {
        return {
            values: [],
            newValue: '',
            isError: false
        }
    },
    created(){
        for(let i = 0; i < 4; i++){
            this.values.push(this.getRandom(-20, 35));
        }
        
        this.sortArray(this.values);
    },
    methods:{
        getRandom(min, max) {
            [min , max] = [Math.min(min , max), Math.max(min , max)]
            
            return ~~(Math.random() * (max - min) + min);
        },
        addValue(){
            let text = this.newValue;
            if(text.length != 0){
                this.values.push(this.newValue);
                this.isError = false;
            }
            else{
                this.isError = true;
            }

            this.newValue = '';

            this.sortArray(this.values)
        },
        sortArray(array){
            array.sort((a, b) => b - a);
        }
    }
}
export {app};