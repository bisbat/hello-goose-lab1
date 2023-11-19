function categorizeTemperature(temperature: number): string {
    if (temperature < 0) {
      return "Freezing";
    } else if (temperature >= 0 && temperature < 10) {
      return "Cold";
    } else if (temperature >= 10 && temperature < 25) {
      return "Moderate";
    } else {
      return "Hot";
    }
  }
  
  // Example usage
  console.log(categorizeTemperature(-5)); // Output: "Freezing"
  console.log(categorizeTemperature(5));  // Output: "Cold"
  console.log(categorizeTemperature(15)); // Output: "Moderate"
  console.log(categorizeTemperature(30)); // Output: "Hot"
  