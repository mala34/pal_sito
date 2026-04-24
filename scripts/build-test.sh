#!/bin/bash
# Build for test deployment on softwaresrl.com
# - Disables local_backend in Decap CMS config
# - Sets site URL to https://www.softwaresrl.com
# - Runs astro build
# - Restores original files after build

set -e

CONFIG="public/admin/config.yml"
ASTRO_CONFIG="astro.config.mjs"

# Backup originals
cp "$CONFIG" "$CONFIG.bak"
cp "$ASTRO_CONFIG" "$ASTRO_CONFIG.bak"

# Disable local_backend (comment it out)
sed -i '' 's/^local_backend: true/# local_backend: true/' "$CONFIG"

# Set site URL to test domain
sed -i '' "s|site: 'https://personeallavoro.it'|site: 'https://www.softwaresrl.com'|" "$ASTRO_CONFIG"

echo "Building for test (softwaresrl.com)..."
npx astro build

# Restore originals
mv "$CONFIG.bak" "$CONFIG"
mv "$ASTRO_CONFIG.bak" "$ASTRO_CONFIG"

echo "Build complete! Upload dist/ to softwaresrl.com"
