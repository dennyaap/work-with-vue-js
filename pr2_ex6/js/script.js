const img = document.getElementById('img');
const app = {
    
    data() {
        return {
            images: [
                {
                    color: 'rgb(108, 108, 216)',
                    image: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?b=1&k=20&m=1280392364&s=170667a&w=0&h=NGYg-_9YcmJt2vkj79MvNxEcUTMN66Pa0KfvZ5MXVjI='
                },
                {
                    color: 'rgb(223, 159, 217)',
                    image: 'https://media.istockphoto.com/photos/young-man-is-playing-with-a-dog-and-do-selfie-picture-id1300658241?b=1&k=20&m=1300658241&s=170667a&w=0&h=0lrTViinfnDjbWDgxV0TDDSAXvzSgmrN-pKq0q60hqA='
                },
                {
                    color: 'rgb(0, 139, 109)',
                    image: 'https://media.istockphoto.com/photos/funny-dog-desires-to-eat-apple-pie-made-for-thanksgiving-dinner-picture-id1341269203?b=1&k=20&m=1341269203&s=170667a&w=0&h=5YRNyBVGh6XPe0MFp4ToxBY7amtt9CMzcCj6K9vsfEA='
                },
            ],
            currentImage: '',
            currentColor: ''
        }
    },
    created(){
        this.currentImage = this.images[0].image;
        this.currentColor = this.images[0].color;
    },
    methods:{
        
        setColor(index){
            this.currentImage = this.images[index].image;
            this.currentColor = this.images[index].color;
        }
    }
}
export {app};