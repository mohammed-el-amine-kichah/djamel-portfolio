#!/usr/bin/env python3
"""
Generate placeholder images for portfolio projects
"""
from PIL import Image, ImageDraw, ImageFont
import os

# Define colors for different projects
projects = [
    {"name": "bac-companion-1", "color": "#3B82F6", "text": "Bac Companion\nQuiz Interface"},
    {"name": "bac-companion-2", "color": "#2563EB", "text": "Bac Companion\nFlashcards"},
    {"name": "bac-companion-3", "color": "#1D4ED8", "text": "Bac Companion\nResources"},
    
    {"name": "qr-meal-1", "color": "#10B981", "text": "QR Meal System\nQR Scanner"},
    {"name": "qr-meal-2", "color": "#059669", "text": "QR Meal System\nDashboard"},
    {"name": "qr-meal-3", "color": "#047857", "text": "QR Meal System\nTracking"},
    
    {"name": "ml-income-1", "color": "#8B5CF6", "text": "ML Classification\nData Analysis"},
    {"name": "ml-income-2", "color": "#7C3AED", "text": "ML Classification\nModel Training"},
    {"name": "ml-income-3", "color": "#6D28D9", "text": "ML Classification\nResults"},
]

# Create images directory
output_dir = "public"
os.makedirs(output_dir, exist_ok=True)

# Image dimensions
width, height = 1280, 720

for project in projects:
    # Create image with gradient
    img = Image.new('RGB', (width, height), project["color"])
    draw = ImageDraw.Draw(img)
    
    # Add overlay pattern (dots)
    dot_spacing = 40
    for x in range(0, width, dot_spacing):
        for y in range(0, height, dot_spacing):
            # Semi-transparent white dots
            opacity = 30
            dot_color = (255, 255, 255, opacity)
            draw.ellipse([x-2, y-2, x+2, y+2], fill=(255, 255, 255, 30))
    
    # Add text
    try:
        # Try to use a system font
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 60)
        small_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 40)
    except:
        # Fallback to default font
        font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    
    # Draw text in center
    text = project["text"]
    
    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text shadow
    draw.text((x+3, y+3), text, font=font, fill=(0, 0, 0, 100), align="center")
    # Draw main text
    draw.text((x, y), text, font=font, fill="white", align="center")
    
    # Save image
    output_path = os.path.join(output_dir, f"{project['name']}.png")
    img.save(output_path, quality=95)
    print(f"Created: {output_path}")

print(f"\nSuccessfully generated {len(projects)} images!")
