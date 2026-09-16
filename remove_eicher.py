import os
from rembg import remove
from PIL import Image

in_path = r"e:\LS\assets\client-eicher.png"
out_path = r"e:\LS\assets\client-eicher.png"

if os.path.exists(in_path):
    input_image = Image.open(in_path)
    output_image = remove(input_image)
    output_image.save(out_path)
    print("Processed eicher")

