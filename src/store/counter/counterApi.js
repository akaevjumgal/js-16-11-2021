
const mapBaconToIds = (bacon, index) => ({ id: index + 1, bacon });

export const fetchBacons = async () => {
  const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
  const result = await response.json();

  return result.map(mapBaconToIds);
}