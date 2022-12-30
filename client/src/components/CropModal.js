import React, { useEffect } from "react";
import Cropper from 'react-easy-crop';
import "./styles/CropModal.css";
import { useState, useCallback } from "react";
import getCroppedImg from './cropImage'


const CropModal = ({ image, open, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, []);

  const onSave = useCallback(async(e) => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      console.log('croppedImage', croppedImage)
      onClose(croppedImage);
    } catch (e) {
      console.error(e)
    }
  });

  const onCancel = useCallback((e) => {
    e.preventDefault();

    onClose();
  });

  if (!open) return null;

  return (
    <div className="CropOverLay">
      <div className="CropModal">
        <div className="topControls">
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e) => {
              setZoom(e.target.value)
            }}
            className="zoom-range"
          />
        </div>
        <div className="crop-container">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>

        <div className="bottomControls">
          <div onClick={onCancel}>
              <div>Cancel</div>
          </div>

          <div onClick={onSave}>
              <div>Save</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropModal;
