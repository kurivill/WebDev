let todoArray = [];
let nextId = 1;


if (require.main === module) {
    // testing
    
    let result = addOne("Eat breakfast", "no", "Nyt");
    console.log(result);
    result = addOne("Have a shower", "no", "Later");
    console.log(result);
    console.log(getAll());
    console.log(findById(1));
}


const toDo = {
    addOne,
    getAll,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = toDo;

function addOne(task, completed, dueDate) {
    if (!task || !completed || !dueDate) {
        return false;
    }

    const newTask = {
        id: nextId++,
        task,
        completed,
        dueDate
    };
    console.log(newTask);

    todoArray.push(newTask);
    return newTask;
}

function getAll() {
    return todoArray;
}

function findById(id) {
    const numericId = Number(id);
    const itemi = todoArray.find(item => item.id === numericId);
    return itemi || false;
}

function updateOneById(id, updated) {
    const itemi = findById(id);
    if (task) {
        if (updated.task) itemi.task = updated.task;
        if (updated.completed) itemi.completed = updated.completed;
        if (updated.dueDate) itemi.dueDate = updated.dueDate;
        return itemi;
    }
    return false;
}

function deleteOneById(id) {
    const itemi = findById(id) 
    if (itemi) {
        const initialLength = todoArray.length;
        todoArray = todoArray.filter(itemi => itemi.id !== Number(id));
        return todoArray.length < initialLength;
    }
    return false;
}