function parseData(text, category) {

     // Sub-DIV for each JSON data element
     const categoryDiv = document.getElementById("category_"+category+"_2");
     const div = document.createElement("div")
     div.setAttribute("id", "category_"+category+"+"+text.name);
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
                    para.setAttribute("style", `font-size: 40px; margin-bottom: -25px; ${color}`)
                    break;
               case "furigana":
                    para.setAttribute("style", `font-size: 25px; margin-bottom: -27.5px;  margin-left: 1px; ${color}`)
                    break;
               case "romanji":
                    para.setAttribute("style", `font-size: 25px; margin-left: 2px; ${color}`)
                    break;

               case "meaning":
                    para.innerHTML = `Meaning: ${text[key]}`;
                    para.setAttribute("style", "font-size: 20px; padding-bottom: 20px;")
                    break;
               case "meanings":
                    para.innerHTML = `Meanings: ${text[key]}`.replaceAll(",", ", ");
                    para.setAttribute("style", "font-size: 20px; padding-bottom: 20px;")
                    break;

               case "example":
                    para.innerHTML = `${text[key][0]}<br><p style="margin-left: 1px;">${text[key][1]}</p>`.replaceAll("[", `<a style="${color}"><b>`).replaceAll("]", "</b></a>");
                    para.setAttribute("style", "font-size: 20px; padding-bottom: 20px;")
                    break;
          }
     });
};