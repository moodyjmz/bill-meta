export class Spend {
    constructor() {
        this._details = {};
        this._meta = {};

    }
    set details(details) {
        this._details = details;
    }
    get details() {
        return this._details;
    }
    set meta(meta) {
        this._meta = meta;
    }
    get meta() {
        return this._meta;
    }
}