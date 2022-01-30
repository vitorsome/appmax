export default class Item {

    constructor(name = '', description = '', price = '') {
        this._id = 0;
        this._name = name;
        this._description = description;
        this._price = price;
    }

    set name(name) {
        this._name = name;
    }

    set description(description) {
        this._description = description;
    }

    set price(price) {
        this._price = price;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }
    
    get price() {
        return this._price;
    }

    save() {
        let items = [];
        let savedItems = localStorage.getItem('itens');
        let nextId = 1;
        if (savedItems) {
            items = JSON.parse(savedItems);
            nextId =  Math.max.apply(Math, items.map(item => item.id)) + 1;
        }
        items.push({
            id: nextId,
            name: this._name,
            description: this._description,
            price: this._price
        });
        localStorage.setItem('itens', JSON.stringify(items));
    }

    update() {
        let savedItems = JSON.parse(localStorage.getItem('itens'));
        let toSave = savedItems.map((item) => {
            if (item.id == this.id) {
                item.id = item.id;
                item.name = this.name;
                item.price = this.price;
                item.description = this.description;
            }
            return item;
        });
        localStorage.setItem('itens', JSON.stringify(toSave));
    }

    get(id) {
        let savedItems = localStorage.getItem('itens');
        let items = [];
        if (savedItems) {
            items = JSON.parse(savedItems).filter(item => item.id == id);
        }
        this._id = items[0].id;
        this._name = items[0].name;
        this._description = items[0].description;
        this._price = items[0].price;
    }

    static delete(id) {
        let savedItems = JSON.parse(localStorage.getItem('itens'));
        let toSave = savedItems.filter(item => {
            if (item.id != id) {
                return item;
            }
        });
        localStorage.setItem('itens', JSON.stringify(toSave));
    }
}