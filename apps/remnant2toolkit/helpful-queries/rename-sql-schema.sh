#!/bin/bash

# Directory to check
DIRECTORY="/path/to/your/folder"

# Loop through all files in the directory
for FILE in "$DIRECTORY"/*; do
  # Check if the file name contains the word 'schema'
  if [[ "$(basename "$FILE")" == *schema* ]]; then
    # Get the directory and the base name of the file
    DIR=$(dirname "$FILE")
    BASENAME=$(basename "$FILE")
    
    # Rename the file by prefixing it with '1'
    mv "$FILE" "$DIR/1$BASENAME"
  fi
done

# When done, run the following to import it
# cat pscale_dump_folder/*.sql | mysql dbname