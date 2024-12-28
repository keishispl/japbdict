var categories = [];

function parseCategory(category) {
     Object.keys(category).forEach((key) => {
          // Format data in JSON to parse data function
          if (category[key] == category.text) {
               category[key].forEach((text) => parseData(text, category.name))
               return;
          }

          // Creating group DIV and title
          if (category[key] == category.name) {
               categories.push(category.name);

               const divGroup = document.getElementById("div_group");

               const div = document.createElement("div");
               const div2 = document.createElement("div");

               div.setAttribute("id", `category_${category.name}`);

               div2.setAttribute("id", `category_${category.name}_2`);
               div2.setAttribute("style", "display: none;")
               div2.setAttribute("class", "row");

               divGroup.appendChild(div);
               divGroup.appendChild(div2);


               const para = document.createElement("p");
               const para2 = document.createElement("p");
               div.appendChild(para);
               div2.appendChild(para2);

               para.innerHTML = `<b>${category.name} - ${category.eng}</b>`;
               para.setAttribute("id", `category-${category.name}-text`);
               para.setAttribute("style", "font-size: 50px;")
               para.setAttribute("class", "unselectable title pointer")

               // Show and hide category
               const toggleBtn = document.getElementById(`category-${category.name}-text`);
               const hiddenDiv = document.getElementById(`category_${category.name}_2`);

               toggleBtn.addEventListener('click', () => {
                    // Show
                    if (hiddenDiv.style.display === 'none') {
                         for (const key of categories) {
                              document.getElementById(`category-${key}-text`).classList.remove('is-enabled');
                              document.getElementById(`category_${key}_2`).style.display = 'none';
                         }
                         toggleBtn.classList.add('is-enabled');
                         hiddenDiv.style.display = 'block';
                         // Hide
                    } else {
                         toggleBtn.classList.remove('is-enabled');
                         hiddenDiv.style.display = 'none';
                    }
               });
          }
     })
}