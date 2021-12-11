const app = {
    data(){
        return {
            message: 'Привет Vue!!',
            firstSummend: 0,
            secondSummend: 0,
            totalSum: 0
        };
    },
    methods:{
        getSum(){
            this.totalSum = ~~this.firstSummend + ~~this.secondSummend;
        }
    }
}
export {app}