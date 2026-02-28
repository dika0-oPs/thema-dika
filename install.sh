#!/bin/bash

set -e

echo "-------------------------------------------------------"
echo "        DIKA MARKET THEME INSTALLER - 2026            "
echo "-------------------------------------------------------"

cd /var/www/pterodactyl

echo "Menyiapkan folder tujuan..."
mkdir -p resources/scripts/components/dashboard
mkdir -p resources/scripts/components/auth
mkdir -p resources/scripts/components/server/files
mkdir -p resources/scripts/components/server/settings
mkdir -p resources/scripts/components/account
mkdir -p resources/scripts/components/admin

echo "Menyalin file tema dari /root/dika-theme..."
cp -rv /root/dika-theme/resources/scripts/* ./resources/scripts/

echo "Membersihkan cache panel..."
php artisan view:clear
php artisan cache:clear

echo "Memulai proses Build (Sabar ya, Dika Market sedang diproses)..."
yarn install
yarn build:production

echo "-------------------------------------------------------"
echo "   INSTALLASI SELESAI! TAMPILAN DIKA MARKET AKTIF      "
echo "-------------------------------------------------------"
