
import { useState } from 'react';

const API_KEY = 'public_kW15aqe72FRjjhKxU8TxN2BTM7ox';

export default function Uploader() {
  const onUpload = async (event) => {
    if (event.target.files.length) {
      const formData = new FormData();

      event.target.files.forEach((file) => {
        formData.append(file.name, file);
      })

      const response = await fetch(
        'https://api.upload.io/v1/files', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
      const result = await response.json();
      console.log(result)
    }
  }

  return (
      <input type="file" multiple onChange={onUpload} />
  )
}