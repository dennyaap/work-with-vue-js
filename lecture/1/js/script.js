const app = {
    data() {
        return {
            array: [
                {
                    title: 'Первый элемент',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid est temporibus laboriosam, possimus, corrupti autem alias, a nesciunt ea suscipit dignissimos culpa voluptate soluta optio ducimus blanditiis eveniet perspiciatis cumque!'
                },
                {
                    title: 'Второй элемент',
                    content: 'A nesciunt ea suscipit dignissimos culpa voluptate soluta optio ducimus blanditiis eveniet perspiciatis cumque!'
                },
                {
                    title: 'Третий элемент',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid est temporibus laboriosam, possimus, corrupti autem alias!'
                },
                
            ],
            todos: ['Совершить подвиг в 6 часов'],
            currentTask: '',
            currentItem: {},
            currentIndex: 0
        }
    },
    created(){
        this.currentItem = this.array[0];
    },
    methods:{
        addTask(){
            let temp = this.currentTask.trim();
            if(temp.length > 0){
                this.todos.push(this.currentTask)
            }
            this.currentTask = ''
        },
        showCurrentItem(item){
            this.currentItem = item;
            this.currentIndex = this.array.findIndex(x => x.title == item.title);
            // console.log(this.currentIndex);
        }
    }
}
export {app};