import "./sass/index.scss";
import { Form } from "../tools/Form";
import { Game } from "../tools/Game";

// let promise = new Promise(function (resolve, reject) { resolve("ok") });

const form = new Form();

form.run();
//tablica obiektów która zawiera informacje o tym, jakie imie, nazwisko i firmę wpisał użytkownik
const array = form.userList;

const game = new Game();

game.start();
