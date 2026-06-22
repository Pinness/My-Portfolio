import sharp from 'sharp';
import path from 'node:path';

// Using path.resolve to ensure Termux finds the files correctly
const inputImage = path.resolve('src/assets/1752184730238.jpg');
const outputImage = path.resolve('public/og-image.jpg');

sharp(inputImage)
  .resize(1200, 630, {
    fit: 'cover',
    position: 'center'
  })
  .toFile(outputImage)
  .then(() => {
    console.log('✅ Success! 1200x630 OG image created in /public');
  })
  .catch(err => {
    console.error('❌ Error generating image:', err);
    console.log('💡 Tip: Ensure your photo exists at src/assets/1752184730238.jpg');
  });
