const meals = document.querySelector(".meals");

document.addEventListener("DOMContentLoaded", function () {
  //Nav Menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, { edge: "right" });
  // Add Mealss
  const forms = document.querySelectorAll(".side-form");
  M.Sidenav.init(forms, { edge: "left" });
});

const renderMeal = (data, id) => {
  const html = `
  <div class="card-panel meal white row" data-id ="${id}">
            <img src="/img/meal.png" class="responsive-img materialboxed" alt="">
            <div class="meal-detail">
                <div class="meal-title">${data.title}</div>
                <div class="meal-description">${data.description}</div>
            </div>
            <div class="meal-delete">
                <i class="material-icons" data-id ="${id}">delete_outline</i>
            </div>
        </div>
  `;

  meals.innerHTML += html;
};
