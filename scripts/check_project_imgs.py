import os
import re

with open('src/data/polarisData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find all image paths
imgs = set(re.findall(r'(/assets/[a-zA-Z0-9_\-\.]+)', text))

print(f"Total unique images in polarisData.ts: {len(imgs)}")

# Let's check which ones exist
missing = [img for img in imgs if not os.path.exists(os.path.join('public', img.lstrip('/')))]
print(f"Missing images on disk: {missing}")
