import Uploader from "../components/Uploader/Uploader";
import { ChangeEvent, Component, useState } from 'react';
import Slider from "../components/Slider/slider";
import { observer } from "mobx-react";

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

@observer
export default class UploadPage extends Component {
  onUpload = async (event: ChangeEvent<HTMLInputElement>) => {
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

  render() {
    return (
      <div>
        <Slider />
        {/* <Uploader upload={onUpload} /> */}
      </div>
    )
  }
}