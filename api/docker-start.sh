SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
echo $SCRIPT_DIR
cd $SCRIPT_DIR
cd ./services/products_menus
npm run build 
cd $SCRIPT_DIR
cd ./services/orders_deliveries
npm run build 
cd $SCRIPT_DIR
cd ./services/users_structures
npm run build 
cd $SCRIPT_DIR
docker-compose up
