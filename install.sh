#!/bin/bash

echo "Starting Dika Market Theme Installation..."

cd /var/www/pterodactyl

cp -r /path/to/dika-market-theme/resources/* ./resources/

echo "Clearing Cache..."
php artisan view:clear
php artisan cache:clear

echo "Building Assets (This may take a while)..."
yarn install
yarn build:production

echo "Installation Complete! Dika Market Theme is now active."
