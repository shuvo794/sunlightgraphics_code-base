// Sunlight Graphics Interactive Functionality
document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const quoteModal = document.getElementById('quoteModal');
  const uploadModal = document.getElementById('uploadModal');
  
  const openQuoteBtns = document.querySelectorAll('.open-quote-btn');
  const openUploadBtns = document.querySelectorAll('.open-upload-btn');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  // Open Quote Modal
  openQuoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      quoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Open Upload Art Modal
  openUploadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      uploadModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close Modals
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quoteModal.classList.remove('active');
      uploadModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close when clicking overlay backdrop
  [quoteModal, uploadModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // Form Submit Handler (Quote Form)
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your quote request has been received. Our team will contact you within 2 business hours.');
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
      quoteForm.reset();
    });
  }

  // Drag and Drop Zone handler
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = '#E31B23';
      dropzone.style.background = 'rgba(227, 27, 35, 0.05)';
    });

    ['dragleave', 'dragend'].forEach(type => {
      dropzone.addEventListener(type, () => {
        dropzone.style.borderColor = '#223983';
        dropzone.style.background = 'var(--bg-subtle)';
      });
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = '#223983';
      dropzone.style.background = 'var(--bg-subtle)';
      if (e.dataTransfer.files.length) {
        alert(`File "${e.dataTransfer.files[0].name}" uploaded successfully!`);
        uploadModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length) {
        alert(`File "${fileInput.files[0].name}" selected!`);
        uploadModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
