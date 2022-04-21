import Uploader from "../components/Uploader/Uploader";
import { ChangeEvent, useState } from 'react';

const API_KEY = 'public_kW15aqe72FRjjhKxU8TxN2BTM7ox';

async function http<RType>(
  initInfo: RequestInfo, 
  options: RequestInit
): Promise<RType> {
  const result = await fetch(initInfo, options).then(result => result);
  const response: Promise<RType> = await result.json();
  return response;
}

interface UploadResponse {
  fileId: string;
  fileUrl: string;
}

export default function UploadPage() {
  const onUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const response = await http<UploadResponse>(
        'https://api.upload.io/v1/files/basic', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(file),
      })
      console.log(response)
    }
  }

  return (
    <div>
      <Uploader upload={onUpload} />
    </div>
  )
}