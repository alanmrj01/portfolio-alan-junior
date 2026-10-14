import assert from 'node:assert/strict'
import { selectGalleryFiles } from './generate-project-media-manifest.mjs'

const selected = selectGalleryFiles([
  'galeria-10.webp',
  'galeria-02.webp',
  'galeria-01.webp',
  'galeria-03.jpg',
  'galeria-4.webp',
  'capa.webp',
  'capa-960.webp',
  'anotacoes.txt',
])

assert.deepEqual(selected, [
  { name: 'galeria-01.webp', index: 1 },
  { name: 'galeria-02.webp', index: 2 },
  { name: 'galeria-10.webp', index: 10 },
])

console.log('Ordenação numérica e filtragem do manifesto validadas.')
