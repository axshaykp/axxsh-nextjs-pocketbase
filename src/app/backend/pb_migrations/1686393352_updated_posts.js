migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n06ioqgmamdgqz8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "at80afpe",
    "name": "field1",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n06ioqgmamdgqz8")

  // remove
  collection.schema.removeField("at80afpe")

  return dao.saveCollection(collection)
})
