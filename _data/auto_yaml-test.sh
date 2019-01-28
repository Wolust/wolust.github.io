#!/bin/bash
readarray -t a < <(ls *.yaml) 
for IND in ${!a[@]}; do
lolo="${a[$IND]}"
ruby -ryaml -e "Psych.parse(File.open('$lolo'))" 
if [[ $? -ne 0 ]]
  then
    echo "$lolo is not valid YAML"
#    exit 1
  else
      echo "$lolo is a valid YAML"
fi
done
