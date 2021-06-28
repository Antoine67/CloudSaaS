SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
echo $SCRIPT_DIR

ms() {
	cd $SCRIPT_DIR
	./api/docker-start.sh
}

auth() {
	cd $SCRIPT_DIR
	cd ./jwt_auth
	npm run start
}

vue_user() {
	cd $SCRIPT_DIR
	cd ./vue/ceseat
	npm run serve -- --port 8080
}

vue_delivery() {
	cd $SCRIPT_DIR
	cd ./vue/ceseat-delivery
	npm run serve -- --port 8081
}

vue_restaurant() {
	cd $SCRIPT_DIR
	cd ./vue/ceseat-restaurant
	npm run serve -- --port 8082
}

ms &
auth &
vue_user &
vue_delivery &
vue_restaurant &
wait
