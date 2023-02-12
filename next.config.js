/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: "/_next/static/images",
          outputPath: "static/images/",
        }
      },
    });
    
    // For bin file
    config.module.rules.push({
      test: /\.(bin)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: "/_next/static/images",
          outputPath: "static/images/",
          name: 'hero3d.glb' // keep the original name
        }
      },
    });
  }
}

module.exports = nextConfig
 