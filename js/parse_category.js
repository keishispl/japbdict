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
               const box = document.getElementById("categories");

               const div = document.createElement("div");

               div.setAttribute("id", `category_${category.name}`);
               
               div.setAttribute("style", "display: none;")
               div.setAttribute("class", "row");

               divGroup.appendChild(div);


               const para = document.createElement("p");
               box.appendChild(para);

               para.innerHTML = `${category.name} - ${category.eng}`;
               para.setAttribute("id", `category-${category.name}-text`);
               para.setAttribute("class", "unselectable title pointer categories")

               // Show and hide category
               const toggleBtn = document.getElementById(`category-${category.name}-text`);
               const hiddenDiv = document.getElementById(`category_${category.name}`);

               toggleBtn.addEventListener('click', () => {
                    document.body.scrollTo({ top: 0 });
                    document.documentElement.scrollTo({ top: 0 });
                    // Show
                    if (hiddenDiv.style.display === 'none') {
                         for (const key of categories) {
                              document.getElementById(`category-${key}-text`).classList.remove('is-enabled');
                              document.getElementById(`category_${key}`).style.display = 'none';
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