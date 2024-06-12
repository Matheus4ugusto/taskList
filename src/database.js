import fs from 'node:promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database{

    #database = {}

    constructor() {
        fs.readFile(databasePath, 'utf-8').then(data => {
            this.#database = data
        }).catch(() => {
            this.#persist
        })
    }

    #persist(){
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    insert(table, search){
        let data = this.#database[table] ?? []

        if(search){
            data = data.filter(row => Object.entries(search).some(([key, value]) => row[key]. toLowerCase().includes(value.toString())))
        }
    }

}