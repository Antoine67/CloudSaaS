SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
echo $SCRIPT_DIR

cd $SCRIPT_DIR
cd ./services/orders_deliveries
npm run build
npm run generate
cp ./swagger.json ../swagger/json/orders_deliveries.json

cd $SCRIPT_DIR
cd ./services/products_menus
npm run build
npm run generate
cp ./swagger.json ../swagger/json/products_menus.json

cd $SCRIPT_DIR
cd ./services/users_structures
npm run build
npm run generate
cp ./swagger.json ../swagger/json/users_structures.json


# TODO   Convert json files into yaml and put them inside ../swagger/docs
# TODO   only keep 'definitions' and 'paths'
