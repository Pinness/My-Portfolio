import sharp from 'sharp';

const inputImage = 'src/assets/1752184730238.jpg';
const outputImage = 'public/og-image.jpg';

sharp(inputImage)
  .resize(1200, 630)
  .composite([{
      input: Buffer.from('<svg><rect width="1200" height="630" fill="rgba(255, 255, 255, 0.5)" /></svg>'),
      blend: 'dest-in'
  }, {
      input: 'src/assets/1752184730238.jpg',
      gravity: 'east'
  }])
  .toFile(outputImage)
  .then(() => {
      console.log('OG image generated successfully!');
  })
  .catch(err => {
      console.error('Error generating OG image:', err);
  });
