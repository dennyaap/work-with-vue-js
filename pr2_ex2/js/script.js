const tabsContainer = document.querySelector('#tabsContainer');

const app = {
    data() {
        return {
            page: ''
        }
    },
    created(){
        this.page = 'first';
    },
    methods:{
        
    }
}
export {app};