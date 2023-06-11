migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xel814hslr3smt0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "xel814hslr3smt0",
    "created": "2023-06-10 17:39:58.367Z",
    "updated": "2023-06-10 17:39:58.367Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ei4xqssm",
        "name": "field",
        "type": "text",
        "required": false,
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
})
