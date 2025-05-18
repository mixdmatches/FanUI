import express from 'express'
import multer from 'multer'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const uploadDir = path.join(__dirname, 'upload')
const upload = multer({ dest: uploadDir })

app.use(cors())
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded')
  }
  res.send(`File uploaded successfully: ${req.file.filename}`)
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
