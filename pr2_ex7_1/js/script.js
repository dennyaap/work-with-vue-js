const img = document.getElementById('img');
const app = {
    
    data() {
        return {
            tabs: [
                {
                    tab: 0,
                    title: 'Ford Mustang SVT Cobra R 2000',
                    src: 'https://autonews.ua/wp-content/uploads/2020/02/9-1.jpg',
                    info: 'Компания Ford выпустила всего 300 экземпляров спецверсии Ford Mustang SVT Cobra R. Все они имели красный цвет кузова. Автомобиль получил доработки, позволившие ему лидировать на многих гоночных трассах.'
                },
                {
                    tab: 1,
                    title: 'Ford Mustang GT California Special',
                    src: 'https://autonews.ua/wp-content/uploads/2020/02/8-1.jpg',
                    info: 'В 1968 году компания Ford для покупателей Ford Mustang в штате Калифорния впервые начала предлагать специальный пакет доработок. В наши дни пакует California Special получил Mustang GT.'
                },
                {
                    tab: 2,
                    title: 'Ford Mustang 50th Anniversary Edition 2015',
                    src: 'https://autonews.ua/wp-content/uploads/2020/02/5-1.jpg',
                    info: 'В 2015 году на автосалоне в Нью-Йорке показали спецверсию Ford Mustang 50th Anniversary Edition. Ее построили в честь «Мустанга», который появился в 1964 году. Было выпушено только 1 964 экземпляров этой'
                }
            ],
            currentTitle: '',
            currentInfo: '',
            currentImage: '',
            currentTab: {}
        }
    },
    created(){
       this.selectTab()
    },
    methods:{
        selectTab(index = 0){
            this.currentTab = this.tabs[index];
        }
    }
}
export {app};