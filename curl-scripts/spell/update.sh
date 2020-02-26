#!/bin/bash

curl "http://localhost:4741/spells/${ID}" \
  --include \
  --request PATCH \
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
