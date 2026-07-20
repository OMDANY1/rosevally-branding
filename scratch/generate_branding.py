import os
from PIL import Image, ImageDraw

def generate_favicons():
    print("Generating favicons...")
    # Load source rose-gold logo
    src_path = "public/images/logo-rose-gold.png"
    if not os.path.exists(src_path):
        print(f"Error: Source logo not found at {src_path}")
        return
    
    img = Image.open(src_path)
    
    # Crop the emblem based on scanned densities: row 0 to 650
    # Bounding box of the emblem in logo-rose-gold: (260, 0, 746, 650)
    emblem = img.crop((260, 0, 746, 650))
    
    # Get tight bounding box of non-transparent emblem pixels
    bbox = emblem.getbbox()
    cropped_emblem = emblem.crop(bbox)
    w, h = cropped_emblem.size
    print(f"Cropped emblem size: {w}x{h}")
    
    # Create square canvas of max(w, h) with transparent background
    square_size = max(w, h)
    square_canvas = Image.new("RGBA", (square_size, square_size), (0, 0, 0, 0))
    
    # Paste emblem centered
    offset_x = (square_size - w) // 2
    offset_y = (square_size - h) // 2
    square_canvas.paste(cropped_emblem, (offset_x, offset_y))
    
    # Save the PNG assets in the public folder
    public_dir = "public"
    os.makedirs(public_dir, exist_ok=True)
    
    # 1. 16x16 png
    square_canvas.resize((16, 16), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "favicon-16x16.png"))
    # 2. 32x32 png
    square_canvas.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "favicon-32x32.png"))
    # 3. apple-touch-icon.png (180x180)
    square_canvas.resize((180, 180), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "apple-touch-icon.png"))
    # 4. android-chrome-192x192.png
    square_canvas.resize((192, 192), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "android-chrome-192x192.png"))
    # 5. android-chrome-512x512.png
    square_canvas.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "android-chrome-512x512.png"))
    
    # 6. favicon.ico (Multi-resolution .ico)
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    ico_imgs = [square_canvas.resize(size, Image.Resampling.LANCZOS) for size in ico_sizes]
    ico_imgs[0].save(
        os.path.join(public_dir, "favicon.ico"),
        format="ICO",
        sizes=ico_sizes,
        append_images=ico_imgs[1:]
    )
    
    # Overwrite the src/app/favicon.ico as well to make Next.js happy
    app_dir = "src/app"
    os.makedirs(app_dir, exist_ok=True)
    ico_imgs[0].save(
        os.path.join(app_dir, "favicon.ico"),
        format="ICO",
        sizes=ico_sizes,
        append_images=ico_imgs[1:]
    )
    
    print("Favicons generated successfully.")

def generate_og_image():
    print("Generating Open Graph social preview...")
    # Dimensions: 1200x630
    width = 1200
    height = 630
    
    # Background: Warm Ivory Cream (#F7F1E9 -> 247, 241, 233)
    bg_color = (247, 241, 233, 255)
    og_canvas = Image.new("RGBA", (width, height), bg_color)
    
    # Enable drawing on overlay for transparency
    draw_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(draw_layer)
    
    # Draw subtle organic flowing lines (concentric arches/ellipses)
    # Mocha Brown stroke color: #6B4E42 with ~5% opacity (RGB: 107, 78, 66, 13)
    line_color = (107, 78, 66, 13)
    
    # Draw large elegant background ellipses
    draw.ellipse([width//2 - 400, height//2 - 500, width//2 + 400, height//2 + 500], outline=line_color, width=1)
    draw.ellipse([width//2 - 200, height//2 - 350, width//2 + 200, height//2 + 350], outline=line_color, width=1)
    
    # Composite drawing layer onto background
    og_canvas = Image.alpha_composite(og_canvas, draw_layer)
    
    # Load and resize official Valley Rose logo
    logo_path = "public/images/logo-rose-gold.png"
    if not os.path.exists(logo_path):
        print(f"Error: Source logo not found at {logo_path}")
        return
        
    logo = Image.open(logo_path)
    
    # Crop empty space from logo borders to center it accurately
    logo_bbox = logo.getbbox()
    cropped_logo = logo.crop(logo_bbox)
    
    # Resize logo so it is centered and sits elegantly (width ~400px)
    target_w = 380
    aspect = cropped_logo.height / cropped_logo.width
    target_h = int(target_w * aspect)
    resized_logo = cropped_logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Paste logo in center
    paste_x = (width - target_w) // 2
    paste_y = (height - target_h) // 2
    og_canvas.paste(resized_logo, (paste_x, paste_y), resized_logo)
    
    # Save the final OG image
    public_dir = "public"
    og_canvas.convert("RGB").save(os.path.join(public_dir, "og-image.png"), "PNG")
    print("Open Graph preview generated successfully.")

if __name__ == "__main__":
    generate_favicons()
    generate_og_image()
