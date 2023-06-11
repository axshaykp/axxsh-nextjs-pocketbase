migrate((db) => {
  const collection = new Collection({
    "id": "n06ioqgmamdgqz8",
    "created": "2023-06-10 10:34:37.882Z",
    "updated": "2023-06-10 10:34:37.882Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2cmyxw4d",
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
  const collection = dao.findCollectionByNameOrId("n06ioqgmamdgqz8");

  return dao.deleteCollection(collection);
})
