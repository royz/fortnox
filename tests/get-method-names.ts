import { getSpecFromFile } from "./utils";

const spec = await getSpecFromFile("original");


const tags: Record<string, true> = {};

Object.entries(spec.paths).forEach(([path, methods]: [string, any]) => {
  Object.entries(methods).forEach(([method, operation]: [string, any]) => {
    const summary = operation.summary;
    if (!summary) {
      console.log(`Missing summary for ${method.toUpperCase()}: ${path}`);
      return;
    }

    const context = path.split("/")[2];
    const tag = `${context}: ${summary}`;

    if (tag in tags) {
      console.log(`Duplicate entry "${tag}" for ${method.toUpperCase()}: ${path}`);
    } else {
      tags[tag] = true;
    }
  });
});