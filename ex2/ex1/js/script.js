const app = {
    
    data() {
        return {
            number: 0,
            answer: ''
        }
    },
    methods:{
        checkNumber(){
            this.answer = this.number % 2 == 0 ? 'Четное' : 'Нечетное';
        }
    }
}
export {app};