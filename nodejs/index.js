const fs = require("fs");

function largeStream(source) {
  const largeData = fs.createReadStream(source,{highWaterMark:1024});
  largeData.on("error", (err) => {
    console.log(err);
  });
  largeData.on("data", (chunk) => {
    console.log("Received chunk:\n", chunk.toString());
  });
  largeData.on('end',()=>{
    console.log('finished');
    
  })

}
largeStream("random_text.txt")
