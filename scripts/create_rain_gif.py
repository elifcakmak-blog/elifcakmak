from PIL import Image, ImageDraw
import random

# Parameters for the GIF
width, height = 500, 500  # Dimensions of the frame
dot_count = 50            # Number of dots
frames = 30               # Total frames in the GIF
dot_radius = 5            # Radius of each dot
speed_range = (10, 20)    # Range for random speed of falling dots

# Create initial positions for dots
dots = [{"x": random.randint(0, width), "y": random.randint(-height, 0), "speed": random.randint(*speed_range)} for _ in range(dot_count)]

# Store frames
gif_frames = []

for frame in range(frames):
    # Create a new image with a black background
    img = Image.new("RGB", (width, height), "black")
    draw = ImageDraw.Draw(img)

    # Draw the dots
    for dot in dots:
        x, y = dot["x"], dot["y"]
        draw.ellipse((x - dot_radius, y - dot_radius, x + dot_radius, y + dot_radius), fill="yellow")

        # Move the dot downward according to its speed
        dot["y"] += dot["speed"]

        # Reset the dot if it goes off the bottom of the screen
        if dot["y"] > height:
            dot["y"] = -dot_radius  # Place it just above the screen
            dot["x"] = random.randint(0, width)
            dot["speed"] = random.randint(*speed_range)  # Randomize the speed when it resets

    # Add the frame to the list
    gif_frames.append(img)

# Save the frames as a GIF
gif_frames[0].save("raining_yellow_dots.gif", save_all=True, append_images=gif_frames[1:], duration=100, loop=0)

print("GIF created: raining_yellow_dots.gif")
