const img = document.getElementById('img');

const app = {
    data() {
        return {
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
            currentImage: '',
            visible: false,
            status: 'Показать информацию..'
        }
    },
    created(){
        this.currentImage = this.array[0].src;
    },
    methods:{
        showImage(){
            this.visible = !this.visible;
            console.log(this.status)
            this.status = this.visible ? 'Скрыть информацию..' : 'Показать информацию..';
            console.log(this.status)
        },
        imgEnter(){
            this.currentImage = this.array[1].src;
        },
        imgLeave(){
            this.currentImage = this.array[0].src;
        }
        
    }
}
export {app};