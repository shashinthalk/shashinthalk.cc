#!/bin/bash

# Find all .jsx files in the src directory
find src -name "*.jsx" -type f | while read -r file; do
    # Remove any line that only imports React
    sed -i '' '/^import React from "react";$/d' "$file"
    sed -i '' '/^import React from '\''react'\'';$/d' "$file"
    
    # Check if there's a line importing React with other imports
    if grep -q "import React, {.*} from [\"']react[\"'];" "$file"; then
        # Keep this line as is
        echo "Keeping combined React import in $file"
    else
        # If no React import exists at all, add it at the top
        if ! grep -q "import.*React.*from [\"']react[\"'];" "$file"; then
            sed -i '' '1i\
import React from '\''react'\'';
' "$file"
            echo "Added React import to $file"
        fi
    fi
done 