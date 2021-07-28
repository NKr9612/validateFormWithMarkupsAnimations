export class Form {
  constructor() {
    this.inputOne = document.querySelector(".fWrapper__input--first");
    this.inputTwo = document.querySelector(".fWrapper__input--second");
    this.inputThree = document.querySelector(".fWrapper__input--third");
    this.btnSubmit = document.querySelector(".fWrapper__btnSubmit");

    this.userList = []; //pushuje dane użytkownika do tej tablicy jako obiekt
  }

  validity = () => {
    this.btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.inputOne.value.length < 3) {
        alert("Imię musi być dłuższe niż 2 znaki!");
      } else if (this.inputTwo.value.length < 3) {
        alert("Nazwisko musi być dłuższe niż 2 znaki!");
      } else if (this.inputThree.value.length < 2) {
        alert("Nazwa firmy musi zawierać przynajmniej 1 znak!");
      } else {
        this.obj = {
          name: "",
          surname: "",
          company: "",
        };
        this.obj.name = this.inputOne.value;
        this.obj.surname = this.inputTwo.value;
        this.obj.company = this.inputThree.value;

        this.userList.push(this.obj);

        // this.inputOne.value = "";
        // this.inputTwo.value = "";
        // this.inputThree.value = "";

        this.btnSubmit.classList.add("succes");
      }
    });
  };

  run = () => {
    this.validity();
  };
}
