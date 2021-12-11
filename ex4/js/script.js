const img = document.getElementById('img');

const app = {
    data() {
        return {
            username: '',
            password: '',
            visible: true,
            message: '',
            array: [
                {
                    title: '1 pic',
                    src: 'http://archiq.ru/wp-content/uploads/2016/09/Mirror-Houses-po-proektu-Peter-Pichler-6-649x420.jpg'
                },
                {
                    title: '2 pic',
                    src: 'http://archiq.ru/wp-content/uploads/2016/09/Mirror-Houses-po-proektu-Peter-Pichler-7-547x420.jpg'
                },
                {
                    title: '3 pic',
                    src: 'http://archiq.ru/wp-content/uploads/2016/09/Mirror-Houses-po-proektu-Peter-Pichler-8-642x420.jpg'
                },
               
            ],
            currentImage: ''
        }
    },
    created(){
        this.currentImage = this.array[0].src;
    },
    methods:{
        auth(){
            if(this.username.length && this.password.length){
                this.visible = false;
            }
            else{
                this.message = 'Заполните все поля!'
            }
            
        },
        logout(){
            this.message = '';
            this.visible = true;

            this.username = '';
            this.password = '';
        },
        changeImage(currentItem){
            this.currentImage = currentItem.src;
        }
    }
}
export {app};