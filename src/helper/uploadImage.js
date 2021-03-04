export const updatePhoto = (handelSelect ,photoInput) => {
    const file =
      photoInput.current.files &&
      photoInput.current.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => handelSelect(reader.result);
      reader.readAsDataURL(file);
    }
  };