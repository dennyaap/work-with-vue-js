const app = {
    
    data() {
        return {
            notes: [
                'Заметка 1',
                'Заметка 2'
            ],
            nameNote: '',
            status: 'Введите название заметки!',
            isActive: false
        }
    },
    computed:{
        checkCountNotes: function(){
            return this.notes.length;
        }
    },
    created(){
        
    },
    methods:{
        checkCountSymbols(){
            if(this.nameNote.trim().length === 0){
                this.isActive = true
            }
            else{
                this.isActive = false;
            }
        },
        addNote(){
            if(this.nameNote.trim().length !== 0){
                this.notes.unshift(this.nameNote);
            }
            else{
                this.isActive = true;
            }
            this.nameNote = '';
        },
        deleteNote(index){
            this.notes.splice(index, 1);
        },
    }
}
export {app};