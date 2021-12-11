const app = {
    
    data() {
        return {
            todoList: [
                {
                    id: 1,
                    text: 'Накормить слона',
                    done: false
                },
                {
                    id: 2,
                    text: 'Совершить подвиг',
                    done: false
                },
                {
                    id: 3,
                    text: 'Выспаться',
                    done: false
                },
                {
                    id: 4,
                    text: 'Отправиться в светлое будущее',
                    done: true
                },
            ],
            isError: false,
            newTodo: ""
        }
    },
    created(){
       
    },
    computed:{
        countDone(){
            return this.todoList.filter(item => item.done).length;
        },
        countTodo(){
            return this.todoList.length;
        }
    },
    methods:{
        addTodo(){
            let tempTodo = this.newTodo.trim();
            if (tempTodo.length > 0){
                this.todoList.push({
                    id: this.countTodo + 1,
                    text: tempTodo,
                    done: false
                });
                this.isError = false;
            }
            else{
                this.isError = true;
            }
            this.newTodo = "";
        },
        toggle(item){
            item.done = !item.done;
        }
    }
}
export {app};