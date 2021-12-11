const app = {
    
    data() {
        return {
            notes: [
                'Заметка 1',
                'Заметка 2'
            ],
            nameNote: '',
            status: '',
        }
    },
    created(){
        
    },
    methods:{
        addNote(){
            this.status = '';
            if(this.nameNote.trim().length !== 0){
                this.notes.push(this.nameNote);
            }
            else{
                this.status = 'Введите название заметки!'
            }
        },
        deleteNote(index){
            this.notes.splice(index, 1);
        },
        checkCountNotes(){
            return this.notes.length;
        }
    }
}
export {app};