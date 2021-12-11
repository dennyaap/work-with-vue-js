const app = {
    
    data() {
        return {
           cars: [
               'Audi', 'Chevrolet', 'BWM', 'Lexus', 'Другое'
           ],
           avatars: [
                {
                    title: 'panda1',
                    src: '/pr2_ex11/img/panda-bear.png'
                },
                {
                    title: 'panda2',
                    src: '/pr2_ex11/img/red-panda.png'
                },
                {
                    title: 'panda3',
                    src: '/pr2_ex11/img/panda.png'
                }
           ],
           carOwners: [],

           form1: true,
           form2: false,

           isOwner: '',
           currentFavoriteCars: [],
           currentBirthday: 2000,
           currentAvatar: '',
           isDone: false
        }
    },
    created(){
       this.currentAvatar = this.avatars[0].src;
    },
    computed:{
    },
    methods:{
        addOwner(){
            let currentFavotiteCards = this.currentFavoriteCars;
            
            this.carOwners.push(
                {
                    avatar: this.currentAvatar,
                    birthday: this.currentBirthday,
                    favoriteCars: currentFavotiteCards.length !== 0 ? currentFavotiteCards.join(', ') + '.' : 'Нету.',
                }
            )

            this.isOwner = '';
            this.currentFavoriteCars = [];
            this.currentbirthday = '';

            this.isDone = true;

            setTimeout(() =>{
                this.isDone = false;
            }, 2000)
        },
        publishOwner(){
            this.form1 = false,
            this.form2 = true
        },
        back(){
            this.form1 = true,
            this.form2 = false
        }
    }
}
export {app};