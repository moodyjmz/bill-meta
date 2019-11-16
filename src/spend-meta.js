import { _META_MATCHES } from './lookups/meta.js';
export class SpendMeta {
    constructor() {
        this._matches = [];
    }
    buildMeta(item) {
        const obj = {
        };
        this._matches.forEach((meta) => {
            meta.matchesRegExp.forEach((match) => {
                if (match.test(item.transaction)) {
                    obj[meta.key] = true;
                }
            });
        });
        return obj;
    }
    set matches(matches) {
        this._matches = [];
        matches.forEach((match) => {
            const obj = { key: match.key, matchesRegExp: [] };
            match.matches.forEach((matcher) => {
                obj.matchesRegExp.push(this._buildRegex(matcher));
            })
            this._matches.push(obj);
        })
    }
    _buildRegex(matcher) {
        return new RegExp(matcher.replace(/(\W)/g, '\\$1'), 'gi')
    }
}
export { _META_MATCHES } from './lookups/meta.js';
