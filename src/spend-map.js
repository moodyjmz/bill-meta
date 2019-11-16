export const _HANDLERS = {
    string: (value) => {
        return value.trim();
    },
    number: (value) => {
        return Number.parseFloat(value);
    }
};
export const _SPEND_MAP = [
    {
        name: 'date',
        handler: (value) => {
            return new Date(value);
        }
    },
    {
        name: 'transaction',
        handler: _HANDLERS.string
    },
    {
        name: 'location',
        handler: _HANDLERS.string
    },
    {
        name: 'out',
        handler: _HANDLERS.number
    },
    {
        name: 'in',
        handler: _HANDLERS.number
    }
];


export class SpendMap {
    constructor() {
        this._map = _SPEND_MAP;
    }
    set map(map) {
        this._map = map;
    }
    mapItem(item) {
        const obj = {};
        item.forEach((detail, index) => {
            if (this._map[index]) {
                obj[this._map[index].name] = this._map[index].handler(detail);
            }
        });
        return obj;
    }
}
