const locationInput = document.getElementById("location-input");

const getCityName = () => {
  const city = locationInput.value.trim();
  return city || "Barcelona";
};

export default getCityName;
