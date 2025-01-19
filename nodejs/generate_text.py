import os
import random
import string

def generate_random_text(file_path, size_mb=50):
    size_bytes = size_mb * 1024 * 1024  # Convert MB to bytes
    chunk_size = 1024 * 1024  # Write in 1MB chunks
    
    with open(file_path, 'w') as f:
        while os.path.getsize(file_path) < size_bytes:
            random_text = ''.join(random.choices(string.ascii_letters + string.digits + ' \n', k=chunk_size))
            f.write(random_text)
    
    print(f"File '{file_path}' generated successfully with size {size_mb}MB.")

if __name__ == "__main__":
    generate_random_text("random_text.txt", 25)
