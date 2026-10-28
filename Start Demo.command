#!/bin/zsh
cd -- "$(dirname -- "$0")"
if command -v node >/dev/null; then
  echo 'Open http://localhost:4173 in your browser. Keep this window open during the demo.'
  node server.mjs
else
  echo 'Node.js is unavailable. Open demo.html in your browser instead.'
fi
