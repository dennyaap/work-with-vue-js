const img = document.getElementById('img');
const app = {
    
    data() {
        return {
            todoes: [
                {title: 'Прочитать книгу', isDone: false},
                {title: 'Совершить подвиг', isDone: false},
                {title: 'Накормить попугая', isDone: false},
                {title: 'Сходить за покупками', isDone: false},
            ],
        }
    },
    created(){
        
    },
    methods:{
        done(todo){
            todo.isDone = !todo.isDone;
        }
    }
}
export {app};