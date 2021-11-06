set -e

# set color variables
COLOR_REST="$(tput sgr0)"
COLOR_GREEN="$(tput setaf 2)"
COLOR_MAGENTA="$(tput setaf 5)"
COLOR_LIGHT_BLUE="$(tput setaf 81)"

echo "$COLOR_LIGHT_BLUE 🧑‍🔧 Setting up pre-commit... $COLOR_REST"
pip3 install pre-commit
pre-commit install -f
echo "$COLOR_LIGHT_BLUE ✨ pre-commit is now configured! $COLOR_REST"

echo "$COLOR_LIGHT_BLUE 🧑‍🔧 Installing Chest dependencies... $COLOR_REST"
docker-compose run --rm chest npm i
echo "$COLOR_LIGHT_BLUE ✨ Chest fully set up! $COLOR_REST"

echo "$COLOR_LIGHT_GREEN ✅ Chest is ready to run 🙂 $COLOR_REST"
echo " Run$COLOR_LIGHT_MAGENTA docker-compose run $COLOR_REST to lift the project locally"
