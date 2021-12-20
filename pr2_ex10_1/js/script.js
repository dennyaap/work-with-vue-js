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
            currentDescription: '',
            btnBack: 'Назад',
            btnNext: 'Вперед',
            btnFinish: 'Начать с начала',
            isEnd: false,
            isFinish: false,
            restartBtn: false
        }
    },
    created(){
        this.currentStep(0);
        // this.currentStep(0)
    },
    methods:{
        currentStep(value){
            if(!this.isEnd || value < 0){
                this.isEnd = false;
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

                this.checkStep();
            }
            else{
                this.isFinish = true;
                this.restartBtn = true; 
            }
        },
        selectStep(value){
            this.currStep = value;
            this.step = value;

            this.checkStep();
        },
        checkStep(){
            this.currentDescription = this.steps[this.step].description;

            if(this.step == this.steps.length - 1){
                this.btnNext = 'Закончить'
                this.isEnd = true;
                
            }
            else{
                this.btnNext = 'Вперед'
            }
        },
        restart(){
            this.isEnd = false;
            this.isFinish = false;
            this.btnNext = 'Вперед'
            this.restartBtn = false;
            this.isEnd = false;
            this.selectStep(0)
        }
    }
}
export {app};