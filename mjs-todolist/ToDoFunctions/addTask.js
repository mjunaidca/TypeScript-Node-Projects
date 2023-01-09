import inquirer from "inquirer";
export async function addTask(toDolist) {
    let newTask = await inquirer.prompt([{
            name: "AddTask",
            type: "input",
            message: "Enter the new task:"
        }]);
    if (newTask.AddTask !== "") {
        toDolist.push(newTask.AddTask);
    }
}
