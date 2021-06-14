Pour ajouter un fichier de documentation (swagger.json) :

- Le convertir au format YAML (si JSON)
- Le renommer avec un nom explicite (ex: products.json ou microservice1.json)
- Supprimer les entrées racines suivantes : "basePath", "consumes","produces","swagger","securityDefinitions","host" et "schemes". (inutile ici)
- Le placer dans ./docs