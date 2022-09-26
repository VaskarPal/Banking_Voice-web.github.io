// Implement a listener for speech segment updates
console.log(lol);
document

  .getElementsByTagName("push-to-talk-button")[0]
  .addEventListener("speechsegment", (e) => {
    const speechSegment = e.detail;
    console.log(speechSegment);

    if (speechSegment.intent.intent === "fill") {
      speechSegment.entities.forEach(entity => {
        document.getElementById(entity.type).value = entity.value;
      })
    }

    if (speechSegment.intent.intent === "clear" && speechSegment.intent.isFinal) {
      ["date_of_birth", "card_id", "phone_number", "zip_code"]
        .forEach(field => {
          document.getElementById(field).value = "";
        })
    }
  });