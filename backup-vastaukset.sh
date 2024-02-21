#!/bin/bash

set -e

# Check if ONEDRIVE environment variable is set
if [ -z "$ONEDRIVE" ]; then
    echo "ONEDRIVE environment variable is not set. It need to point to the root of the OneDrive directory. Exiting."
    exit 1
fi

src_dir=./src/vastaukset
dest_dir="$ONEDRIVE/__TENTIT/koodit/js-vastaukset"

cp "${src_dir}"/*.js "${dest_dir}"
