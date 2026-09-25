import os
import shutil
from PIL import Image
import numpy as np

src_logo = r"C:\Users\Nagesh\.gemini\antigravity-ide\brain\11878f3a-7273-4ce7-86ae-b62dab7aa7b6\.user_uploaded\media_1790276008863.png"
dest_original = r"d:\Polaris_Furniture\public\assets\polaris_logo.png"

# Copy original first
shutil.copyfile(src_logo, dest_original)
print(f"Copied original logo to {dest_original}")

# Open with PIL
img = Image.open(src_logo).convert("RGBA")
width, height = img.size
print(f"Logo dimensions: {width}x{height}")

# Let's inspect corner pixels to verify background color
data = np.array(img)
corners = [data[0,0], data[0, -1], data[-1, 0], data[-1, -1]]
print("Corner pixels (RGBA):", corners)

# Crop any excessive white borders around the logo
# Find non-white pixels
# A pixel is considered white if R > 240, G > 240, B > 240
is_not_white = (data[:, :, 0] < 240) | (data[:, :, 1] < 240) | (data[:, :, 2] < 240)
coords = np.argwhere(is_not_white)
y_min, x_min = coords.min(axis=0)
y_max, x_max = coords.max(axis=0)

# Add small padding
pad = 12
y_min = max(0, y_min - pad)
x_min = max(0, x_min - pad)
y_max = min(height, y_max + pad)
x_max = min(width, x_max + pad)

cropped = img.crop((x_min, y_min, x_max, y_max))
cropped_data = np.array(cropped)

# Create 1: Transparent version where white background becomes alpha=0
# With smooth antialiased alpha transition
r = cropped_data[:, :, 0].astype(float)
g = cropped_data[:, :, 1].astype(float)
b = cropped_data[:, :, 2].astype(float)

# Whiteness measure
whiteness = (r + g + b) / 3.0
# If whiteness >= 250 -> alpha 0
# If whiteness <= 200 -> alpha 255
# smooth in between
alpha = np.clip((250.0 - whiteness) / 50.0 * 255.0, 0, 255).astype(np.uint8)

transparent_data = cropped_data.copy()
transparent_data[:, :, 3] = alpha
transparent_img = Image.fromarray(transparent_data)
transparent_path = r"d:\Polaris_Furniture\public\assets\polaris_logo_transparent.png"
transparent_img.save(transparent_path, "PNG")
print(f"Saved transparent logo to {transparent_path}")

# Create 2: Dark-theme optimized logo:
# Keep the wood-grain 'P' emblem on the left as-is (with transparent bg)
# Turn the dark text "POLARIS" and "INTERNATIONAL INDUSTRIES" into luxury ivory (#F5F2EC) and metallic bronze (#BFA07A)!
# Let's find where the 'P' mark ends and text begins.
# The 'P' emblem is on the left roughly in the first 28% of width.
cropped_w, cropped_h = cropped.size
p_boundary = int(cropped_w * 0.28)

light_theme_data = transparent_data.copy()

for y in range(cropped_h):
    for x in range(cropped_w):
        a = light_theme_data[y, x, 3]
        if a > 0:
            if x >= p_boundary:
                # This is part of the text or dividing lines
                # If it was dark (R < 150), make it warm ivory (#F5F2EB)
                cur_r = light_theme_data[y, x, 0]
                cur_g = light_theme_data[y, x, 1]
                cur_b = light_theme_data[y, x, 2]
                
                # Check if it is the bronze triangle or bronze line (distinct bronze/gold hue)
                # Bronze hue typically has R > G and G > B with significant gap, or R ~ 180-210, G ~ 150-180, B ~ 100-140
                if cur_r > 160 and cur_g > 130 and cur_b < 140:
                    # Keep bronze accent!
                    pass
                elif cur_r < 100 and cur_g < 100 and cur_b < 100:
                    # Dark text -> ivory #F5F2EC
                    light_theme_data[y, x, 0] = 245
                    light_theme_data[y, x, 1] = 242
                    light_theme_data[y, x, 2] = 236

light_img = Image.fromarray(light_theme_data)
light_path = r"d:\Polaris_Furniture\public\assets\polaris_logo_dark_theme.png"
light_img.save(light_path, "PNG")
print(f"Saved dark-theme logo to {light_path}")
