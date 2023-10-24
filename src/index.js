import app from "./app";

// main ejecucion de inicio del proyecto
const main = () =>{
    app.listen(app.get("port"));
    console.log(`Server listen on port ${app.get("port")}`);
};

main();