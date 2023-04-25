migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r87krjk3m0nr23k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqyanhmj",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r87krjk3m0nr23k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqyanhmj",
    "name": "field",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})