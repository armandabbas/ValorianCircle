import os
import glob

src_dir = '/Users/armandabbas/Desktop/Armand/ValorianCircle/src'
files = glob.glob(os.path.join(src_dir, '**', '*.tsx'), recursive=True)

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    if "'Playfair Display', serif" in content or '"Playfair Display", serif' in content:
        content = content.replace("'Playfair Display', serif", "'Hanken Grotesk', sans-serif")
        content = content.replace('"Playfair Display", serif', '"Hanken Grotesk", sans-serif')
        
        with open(file, 'w') as f:
            f.write(content)
            print(f"Updated {file}")
