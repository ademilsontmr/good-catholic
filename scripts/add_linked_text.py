#!/usr/bin/env python3
"""
Script to add LinkedText component to all blog articles that don't have it yet.
Replaces plain-text <p className="text-text leading-relaxed mb-6"> paragraphs
with <LinkedText> components.
"""

import os
import re
import sys

BLOG_DIR = "src/pages/blog"
IMPORT_LINE = 'import { LinkedText } from "@/components/blog/LinkedText";'

def get_slug_from_file(content: str) -> str:
    """Extract slug from canonical URL in the file."""
    match = re.search(r'href="https://guidecatholic\.com/blog/([^/"]+)/"', content)
    if match:
        return match.group(1)
    return ""

def already_has_linked_text(content: str) -> bool:
    return "LinkedText" in content

def add_import(content: str) -> str:
    """Add LinkedText import after the last existing import line."""
    # Find the last import line
    lines = content.split('\n')
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.strip().startswith('import '):
            last_import_idx = i
    
    if last_import_idx == -1:
        return content
    
    # Check if import already exists
    if IMPORT_LINE in content:
        return content
    
    lines.insert(last_import_idx + 1, IMPORT_LINE)
    return '\n'.join(lines)

def replace_plain_paragraphs(content: str, slug: str) -> str:
    """
    Replace plain-text <p className="text-text leading-relaxed mb-6">TEXT</p>
    with <LinkedText> — only when the paragraph contains no JSX elements.
    """
    # Pattern: <p className="text-text leading-relaxed mb-6">
    # followed by text that does NOT contain < (no JSX inside)
    # followed by </p>
    
    pattern = r'(<p className="text-text leading-relaxed mb-6">)((?:[^<]|(?:<(?!/)(?!strong|em|Link|a |span|br|ul|li|ol|div|h[1-6]|blockquote|code|pre)))*?)(</p>)'
    
    def replacer(m):
        opening = m.group(1)
        text = m.group(2)
        closing = m.group(3)
        
        # Skip if text is empty or very short
        if len(text.strip()) < 20:
            return m.group(0)
        
        # Skip if text contains any HTML-like content
        if '<' in text or '>' in text:
            return m.group(0)
        
        return f'<LinkedText className="text-text leading-relaxed mb-6" currentSlug="{slug}">{text}</LinkedText>'
    
    return re.sub(pattern, replacer, content, flags=re.DOTALL)

def process_file(filepath: str) -> tuple[bool, str]:
    """Process a single file. Returns (was_modified, message)."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if already_has_linked_text(content):
        return False, "already has LinkedText"
    
    slug = get_slug_from_file(content)
    if not slug:
        return False, "could not find slug"
    
    # Add import
    new_content = add_import(content)
    
    # Replace paragraphs
    new_content = replace_plain_paragraphs(new_content, slug)
    
    if new_content == content:
        return False, "no changes needed"
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True, f"processed (slug: {slug})"

def main():
    files = sorted([
        os.path.join(BLOG_DIR, f) 
        for f in os.listdir(BLOG_DIR) 
        if f.endswith('.tsx')
    ])
    
    modified = 0
    skipped = 0
    errors = 0
    
    for filepath in files:
        filename = os.path.basename(filepath)
        try:
            was_modified, msg = process_file(filepath)
            if was_modified:
                modified += 1
                print(f"✅ {filename}: {msg}")
            else:
                skipped += 1
                if "--verbose" in sys.argv:
                    print(f"⏭  {filename}: {msg}")
        except Exception as e:
            errors += 1
            print(f"❌ {filename}: ERROR - {e}")
    
    print(f"\n{'='*50}")
    print(f"Modified: {modified} | Skipped: {skipped} | Errors: {errors}")
    print(f"Total files: {len(files)}")

if __name__ == "__main__":
    main()
