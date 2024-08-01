const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "hallo, perkenalkan nama saya BotSenn, siapa nama kamu?",
    `Hallo ${data?.nama}, berapa usia kamu?`,
    `owhh ${data?.usia}, hobi kamu apa?`,
    `wowww ${data?.hobi} berarti hobi kita sama dong :>, btw punya pacar ga?🤔`,
    `owhh ${data?.pacar}, yaudah kalau begitu udahan dulu ya...`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [500]);
}

function finishing() {
  pertanyaan.innerHTML = `Thank u  ya udah mau bantu test bot😉`;
}

function botEnd() {
  console.log("Bot End....");
}
