export {};

import path from 'path';

export default {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Assets': path.resolve(__dirname, 'src/Assets'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Constants': path.resolve(__dirname, 'src/Constants'),
      '@Hooks': path.resolve(__dirname, 'src/Hooks'),
      '@Models': path.resolve(__dirname, 'src/Models'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Router': path.resolve(__dirname, 'src/Router'),
      '@Store': path.resolve(__dirname, 'src/Store'),
      '@Styles': path.resolve(__dirname, 'src/Styles'),
      '@Utils': path.resolve(__dirname, 'src/Utils')
    }
  }
}