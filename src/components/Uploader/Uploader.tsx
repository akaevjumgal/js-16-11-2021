
import { FC, ChangeEvent, InputHTMLAttributes } from 'react';

interface UploderProps extends InputHTMLAttributes<{}> {
  upload: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const Uploader: FC<UploderProps> = ({ upload, type = 'file', ...props }) => {
  return (
      <input {...props} type={type} onChange={upload} />
  )
}

export default Uploader;