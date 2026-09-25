import os
import pymupdf

pdf_path = r'C:\Users\Nagesh\Downloads\Polaris International Industries PQ - V1.pdf'
doc = pymupdf.open(pdf_path)

output_base = os.path.abspath('public/assets')
os.makedirs(output_base, exist_ok=True)

print(f"Total pages: {len(doc)}")

# Let's inspect what's on pages and render high quality page renders or extract embedded images
# Note: In PDFs, many pages are beautifully composed layouts. Rendering pages or extracting images can give us both:
# 1) The exact raw photos embedded
# 2) Rendered slices or full page previews

extracted_count = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_idx, img in enumerate(images):
        xref = img[0]
        try:
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            w = base_image["width"]
            h = base_image["height"]
            
            # Filter out tiny icon or mask images < 100px unless relevant
            if w >= 200 and h >= 200:
                img_name = f"page_{page_num+1:03d}_img_{img_idx+1}_{w}x{h}.{image_ext}"
                out_path = os.path.join(output_base, img_name)
                with open(out_path, "wb") as f:
                    f.write(image_bytes)
                extracted_count += 1
                if page_num < 30 or page_num >= 54:
                    print(f"P.{page_num+1}: saved {img_name}")
        except Exception as e:
            pass

print(f"Total extracted high-res images: {extracted_count}")
