try {
  console.log("This message will not appear in the console");
  JSON.parse("cos value = 5");
} catch (error) {
  console.log(error);
  console.error("An error occurred:", error.message);
}
