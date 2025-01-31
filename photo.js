document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const photoInput = document.getElementById('photoInput');
    const photoGallery = document.getElementById('photoGallery');

    if (photoInput.files.length > 0) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const imgDiv = document.createElement('div');
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded photo';
            imgDiv.appendChild(img);
            photoGallery.appendChild(imgDiv);
        }

        reader.readAsDataURL(photoInput.files[0]);
        photoInput.value = ''; // Reset file input after upload
    }
});