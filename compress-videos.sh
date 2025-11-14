#!/bin/bash

# Video Compression Script
# Compresses videos from public/Testimonials/ to public/Testimonials_Compressed/

SOURCE_DIR="public/Testimonials"
OUTPUT_DIR="public/Testimonials_Compressed"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed."
    echo "Install it with: sudo apt-get install ffmpeg"
    exit 1
fi

echo "Starting video compression..."
echo "Source: $SOURCE_DIR"
echo "Output: $OUTPUT_DIR"
echo ""

# Compress each video
for video in "$SOURCE_DIR"/*.mp4; do
    if [ -f "$video" ]; then
        filename=$(basename "$video")
        output_file="$OUTPUT_DIR/$filename"
        
        echo "Compressing: $filename"
        
        # Compress video: reduce bitrate and resolution if needed
        # Target: under 50MB for safety
        ffmpeg -i "$video" \
            -c:v libx264 \
            -crf 28 \
            -preset medium \
            -c:a aac \
            -b:a 128k \
            -movflags +faststart \
            -y \
            "$output_file" 2>&1 | grep -E "(Duration|Stream|size|time)"
        
        # Get file sizes
        original_size=$(du -h "$video" | cut -f1)
        compressed_size=$(du -h "$output_file" | cut -f1)
        
        echo "  Original: $original_size -> Compressed: $compressed_size"
        echo ""
    fi
done

echo "Compression complete!"
echo "Compressed videos are in: $OUTPUT_DIR"

