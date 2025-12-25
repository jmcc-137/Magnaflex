from pdfminer.high_level import extract_text
from pathlib import Path
import sys

PDF = Path(r'C:\Users\jmcri\OneDrive\Documents\page-jm\public\Lista de Precios-Magnaflex.pdf')
OUT = Path(r'C:\Users\jmcri\OneDrive\Documents\page-jm\src\data\prices_raw.txt')

if not PDF.exists():
    print('PDF not found:', PDF)
    sys.exit(1)

text = extract_text(str(PDF))
OUT.write_text(text, encoding='utf-8')
print('EXTRACTED to', OUT)
