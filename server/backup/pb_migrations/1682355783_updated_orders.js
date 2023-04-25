migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jts09p5v16nqmz2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "99l5tbsm",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "done"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jts09p5v16nqmz2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "99l5tbsm",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
