import os
from rembg import remove
from PIL import Image

assets_dir = r"e:\LS\assets"

files_to_process = [
    ("client-afs.jpeg", "client-afs.png"),
    ("client-tnpolice.jpg", "client-tnpolice.png")
]

for in_file, out_file in files_to_process:
    in_path = os.path.join(assets_dir, in_file)
    out_path = os.path.join(assets_dir, out_file)
    
    if os.path.exists(in_path):
        input_image = Image.open(in_path)
        output_image = remove(input_image)
        output_image.save(out_path)
        print(f"Processed {in_file} -> {out_file}")
    else:
        print(f"File not found: {in_path}")
