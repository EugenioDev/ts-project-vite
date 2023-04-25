migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r87krjk3m0nr23k")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r87krjk3m0nr23k")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
