export default class ItemList {

    constructor() {
        this._items = localStorage.getItem('itens');;
    }

    get() {
        let items = [];
        if (this._items) {
            items = JSON.parse(this._items);
        }
        items.sort((o1, o2) => o1.name.toLowerCase() > o2.name.toLowerCase() ? 1 : o1.name.toLowerCase() < o2.name.toLowerCase() ? -1 : 0);
        return items;
    }

    deleteItem(id) {
        let items = [];
        if (this._items) {
            items = JSON.parse(savedItems);
        }
    }

}