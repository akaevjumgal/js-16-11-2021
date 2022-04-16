
import { ChangeEvent, useState } from 'react';

const API_KEY = 'public_kW15aqe72FRjjhKxU8TxN2BTM7ox';

enum Status {
  POST,
  GET,
  PATCH,
  PUT,
  DELETE,
}

const getByStatus = (status: Status): string => {
  return `Your status is ${status}`;
}

export default function Uploader() {
  getByStatus(Status.PUT);
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
      <input type="file" multiple onChange={onUpload} />
  )
}