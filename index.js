import { transform } from "https://episphere.github.io/quest/replace2.js";
import { rbAndCbClick } from "https://episphere.github.io/quest/questionnaire.js";

window.onload = async () => {
  const response = await transform.render(
    {
      //url: 'https://jonasalmeida.github.io/privatequest/mod1_abridged.txt',
      url: "https://danielruss.github.io/simpletest/SITFTest.txt",
      activate: true,
    },
    "root"
  );

  if (response) {
    document.getElementById("WORK3").addEventListener("submit", async (e) => {
      e.preventDefault();
      const jobtitle = event.target[0].value;
      const occ = document.getElementById("OCCUPTN1");

      // call soccer...
      let soccerResults = await (await fetch(`https://sitf-cwlcji5kxq-uc.a.run.app/soccer/code?title=${jobtitle}`)).json();
      console.log(soccerResults);

      let responseElement = occ.querySelector("div[class='response']");
      if (responseElement) {
        let tmp = responseElement.cloneNode(false);
        occ.replaceChild(tmp, responseElement);
        responseElement = tmp;
      } else {
        responseElement = document.createElement("div");
        responseElement.classList.add("response");
        occ.insertBefore(responseElement, occ.childNodes[0]);
        let questionText = document.createTextNode("Please identify the occupation category that best describes this job.");
        responseElement.append(questionText);
      }

      soccerResults.forEach((soc, indx) => {
        let resp = document.createElement("input");
        resp.type = "radio";
        resp.id = `OCCUPTN1_${indx}`;
        resp.value = soc.code;
        resp.name = "SOCcerResults";
        resp.onclick = rbAndCbClick;
        let label = document.createElement("label");
        label.setAttribute("for", `OCCUPTN1_${indx}`);
        label.innerText = soc.label;
        responseElement.append(resp, label);
      });
      let resp = document.createElement("input");
      resp.type = "radio";
      resp.id = "OCCUPTN1_NOTA";
      resp.value = "NONE_OF_THE_ABOVE";
      resp.name = "SOCcerResults";
      resp.onclick = rbAndCbClick;
      let label = document.createElement("label");
      label.setAttribute("for", "OCCUPTN1_NOTA");
      label.innerText = "NONE OF THE ABOVE";

      responseElement.append(resp, label);
    });
  }
};
