const API_KEY = 'public_kW15aqe72FRjjhKxU8TxN2BTM7ox';

export default function Upload (){
  
  const OnUpload = async(event) => {
    const file = event.target.files[0];
    const response = await fetch('https://api.upload.io/v1/files/basic' , {
      method:'POST',
      headers:{
        'Authorization':`Bearer ${API_KEY}`,
        'Content-Type': file.type,
        'X-Upload-File-Name': file.name,
      },
      body:file,
    })
    const result = await response.json();
    console.log(result)
  }

  return(
    <input type="file" onChange={OnUpload} />
  )
}