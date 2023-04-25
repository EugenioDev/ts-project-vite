migrate((db) => {
  const collection = new Collection({
    "id": "r87krjk3m0nr23k",
    "created": "2023-04-24 16:52:46.839Z",
    "updated": "2023-04-24 16:52:46.839Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r87krjk3m0nr23k");

  return dao.deleteCollection(collection);
})
