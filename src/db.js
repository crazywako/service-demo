import React from 'react'
import Dexie from 'dexie'
const db = new Dexie('requests')
db.version(1).stores({
    servicerequests: '++id, date'
})
db.open();

export default db;