const app = {
    
    data() {
        return {
            steps: [
                {
                    title: 'Начало',
                    description: 'Выбрать даты и место самоизоляции'
                },
                {
                    title: 'Проживающие',
                    description: 'Выбрать количество проживающих'
                }, 
                {
                    title: 'Кемпинг',
                    description: 'Выбрать желаемый кемпинг'
                }, 
                {
                    title: 'Дом-бочка',
                    description: 'Выбрать дом-бочку'
                },  
                {
                    title: 'Услуги',
                    description: 'Выбрать услуги'
                },  
                {
                    title: 'Оформление',
                    description: 'Оформить заказ'
                },
            ],
            currStep: 0,
            step: 0,
            currentDescription: ''
        }
    },
    created(){
        this.currentStep(0);
        // this.currentStep(0)
    },
    methods:{
        currentStep(value){
            
            let stepsLength = this.steps.length;

            this.currStep += value;

            if(this.currStep >= 0){
                this.step = this.currStep;
            }
            else{
                this.currStep = 0;
            }

            if(this.currStep >= stepsLength){
                this.currStep = stepsLength - 1;
            }
            this.step = this.currStep;
            this.currentDescription = this.steps[this.step].description;
        }
    }
}
export {app};