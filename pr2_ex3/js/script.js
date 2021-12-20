const app = {
    data() {
        return {
            animals: ['слон', 'носорог', 'жираф', 'мед'],
            newAnimal: '',
            isError: false
        }
    },
    created(){
        
    },
    methods:{
        addAnimal(){
            let text = this.newAnimal.trim();
            if(text.length > 0){
                this.animals.push(this.newAnimal);
                this.isError = false;
            }
            else{
                this.isError = true;
            }

            this.newAnimal = '';
        }
    }
}
export {app};