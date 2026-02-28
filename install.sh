#!/bin/bash

set -e

echo "-------------------------------------------------------"
echo "        DIKA MARKET THEME INSTALLER - 2026            "
echo "-------------------------------------------------------"

cd /var/www/pterodactyl

echo "Menyalin file tema dari repository ke folder panel..."
cp -rv /root/dika-market-theme/resources/scripts/* ./resources/scripts/

echo "Membersihkan cache panel..."
php artisan view:clear
php artisan cache:clear

echo "Memulai proses Build (ini akan memakan waktu 1-3 menit)..."
export NODE_OPTIONS=--max_old_space_size=1024
yarn install
yarn build:production

echo "-------------------------------------------------------"
echo "   INSTALLASI SELESAI! SILAKAN REFRESH DASHBOARD       "
echo "-------------------------------------------------------"

