import Uploader from "../components/Uploader/Uploader";
import { ChangeEvent, useState } from 'react';

const API_KEY = 'public_kW15aqe72FRjjhKxU8TxN2BTM7ox';

export default function UploadPage() {
  const onUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const response = await fetch(
        'https://api.upload.io/v1/files/basic', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(file),
      })
      const result = await response.json();
      console.log(result)
    }
  }

  return (
    <div>
      <Uploader upload={onUpload} />
    </div>
  )
}