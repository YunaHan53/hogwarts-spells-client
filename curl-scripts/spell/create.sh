#!/bin/bash

curl "http://localhost:4741/spells" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "spell": {
      "name": "'"${NAME}"'",
      "category": "'"${TYPE}"'",
      "description": "'"${DESCRIPTION}"'",
      "fatality": "'"${FATALITY}"'"
    }
  }'

echo
