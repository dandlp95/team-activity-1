
export default class productList{
    constructor(category, targetHtml, dataSource){
        // Not sure about this one
        //this.products = [];
        this.category = category;
        this.targetHtml = targetHtml;
        this.dataSource = dataSource;
        
    }

    async init(){
        const list = await this.dataSource.getData();
        return list;
    }
}