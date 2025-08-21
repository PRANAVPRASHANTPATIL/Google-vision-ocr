import vision from "@google-cloud/vision";

const client = new vision.ImageAnnotatorClient();

async function main() {
  const fileName = "sample.jpg";

  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;

  console.log("Extracted Text:");
  detections.forEach((text, i) => console.log(`${i}: ${text.description}`));
}

main();
