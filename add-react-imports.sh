#!/bin/bash

# Find all .jsx files in the src directory
find src -name "*.jsx" -type f | while read -r file; do
    # Check if the file doesn't already have a React import
    if ! grep -q "^import React from 'react';" "$file"; then
        # Add import React at the beginning of the file
        sed -i '' '1i\
import React from '\''react'\'';
' "$file"
        echo "Added React import to $file"
    fi
done 