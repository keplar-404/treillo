import React from 'react';
import { useProperty } from '@/lib/stateManage/globalState';

export default function ImagePreview({ id }: { id: number }) {
  const allComponent = useProperty((state) => state.propertyForComponent);
  const filteredImage = allComponent
    ?.filter((data) => data.idforPreviewElement === id)[0]
    ?.image;

  if (!filteredImage) {
    return null; // Return null or a placeholder if there's no image
  }

  const imageURL = URL.createObjectURL(filteredImage);

  return (
    <div className='w-full flex justify-center items-center'>
      <img src={imageURL} alt="image" className='' />
    </div>
  );
}
