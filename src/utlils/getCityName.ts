const locationInput = document.getElementById(
  "location-input"
) as HTMLInputElement;

const getCityName = (): string => {
  const city: string = locationInput.value.trim();
  return city || "Barcelona";
};

export default getCityName;
