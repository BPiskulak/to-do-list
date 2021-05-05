{

    const tasks = [
        {
            content: "Nagrać lekcje",
            dane: false,
        },
        {
            content: "Dodać lekcje",
            dane: true,
        },
    ]

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li>
                ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };
  
    init();
}