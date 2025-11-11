#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Создаём папку resources если её нет
os.makedirs('resources', exist_ok=True)

# 1. ЛОГОТИП (200x60)
logo = Image.new('RGB', (200, 60), color='#2563EB')
draw = ImageDraw.Draw(logo)
try:
    # Пытаемся использовать встроенный шрифт
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 20)
except:
    font = ImageFont.load_default()
draw.text((100, 30), "WebDev Pro", fill='white', anchor='mm', font=font)
logo.save('resources/logo.jpg', 'JPEG', quality=85)
print("✅ Создан logo.jpg")

# 2. HERO ФОТО (1920x1080)
hero = Image.new('RGB', (1920, 1080), color='#2563EB')
draw = ImageDraw.Draw(hero)
# Градиент эффект через круги
draw.ellipse([400, 200, 800, 600], fill='#1E40AF')
draw.ellipse([1200, 400, 1700, 900], fill='#1E40AF')
draw.ellipse([600, 700, 1000, 1000], fill='#3B82F6')
hero.save('resources/hero-team.jpg', 'JPEG', quality=75)
print("✅ Создан hero-team.jpg")

# 3. FITNESS PLATFORM (1200x800)
fitness = Image.new('RGB', (1200, 800), color='#F8FAFC')
draw = ImageDraw.Draw(fitness)
# Рамка
draw.rectangle([50, 50, 1150, 750], fill='white', outline='#E2E8F0', width=3)
# Header
draw.rectangle([50, 50, 1150, 130], fill='#2563EB')
try:
    font_title = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 28)
    font_text = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
except:
    font_title = ImageFont.load_default()
    font_text = ImageFont.load_default()
draw.text((600, 90), "FitLife Platform", fill='white', anchor='mm', font=font_title)
# Content blocks
draw.rounded_rectangle([100, 180, 580, 480], radius=8, fill='#F0F9FF', outline='#2563EB', width=2)
draw.text((340, 330), "Fitness Dashboard", fill='#2563EB', anchor='mm', font=font_text)
draw.rounded_rectangle([620, 180, 1100, 480], radius=8, fill='#F0F9FF', outline='#2563EB', width=2)
draw.text((860, 330), "Workout Tracker", fill='#2563EB', anchor='mm', font=font_text)
# Icons (circles)
draw.ellipse([300, 220, 380, 300], fill='#2563EB', outline='#1E40AF', width=3)
draw.ellipse([820, 220, 900, 300], fill='#2563EB', outline='#1E40AF', width=3)
fitness.save('resources/fitness-platform.jpg', 'JPEG', quality=80)
print("✅ Создан fitness-platform.jpg")

# 4. EDUCATION PLATFORM (1200x800)
education = Image.new('RGB', (1200, 800), color='#F8FAFC')
draw = ImageDraw.Draw(education)
# Рамка
draw.rectangle([50, 50, 1150, 750], fill='white', outline='#E2E8F0', width=3)
# Header
draw.rectangle([50, 50, 1150, 130], fill='#059669')
draw.text((600, 90), "EduPro Platform", fill='white', anchor='mm', font=font_title)
# Course blocks
draw.rounded_rectangle([100, 180, 1100, 330], radius=8, fill='#F0FDF4', outline='#059669', width=2)
draw.text((600, 255), "Course 1: Marketing Basics", fill='#059669', anchor='mm', font=font_text)
draw.rounded_rectangle([100, 360, 1100, 510], radius=8, fill='#F0FDF4', outline='#059669', width=2)
draw.text((600, 435), "Course 2: Advanced Strategies", fill='#059669', anchor='mm', font=font_text)
draw.rounded_rectangle([100, 540, 1100, 690], radius=8, fill='#F0FDF4', outline='#059669', width=2)
draw.text((600, 615), "Course 3: Analytics & Growth", fill='#059669', anchor='mm', font=font_text)
education.save('resources/education-platform.jpg', 'JPEG', quality=80)
print("✅ Создан education-platform.jpg")

# 5. BOOKING SYSTEM (1200x800)
booking = Image.new('RGB', (1200, 800), color='#F8FAFC')
draw = ImageDraw.Draw(booking)
# Рамка
draw.rectangle([50, 50, 1150, 750], fill='white', outline='#E2E8F0', width=3)
# Header
draw.rectangle([50, 50, 1150, 130], fill='#DC2626')
draw.text((600, 90), "Restaurant Booking", fill='white', anchor='mm', font=font_title)
# Time slots
time_slots = ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
x_start = 100
for i, time in enumerate(time_slots):
    x = x_start + (i * 160)
    draw.rounded_rectangle([x, 180, x+140, 300], radius=6, fill='#FEF2F2', outline='#F87171', width=2)
    draw.text((x+70, 240), time, fill='#DC2626', anchor='mm', font=font_text)
# Tables status
draw.text((600, 370), "Available Tables", fill='#64748B', anchor='mm', font=font_title)
draw.rounded_rectangle([200, 420, 480, 620], radius=8, fill='#DCFCE7', outline='#059669', width=2)
draw.text((340, 520), "Table 1-5\nAvailable", fill='#059669', anchor='mm', font=font_text, align='center')
draw.rounded_rectangle([520, 420, 800, 620], radius=8, fill='#FEE2E2', outline='#DC2626', width=2)
draw.text((660, 520), "Table 6-10\nBooked", fill='#DC2626', anchor='mm', font=font_text, align='center')
booking.save('resources/booking-system.jpg', 'JPEG', quality=80)
print("✅ Создан booking-system.jpg")

print("\n🎉 Все изображения успешно созданы!")
print("📂 Папка: resources/")
