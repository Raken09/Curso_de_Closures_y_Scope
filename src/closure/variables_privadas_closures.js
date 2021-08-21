const person = () => {
    var saveName = "Edward";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("John");
console.log(newPerson.getName());