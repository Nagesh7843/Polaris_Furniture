import numpy as np
from PIL import Image
from contourpy import contour_generator

img = Image.open('public/assets/tight_logo.png')
w, h = img.size
arr = np.array(img)

# Alpha channel gives exact boundary of all shapes!
alpha = arr[:, :, 3].astype(float)

# Separate into components:
# 1. 'P' mark: x < 165 in tight_logo (original 110 + 165 = 275)
p_mask = alpha.copy()
p_mask[:, 165:] = 0

# 2. Text 'POLARIS': x >= 165 and y < 145 (excluding triangle in A)
text_mask = alpha.copy()
text_mask[:, :165] = 0
text_mask[145:, :] = 0

# 3. Bronze triangle in A:
# In tight_logo, x: 579 - 110 = 469, 602 - 110 = 492
# y: 162 - 45 = 117, 183 - 45 = 138
tri_mask = np.zeros_like(alpha)
tri_mask[115:140, 465:495] = alpha[115:140, 465:495]
text_mask[115:140, 465:495] = 0

# 4. Subtitle 'INTERNATIONAL INDUSTRIES' & lines: y >= 145, x >= 165
sub_mask = alpha.copy()
sub_mask[:, :165] = 0
sub_mask[:145, :] = 0

def contours_to_svg_path(mask, threshold=128):
    cgen = contour_generator(z=mask)
    lines = cgen.lines(threshold)
    filled = cgen.filled(threshold, 255.0)
    
    path_d = []
    for polygon in filled:
        if len(polygon) == 0:
            continue
        # polygon can be list of vertices or array
        for ring in polygon:
            if len(ring) < 3:
                continue
            # simplify slightly
            pts = ring[::1]
            d = f"M {pts[0][0]:.2f} {pts[0][1]:.2f} "
            for pt in pts[1:]:
                d += f"L {pt[0]:.2f} {pt[1]:.2f} "
            d += "Z"
            path_d.append(d)
    return " ".join(path_d)

p_path = contours_to_svg_path(p_mask)
text_path = contours_to_svg_path(text_mask)
tri_path = contours_to_svg_path(tri_mask)
sub_path = contours_to_svg_path(sub_mask)

print(f"P path length: {len(p_path)}")
print(f"Text path length: {len(text_path)}")
print(f"Triangle path length: {len(tri_path)}")
print(f"Subtitle path length: {len(sub_path)}")

# Write an SVG file to test
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
  <defs>
    <linearGradient id="pGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="50%" stop-color="#AA7744" />
      <stop offset="100%" stop-color="#553311" />
    </linearGradient>
    <linearGradient id="bronzeGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C5A059" />
      <stop offset="100%" stop-color="#E5C158" />
    </linearGradient>
  </defs>
  <!-- P emblem -->
  <path d="{p_path}" fill="url(#pGradient)" />
  <!-- POLARIS text -->
  <path d="{text_path}" fill="#F5F2EB" />
  <!-- Bronze triangle in A -->
  <path d="{tri_path}" fill="url(#bronzeGradient)" />
  <!-- Subtitle -->
  <path d="{sub_path}" fill="#C5A059" />
</svg>'''

with open('public/assets/polaris_logo_vector.svg', 'w') as f:
    f.write(svg)

print('Generated public/assets/polaris_logo_vector.svg')
