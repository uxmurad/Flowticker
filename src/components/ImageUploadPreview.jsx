import  { useState } from 'react';

export default function ImageUploadPreview({className, id}) {
    const [imageSrc, setImageSrc] = useState(null);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className={`form-file ${className}`}>
            <label htmlFor={id} className="form-file-label d-flex align-items-center justify-content-center h-100 cursor-pointer">
                {imageSrc ? (
                    <img src={imageSrc} alt="Preview" className="form-file-img py-2" />
                ) : (
                   <div className="form-file-wrap px-4 py-2 d-flex flex-column align-items-center justify-content-center">
                    <p className='fs-14 lh-base fw-medium text-heading'>Drag and Drop your image</p>
                    <p className='fs-14 lh-base fw-medium text-heading'>or</p>
                    <p className='fs-14 lh-base fw-medium text-underline text-secondary'>Browse From Drive</p>
                   </div>
                )}
                <input
                    type="file"
                    id={id}
                    className="d-none"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </label>
        </div>
    );
}
