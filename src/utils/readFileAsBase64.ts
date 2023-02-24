export const readFileAsBase64 = async (filePath: string): Promise<string> => {
    const fileReader = new FileReader();
    const file = await fetch(filePath).then((response) => response.blob());
  
    return new Promise<string>((resolve, reject) => {
      fileReader.onerror = () => {
        fileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      fileReader.onload = () => {
        const base64 = btoa(fileReader.result as string);
        resolve(base64);
      };
  
      fileReader.readAsBinaryString(file);
    });
  }