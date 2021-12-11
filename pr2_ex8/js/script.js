const img = document.getElementById('img');
const app = {
    
    data() {
        return {
        }
    },
    created(){
        
    },
    methods:{
        done(e){
            e.currentTarget.classList.toggle('done');
        }
    }
}
export {app};