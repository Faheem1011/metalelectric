import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const publicProductsDir = path.join(rootDir, 'public', 'images', 'products');
if (!fs.existsSync(publicProductsDir)) {
  fs.mkdirSync(publicProductsDir, { recursive: true });
}

// 1. Copy local 24v1 (1).png
const local24v1 = path.join(rootDir, 'old data', '24v1 (1).png');
if (fs.existsSync(local24v1)) {
  fs.copyFileSync(local24v1, path.join(publicProductsDir, '24v1-hero.png'));
  fs.copyFileSync(local24v1, path.join(publicProductsDir, 'aa-24-100-0.png'));
  console.log('Successfully copied local 24v1 (1).png');
}

const imagesToDownload = [
  { url: 'https://i.postimg.cc/BvRZZ47P/51v1.png', filename: 'aa-51-100-0.png' },
  { url: 'https://i.postimg.cc/DZsv8HRj/51v2.png', filename: 'aa-51-100-1.png' },
  { url: 'https://i.postimg.cc/kGmn8wmn/51v3.png', filename: 'aa-51-100-2.png' },
  { url: 'https://i.postimg.cc/SxNxDZzR/24v1.png', filename: 'aa-24-100-0-remote.png' },
  { url: 'https://i.postimg.cc/9Q8FSGGp/24v2.png', filename: 'aa-24-100-1.png' },
  { url: 'https://i.postimg.cc/Gp4h1HK1/24v3.png', filename: 'aa-24-100-2.png' },
  { url: 'https://i.postimg.cc/tRWJTnjq/12v1.png', filename: 'aa-12-100-0.png' },
  { url: 'https://i.postimg.cc/4N13vCyj/12v2.png', filename: 'aa-12-100-1.png' },
  { url: 'https://i.postimg.cc/5NJ0F94w/12v3.png', filename: 'aa-12-100-2.png' },
  { url: 'https://i.postimg.cc/MHmzYR61/bike12v1.png', filename: 'ab-12-100-0.png' },
  { url: 'https://i.postimg.cc/8kRkD8Rs/bike12v2.png', filename: 'ab-12-100-1.png' },
  { url: 'https://i.postimg.cc/BQJSnhpp/bike13v1.png', filename: 'ab-13-100-0.png' },
  { url: 'https://i.postimg.cc/xTg0JKF2/bike13v2.png', filename: 'ab-13-100-1.png' },
  { url: 'https://i.postimg.cc/NjzBbQcC/REPTv1.png', filename: 'ac-12-100-0.png' },
  { url: 'https://i.postimg.cc/Z5RJrC1y/gotionv1.png', filename: 'ac-13-100-0.png' },
  { url: 'https://onvolt.pl/wp-content/uploads/2025/09/a4b761cb-b394-4957-bd4e-a49e6b5b6c6d.jpg', filename: 'ac-14-100-0.jpg' }
];

function downloadFileWithRetry(url, dest, retries = 2) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    
    const request = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        downloadFileWithRetry(response.headers.location, dest, retries).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        if (retries > 0) {
          setTimeout(() => {
            downloadFileWithRetry(url, dest, retries - 1).then(resolve).catch(reject);
          }, 500);
        } else {
          reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
        }
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    });
    
    request.on('error', (err) => {
      fs.unlink(dest, () => {});
      if (retries > 0) {
        setTimeout(() => {
          downloadFileWithRetry(url, dest, retries - 1).then(resolve).catch(reject);
        }, 500);
      } else {
        reject(err);
      }
    });
  });
}

async function main() {
  console.log('Setting up assets...');
  const heroSrc = path.join(publicProductsDir, '24v1-hero.png');

  for (const item of imagesToDownload) {
    const dest = path.join(publicProductsDir, item.filename);
    if (!fs.existsSync(dest) || fs.statSync(dest).size < 100) {
      try {
        await downloadFileWithRetry(item.url, dest);
      } catch (e) {
        // Copy hero image as clean fallback if download fails
        fs.copyFileSync(heroSrc, dest);
      }
    }
  }
  console.log('Assets setup completed in public/images/products/');
}

main();
