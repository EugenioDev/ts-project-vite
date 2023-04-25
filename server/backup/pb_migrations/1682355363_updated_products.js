migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r87krjk3m0nr23k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u4kykegi",
    "name": "cost",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezirng3e",
    "name": "tmb",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3zza7ahr",
    "name": "img",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8cfxuiay",
    "name": "description",
    "type": "text",
    "required": false,
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

  // remove
  collection.schema.removeField("u4kykegi")

  // remove
  collection.schema.removeField("ezirng3e")

  // remove
  collection.schema.removeField("3zza7ahr")

  // remove
  collection.schema.removeField("8cfxuiay")

  return dao.saveCollection(collection)
})
