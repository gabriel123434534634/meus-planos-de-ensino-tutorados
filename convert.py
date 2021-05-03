import os
from PIL import Image
import PIL
def convert(path, pdf_name):
    path2 = os.listdir(path)
    image = []
    for i in path2:
        image += [Image.open(path+"/"+str(i)).convert("RGB")]
    first_image = image[0]
    image = image[1:]
    first_image.save(pdf_name, save_all=True,append_images=image)
path = input("Qual é o diretório onde está as imagens?\n")
pdf_name = input("Qual será o nome do pdf?\n")
try:
    convert(path, pdf_name+".pdf")
except:
    print("Ops, houve um erro no seu pdf!")
    os.system("pause")
else:
    print("Tudo OK!")
    os.system("pause")