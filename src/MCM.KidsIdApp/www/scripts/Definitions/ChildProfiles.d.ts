declare module MCM {
    export interface IChildDataService {
        add(add: Child): any;
        get(get: Child): Child;
        getById(id: number): Child;
        getAll(): Child[];
        update(upd: Child): Child;
        delete(del: Child): boolean;
    }
}