const app = {
    
    data() {
        return {
            countSymbols: 0,
            maxSymbols: 60,
            messages: [],
            date: '',
            currentTime: '',
            status: 'Недопустимое количество символов!',
            text: '',
            prevElement: {},
            currentElement: {},
            countSymbols: 0,
            currentMessage: '',
            isActive: false,
        }
    },
    created(){
        
    },
    methods:{
        checkCount(){
            this.countSymbols = this.currentMessage.trim().length;

            if(this.countSymbols > this.maxSymbols){
                this.isActive = true;
            }
            else{
                this.isActive = false;
            }
        },
        sendMessage(){
            this.date = new Date();
            this.currentTime = `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
            
            if(this.countSymbols <= this.maxSymbols && this.currentMessage.trim().length !== 0){
                this.messages.unshift(
                    {
                        message: this.currentMessage,
                        time: this.currentTime
                    }
                )
            }
            else{
                this.isActive = true;
            }
        },
        deleteMessage(index){
            this.messages.splice(index, 1);
        }
    }
}
export {app};