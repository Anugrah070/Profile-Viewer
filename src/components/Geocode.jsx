export async function geocodeAddress(address) {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBe1chlT1I_xDkJHHdsoOnTpogJYtSQQpM`
    );
    const data = await response.json();
    if (data.status === 'OK') {
      const location = data.results[0].geometry.location;
      return location;
    } else {
      throw new Error('Geocoding failed');
    }
  }
  
  