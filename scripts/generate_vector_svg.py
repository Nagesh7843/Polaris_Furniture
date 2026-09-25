import matplotlib.pyplot as plt
from PIL import Image
import numpy as np

img = Image.open('public/assets/tight_logo.png')
w, h = img.size
alpha = np.array(img)[:, :, 3]

fig, ax = plt.subplots()
cs = ax.contour(alpha, levels=[128])
plt.close(fig)

p_paths = []
text_paths = []
tri_paths = []
sub_paths = []

for seg in cs.allsegs[0]:
    if len(seg) < 3:
        continue
    # Center of gravity of this segment
    centroid_x = seg[:, 0].mean()
    centroid_y = seg[:, 1].mean()
    
    # Format SVG path
    # Simplify slightly by taking every point
    d = f"M {seg[0, 0]:.1f} {seg[0, 1]:.1f}"
    for pt in seg[1:]:
        d += f" L {pt[0]:.1f} {pt[1]:.1f}"
    d += " Z"
    
    if centroid_x < 170:
        p_paths.append(d)
    elif 460 <= centroid_x <= 500 and 115 <= centroid_y <= 140:
        tri_paths.append(d)
    elif centroid_y >= 148:
        sub_paths.append(d)
    else:
        text_paths.append(d)

print(f"P segments: {len(p_paths)}")
print(f"Text segments: {len(text_paths)}")
print(f"Triangle segments: {len(tri_paths)}")
print(f"Subtitle segments: {len(sub_paths)}")

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="pGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2B77A" />
      <stop offset="30%" stop-color="#C59B63" />
      <stop offset="70%" stop-color="#9C7342" />
      <stop offset="100%" stop-color="#6E4D27" />
    </linearGradient>
    <linearGradient id="bronzeAcc" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#BFA07A" />
      <stop offset="50%" stop-color="#D8BA93" />
      <stop offset="100%" stop-color="#BFA07A" />
    </linearGradient>
  </defs>

  <!-- Architectural Sculptural P Mark -->
  <path
    d="{' '.join(p_paths)}"
    fill="url(#pGoldGradient)"
    fillRule="evenodd"
  />

  <!-- POLARIS Monumental Luxury Wordmark -->
  <path
    d="{' '.join(text_paths)}"
    fill="#F7F5F0"
    fillRule="evenodd"
  />

  <!-- Signature Bronze Triangular Accent inside A -->
  <path
    d="{' '.join(tri_paths)}"
    fill="url(#bronzeAcc)"
    fillRule="evenodd"
  />

  <!-- INTERNATIONAL INDUSTRIES & Hairline Rule Accents -->
  <path
    d="{' '.join(sub_paths)}"
    fill="#BFA07A"
    fillRule="evenodd"
  />
</svg>'''

with open('public/assets/polaris_logo_code.svg', 'w') as f:
    f.write(svg_content)

print("Saved public/assets/polaris_logo_code.svg successfully!")
