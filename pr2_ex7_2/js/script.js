const img = document.getElementById('img');
const app = {
    
    data() {
        return {
            countSymbols: 0,
            maxSymbols: 60,
            messages: [],
            date: '',
            currentTime: '',
            status: '',
            text: '',
            prevElement: {},
            currentElement: {}
        }
    },
    created(){
        
    },
    methods:{
        checkCount(){
            this.countSymbols = document.getElementById('currentMessage').value.trim().length
        },
        sendMessage(){
            this.status = '';
            this.text = document.getElementById('currentMessage').value;
            this.date = new Date();
            this.currentTime = `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
            
            if(this.countSymbols <= this.maxSymbols && this.text.trim().length !== 0){
                this.messages.push(
                    {
                        message: this.text,
                        time: this.currentTime
                    }
                )
            }
            else{
                this.status = 'Недопустимое количество символов!'
            }
        },
        deleteMessage(index){
            this.messages.splice(index, 1);
        }
    }
}
export {app};