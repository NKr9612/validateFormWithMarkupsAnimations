export class Game {
  constructor() {
    this.btnSubmit = document.querySelector(".fWrapper__btnSubmit");
    this.fWrapper = document.querySelector(".fWrapper");
    this.gWrapper = document.querySelector(".gWrapper");
    this.officeElements = document.querySelectorAll(".gWrapper__element");
    this.seconds = document.querySelector(".gWrapper__timer");
    this.gz = document.querySelector(".gz");
    this.sorry = document.querySelector(".sorry");
    this.score = document.querySelectorAll(".score");

    this.rAFid = "";

    this.timeCounter = 0;

    this.oldTime = 0;
    this.speed = 1000;
    this.greenCounter = 0;
  }

  swash = () => {
    this.btnSubmit.addEventListener("click", () => {
      if (this.btnSubmit.classList.contains("succes")) {
        this.fWrapper.style.animation = "swashOut 1s ease-in 1s 1 forwards";
        this.gWrapper.style.animation = "swashIn 1s ease-in 1.7s 1 forwards";
        this.gWrapper.style.zIndex = "2";

        this.showSeconds();
      }
    });
  };

  markElement = () => {
    [...this.officeElements].forEach((i) => {
      i.addEventListener("click", () => {
        i.style.border = "2px solid black";
        if (i.classList.contains("gWrapper__element--negative")) {
          this.elementValue = parseInt(this.seconds.textContent, 10);
          this.timeCounter = this.elementValue + 5;
        }
        this.checkMarkedGreenAndStopTimer(i);
      });
    });
  };

  setCounter = (newTime) => {
    if (newTime - this.oldTime > this.speed) {
      this.oldTime = newTime;
      this.timeCounter++;
      this.seconds.textContent = `${this.timeCounter}s`;
    }
    this.rAFid = requestAnimationFrame(this.setCounter);
  };

  showSeconds = () => {
    if (this.btnSubmit.classList.contains("succes")) {
      setTimeout(() => this.setCounter(), 3000);
    }
  };

  checkMarkedGreenAndStopTimer = (element) => {
    if (element.classList.contains("gWrapper__element--positive")) {
      this.greenCounter++;
    }
    if (this.greenCounter === 3) {
      window.cancelAnimationFrame(this.rAFid);
      this.checkTimeIfWin();
    }
  };

  checkTimeIfWin = () => {
    if (this.timeCounter < 30) {
      this.gWrapper.style.animation = "boingOutDown 1s 2s ease-in forwards 1";
      this.gWrapper.style.opacity = "1";
      this.gz.style.animation = "boingInUp 1s 2.8s ease-in forwards 1";
      this.gz.style.zIndex = "3";
      this.score[0].textContent = `Twój wynik to ${this.timeCounter}s`;
    } else {
      this.gWrapper.style.animation = "boingOutDown 1s 2s ease-in forwards 1";
      this.gWrapper.style.opacity = "1";
      this.sorry.style.animation = "boingInUp 1s 2.8s ease-in forwards 1";
      this.sorry.style.zIndex = "3";
      this.score[1].textContent = `Twój wynik to ${this.timeCounter}s`;
    }
  };

  start = () => {
    this.swash();
    this.markElement();
  };
}
