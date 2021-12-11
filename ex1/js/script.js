const app = {
    
    data() {
        return {
            today: '',
            tomorrow: '',
        }
    },
    methods:{
        getDate(){
            let date = new Date();

            let days = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

            let currentDate = {
                day : date.getDate(),
                month : date.getMonth(),
                year : date.getFullYear()
            }

            this.today = `${currentDate.day}:${currentDate.month}:${currentDate.year} - ${days[date.getDay()]}`;
            this.tomorrow = `${currentDate.day + 1}:${currentDate.month}:${currentDate.year} - ${days[date.getDay() + 1]}`;
        }
    }
}
export {app};