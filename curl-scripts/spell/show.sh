#!/bin/bash

curl "http://localhost:4741/spells" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
