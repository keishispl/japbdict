function parseData(text, category) {

     // Sub-DIV for each JSON data element
     const categoryDiv = document.getElementById("category_" + category);
     const div = document.createElement("div")
     div.setAttribute("id", "category_" + category + "+" + text.name);
     div.setAttribute("class", "column");

     categoryDiv.appendChild(div);

     Object.keys(text).forEach((key) => {

          if (text[key] === text.color) return;

          color = `color: ${text.color};`
          if (text.color === undefined) {
               color = ""
          }

          // Creating text from JSON data
          const para = document.createElement("p");

          div.appendChild(para);

          para.innerHTML = text[key];

          switch (key) {
               case "name":
                    para.setAttribute("class", `name`);
                    para.setAttribute("style", color);
                    break;
               case "furigana":
                    para.setAttribute("class", `furigana`);
                    para.setAttribute("style", color);
                    break;
               case "romanji":
                    para.setAttribute("class", `romanji`);
                    para.setAttribute("style", color);
                    break;

               case "meaning":
                    para.innerHTML = `Meaning: ${text[key]}`;
                    para.setAttribute("class", `meaning`);
                    break;
               case "meanings":
                    para.innerHTML = `Meanings: ${text[key]}`.replaceAll(",", ", ");
                    para.setAttribute("class", `meanings`);
                    break;

               case "example":
                    para.innerHTML = `${text[key][0]}<br><p class="one">${text[key][1]}</p>`.replaceAll("[", `<a style="${color}"><b>`).replaceAll("]", "</b></a>");
                    para.setAttribute("class", `example`);
                    break;
          }
     });
};