
// ==============================
// 火災防災知識選擇題測驗系統
// 使用 p5.js 製作
// ==============================

// 宣告火災防災題庫
let questionBank = [
  {
    question: "發生火災時，第一時間應該怎麼做？",
    options: ["A. 搭乘電梯逃生", "B. 保持冷靜並立即通報", "C. 躲在床底下", "D. 打開門窗通風"],
    answer: 1
  },
  {
    question: "火災發生時，逃生過程中遇到濃煙應該怎麼做？",
    options: ["A. 站著快速奔跑", "B. 用嘴巴大口呼吸", "C. 壓低姿勢，往安全出口逃生", "D. 躲進電梯"],
    answer: 2
  },
  {
    question: "使用滅火器時，正確的操作方式是什麼？",
    options: ["A. 對準火焰上方噴射", "B. 對準火源根部噴射", "C. 將滅火器丟向火場", "D. 先打開電源"],
    answer: 1
  },
  {
    question: "發現油鍋起火時，下列哪一種處理方式正確？",
    options: ["A. 立即潑水", "B. 用手拿起鍋子", "C. 使用鍋蓋覆蓋並關閉爐火（安全時）", "D. 用電風扇吹熄"],
    answer: 2
  },
  {
    question: "火災發生時，逃生後應該怎麼做？",
    options: ["A. 回到屋內拿取物品", "B. 到安全地點並撥打119", "C. 留在門口觀看", "D. 自行進入火場救人"],
    answer: 1
  },
  {
    question: "使用電器時聞到燒焦味，最適合的處理方式是什麼？",
    options: ["A. 繼續使用觀察看看", "B. 立即拔除電源（安全時）並請大人或專業人員檢查", "C. 用水潑電器", "D. 用布蓋住插座"],
    answer: 1
  },
  {
    question: "逃生時發現門把很燙，應該怎麼做？",
    options: ["A. 立刻開門衝出去", "B. 先用力踹門", "C. 不要開門，改找其他安全方式求援", "D. 用水潑門後開門"],
    answer: 2
  },
  {
    question: "逃生時為什麼不應搭乘電梯？",
    options: ["A. 電梯速度太慢", "B. 電梯可能因停電或濃煙而受困", "C. 電梯只給消防員使用", "D. 電梯門太重"],
    answer: 1
  },
  {
    question: "如果身上的衣服著火，應該怎麼做？",
    options: ["A. 快速奔跑", "B. 停下、躺下並翻滾", "C. 躲進衣櫃", "D. 用手拍打火焰"],
    answer: 1
  },
  {
    question: "火災逃生時，應該如何選擇路線？",
    options: ["A. 選擇熟悉且沒有煙火的安全出口", "B. 往有濃煙的方向前進", "C. 搭乘電梯到一樓", "D. 躲進浴室等待"],
    answer: 0
  },
  {
    question: "逃生時經過房門後，適合怎麼做？",
    options: ["A. 把門敞開", "B. 關上經過的門，減緩煙和火蔓延", "C. 用椅子擋住門", "D. 回房間拿東西"],
    answer: 1
  },
  {
    question: "如果所在房間充滿濃煙，移動時應該怎麼做？",
    options: ["A. 站直身體快跑", "B. 趴低身體，往安全出口移動", "C. 躲在窗簾後面", "D. 打開電風扇吹煙"],
    answer: 1
  },
  {
    question: "室內火災時，為什麼不應打開窗戶？",
    options: ["A. 可能讓空氣流動助長火勢", "B. 窗戶會自動上鎖", "C. 會讓警報器停止", "D. 會使房間變暗"],
    answer: 0
  },
  {
    question: "在公共場所聽到火災警報，第一步應該怎麼做？",
    options: ["A. 先拍照上傳", "B. 依照指示冷靜前往安全出口", "C. 躲在桌子底下", "D. 找電梯離開"],
    answer: 1
  },
  {
    question: "火災時若無法安全離開房間，應該怎麼做？",
    options: ["A. 躲在床底下不出聲", "B. 關門阻隔煙火，靠窗或陽台求援並打119", "C. 跳窗逃生", "D. 躲進衣櫃"],
    answer: 1
  },
  {
    question: "火災逃生到戶外後，應該在哪裡集合？",
    options: ["A. 建築物入口旁", "B. 事先約定的安全集合地點", "C. 停車場車道上", "D. 回到屋內等家人"],
    answer: 1
  },
  {
    question: "發現瓦斯外洩時，哪一種做法正確？",
    options: ["A. 開關電燈確認狀況", "B. 點火檢查漏氣位置", "C. 不操作電器，安全時關閉瓦斯並開門窗通風、離開後求助", "D. 使用電風扇吹散瓦斯"],
    answer: 2
  },
  {
    question: "下列哪一種物品不適合用來撲滅通電中的電器火災？",
    options: ["A. 水", "B. 適用的乾粉滅火器", "C. 二氧化碳滅火器", "D. 切斷電源後使用合適的滅火設備"],
    answer: 0
  },
  {
    question: "家中安裝住宅用火災警報器的主要作用是什麼？",
    options: ["A. 發現火災時及早發出警報", "B. 自動撲滅所有火災", "C. 代替逃生計畫", "D. 讓電器不會短路"],
    answer: 0
  },
  {
    question: "使用滅火器時，應該把噴嘴對準哪裡？",
    options: ["A. 火焰頂端", "B. 火源根部", "C. 天花板", "D. 窗戶外面"],
    answer: 1
  },
  {
    question: "平時規劃家庭火災逃生時，哪一項最重要？",
    options: ["A. 只記住一條逃生路線", "B. 熟悉至少兩個逃生方向並練習集合方式", "C. 把出口堆滿物品", "D. 只在火災發生時再討論"],
    answer: 1
  },
  {
    question: "火災中看到有人受困，自己應該怎麼做？",
    options: ["A. 立刻衝進火場救人", "B. 通知消防人員受困者位置，不冒險進入火場", "C. 搭電梯回去找人", "D. 等火熄滅後再通報"],
    answer: 1
  },
  {
    question: "火災時為什麼要避免在逃生路線上停留或折返？",
    options: ["A. 可能延誤逃生並增加接觸煙火的風險", "B. 會讓警報器更大聲", "C. 會讓出口消失", "D. 會使消防車無法停車"],
    answer: 0
  }
];

// 每輪測驗抽出的題數
const QUESTIONS_PER_QUIZ = 5;

// 目前這一輪的測驗題目
let questions = [];

// 宣告目前題目索引
let currentQuestion = 0;

// 宣告答對題數
let score = 0;

// 宣告是否已經作答
let answered = false;

// 宣告使用者選擇的答案
let selectedAnswer = -1;

// 宣告是否完成所有題目
let gameFinished = false;

// 宣告選項按鈕的座標與尺寸
let optionX, optionY, optionW, optionH;

// 宣告下一題按鈕的座標與尺寸
let nextX, nextY, nextW, nextH;

// 宣告動畫時間變數
let animationTime = 0;

// 記錄已自動朗讀的題目，避免每一幀重複播放
let lastSpokenQuestion = -1;

// 宣告畫布邊界
let canvas;

// ==============================
// p5.js 初始化設定
// ==============================

function setup() {
  // 建立符合瀏覽器視窗大小的畫布
  canvas = createCanvas(windowWidth, windowHeight);

  // 將畫布設定為全螢幕顯示
  canvas.style("display", "block");

  // 設定文字置中對齊
  textAlign(CENTER, CENTER);

  // 使用瀏覽器穩定支援的字型並由系統回退顯示中文字
  textFont("Arial");

  // 設定文字圓角效果
  rectMode(CORNER);

  // 首次開始時隨機抽取題目
  restartQuiz();
}

// ==============================
// 每一幀持續繪製畫面
// ==============================

function draw() {
  // 設定背景顏色
  background("#f1faee");

  // 如果測驗已經結束，顯示結算畫面
  if (gameFinished) {
    drawResult();
    return;
  }

  // 顯示測驗標題與進度
  drawHeader();

  // 顯示目前題目
  drawQuestion();

  // 顯示四個選項
  drawOptions();

  // 如果已經作答，顯示下一題按鈕
  if (answered) {
    drawNextButton();
  }
}

// ==============================
// 繪製測驗標題與進度
// ==============================

function drawHeader() {
  // 設定標題文字大小
  fill("#1d3557");
  textSize(min(width * 0.045, 38));

  // 顯示測驗系統名稱
  text("🔥 火災防災知識測驗", width / 2, height * 0.09);

  // 設定進度文字大小
  textSize(18);

  // 計算目前題數
  text("第 " + (currentQuestion + 1) + " 題 / 共 " + questions.length + " 題", width / 2, height * 0.16);

  // 計算答題進度條寬度
  let barW = min(width * 0.65, 600);

  // 設定進度條背景
  fill("#d8e2dc");
  noStroke();
  rect((width - barW) / 2, height * 0.195, barW, 12, 10);

  // 設定進度條前景
  fill("#457b9d");
  rect((width - barW) / 2, height * 0.195, barW * ((currentQuestion + 1) / questions.length), 12, 10);
}

// ==============================
// 繪製目前測驗題目
// ==============================

function drawQuestion() {
  // 取得目前題目文字
  let q = questions[currentQuestion].question;

  // 題目切換時自動朗讀題目與選項
  if (lastSpokenQuestion !== currentQuestion) {
    readCurrentQuestion();
  }

  // 設定題目文字顏色
  fill("#1d3557");

  // 設定題目文字大小
  textSize(constrain(width * 0.032, 18, 28));

  // 限制題目文字框寬度並允許多行顯示
  let questionW = min(width * 0.88, 900);

  // 依中文字元寬度換行後顯示題目
  drawWrappedText(q, width / 2, height * 0.30, questionW, textSize() * 1.25);

  // 顯示重聽題目的按鈕
  fill("#1d3557");
  noStroke();
  rect(width / 2 - 75, height * 0.35 - 18, 150, 36, 12);
  fill("#ffffff");
  textSize(16);
  text("🔊 重聽題目", width / 2, height * 0.35);
}

// ==============================
// 自動朗讀目前題目與選項
// ==============================

function readCurrentQuestion() {
  lastSpokenQuestion = currentQuestion;

  // 確認瀏覽器支援語音合成
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    return;
  }

  // 切換題目時停止上一題朗讀
  window.speechSynthesis.cancel();

  let current = questions[currentQuestion];
  let utterance = new SpeechSynthesisUtterance(
    current.question + " " + current.options.join("。")
  );
  utterance.lang = "zh-TW";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

// ==============================
// 繪製四個選擇題選項
// ==============================

function drawOptions() {
  // 計算選項寬度
  optionW = min(width * 0.78, 650);

  // 計算選項高度
  optionH = min(height * 0.085, 65);

  // 計算選項起始位置
  optionX = (width - optionW) / 2;

  // 計算選項垂直間距
  let gap = min(height * 0.025, 20);

  // 計算第一個選項的垂直位置
  optionY = height * 0.40;

  // 依序繪製四個選項
  for (let i = 0; i < 4; i++) {

    // 計算目前選項的垂直位置
    let y = optionY + i * (optionH + gap);

    // 設定選項預設水平偏移
    let offsetX = 0;

    // 設定選項預設垂直偏移
    let offsetY = 0;

    // 設定選項預設背景顏色
    let bgColor = "#457b9d";

    // 如果已經作答，開始判斷答案正確與否
    if (answered) {

      // 如果目前選項是正確答案
      if (i === questions[currentQuestion].answer) {

        // 設定正確答案背景顏色
        bgColor = "#a7c957";

        // 設定正確答案上下跳動動畫
        offsetY = sin(animationTime * 0.15) * 8;

      // 如果目前選項是使用者選擇的錯誤答案
      } else if (i === selectedAnswer) {

        // 設定錯誤答案背景顏色
        bgColor = "#9e2a2b";

        // 設定錯誤答案左右移動動畫
        offsetX = sin(animationTime * 0.8) * 12;
      }

      // 讓動畫時間持續增加
      animationTime++;
    }

    // 設定選項背景顏色
    fill(bgColor);

    // 設定選項外框顏色
    stroke("#ffffff");

    // 設定選項外框粗細
    strokeWeight(2);

    // 繪製選項圓角矩形
    rect(optionX + offsetX, y + offsetY, optionW, optionH, 14);

    // 設定選項文字顏色
    fill("#ffffff");

    // 設定選項文字大小
    textSize(constrain(width * 0.025, 16, 21));

    // 設定選項文字置中對齊
    textAlign(CENTER, CENTER);

    // 依按鈕可用寬度換行顯示選項文字
    drawWrappedText(
      questions[currentQuestion].options[i],
      optionX + optionW / 2 + offsetX,
      y + optionH / 2 + offsetY,
      optionW - 32,
      textSize() * 1.2
    );
  }
}

// ==============================
// 依指定寬度繪製置中的多行文字
// ==============================

function drawWrappedText(content, centerX, centerY, maxWidth, lineHeight) {

  // 建立文字行陣列
  let lines = [""];

  // 逐字計算文字寬度並在超出範圍時換行
  for (let character of Array.from(content)) {

    // 取得目前正在填寫的文字行索引
    let lineIndex = lines.length - 1;

    // 超過可用寬度時新增一行
    if (lines[lineIndex].length > 0 && textWidth(lines[lineIndex] + character) > maxWidth) {
      lines.push(character);

    // 未超過可用寬度時將字元加入目前行
    } else {
      lines[lineIndex] += character;
    }
  }

  // 計算第一行文字的垂直位置
  let firstLineY = centerY - ((lines.length - 1) * lineHeight) / 2;

  // 逐行繪製置中的文字
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], centerX, firstLineY + i * lineHeight);
  }
}

// ==============================
// 繪製下一題按鈕
// ==============================

function drawNextButton() {
  // 設定下一題按鈕寬度
  nextW = 180;

  // 設定下一題按鈕高度
  nextH = 55;

  // 計算下一題按鈕水平位置
  nextX = (width - nextW) / 2;

  // 計算下一題按鈕垂直位置
  nextY = min(height * 0.87, optionY + 4 * (optionH + min(height * 0.025, 20)) + 15);

  // 設定下一題按鈕背景顏色
  fill("#1d3557");

  // 移除按鈕外框
  noStroke();

  // 繪製下一題按鈕
  rect(nextX, nextY, nextW, nextH, 15);

  // 設定按鈕文字顏色
  fill("#ffffff");

  // 設定按鈕文字大小
  textSize(21);

  // 顯示下一題按鈕文字
  if (currentQuestion === questions.length - 1) {
    text("查看測驗結果", nextX + nextW / 2, nextY + nextH / 2);
  } else {
    text("下一題 ➜", nextX + nextW / 2, nextY + nextH / 2);
  }
}

// ==============================
// 滑鼠點擊事件
// ==============================

function mousePressed() {

  // 點擊重聽按鈕時重新朗讀目前題目
  if (
    !gameFinished &&
    mouseX >= width / 2 - 75 &&
    mouseX <= width / 2 + 75 &&
    mouseY >= height * 0.35 - 18 &&
    mouseY <= height * 0.35 + 18
  ) {
    readCurrentQuestion();
    return;
  }

  // 如果測驗已經結束，不執行答題操作
  if (gameFinished) {

    // 檢查是否點擊重新測驗按鈕
    if (
      mouseX > width / 2 - 100 &&
      mouseX < width / 2 + 100 &&
      mouseY > height * 0.68 &&
      mouseY < height * 0.68 + 55
    ) {

      // 重新開始測驗
      restartQuiz();
    }

    // 結束目前滑鼠事件
    return;
  }

  // 如果尚未作答，檢查是否點擊選項
  if (!answered) {

    // 計算選項之間的間距
    let gap = min(height * 0.025, 20);

    // 逐一檢查四個選項
    for (let i = 0; i < 4; i++) {

      // 計算目前選項的垂直位置
      let y = optionY + i * (optionH + gap);

      // 判斷滑鼠是否點擊目前選項
      if (
        mouseX >= optionX &&
        mouseX <= optionX + optionW &&
        mouseY >= y &&
        mouseY <= y + optionH
      ) {

        // 儲存使用者選擇的答案
        selectedAnswer = i;

        // 設定已經完成作答
        answered = true;

        // 將動畫時間歸零
        animationTime = 0;

        // 判斷答案是否正確
        if (selectedAnswer === questions[currentQuestion].answer) {

          // 答案正確時增加答對題數
          score++;
        }

        // 結束選項檢查
        return;
      }
    }
  }

  // 如果已經作答，檢查是否點擊下一題按鈕
  if (answered) {

    // 判斷是否點擊下一題按鈕
    if (
      mouseX >= nextX &&
      mouseX <= nextX + nextW &&
      mouseY >= nextY &&
      mouseY <= nextY + nextH
    ) {

      // 如果目前是最後一題
      if (currentQuestion === questions.length - 1) {

        // 設定測驗結束
        gameFinished = true;

      } else {

        // 進入下一題
        currentQuestion++;

        // 重設作答狀態
        answered = false;

        // 清除上一次選擇的答案
        selectedAnswer = -1;

        // 將動畫時間歸零
        animationTime = 0;
      }
    }
  }
}

// ==============================
// 繪製測驗結果畫面
// ==============================

function drawResult() {

  // 設定結果標題顏色
  fill("#1d3557");

  // 設定結果標題文字大小
  textSize(min(width * 0.05, 42));

  // 顯示測驗完成標題
  text("🎉 測驗完成！", width / 2, height * 0.25);

  // 設定成績文字大小
  textSize(min(width * 0.07, 55));

  // 根據答對題數設定成績文字顏色
  fill("#457b9d");

  // 顯示答對題數
  text(score + " / " + questions.length + " 題", width / 2, height * 0.43);

  // 設定答對比例文字大小
  textSize(25);

  // 顯示答對百分比
  text("答對率：" + Math.round((score / questions.length) * 100) + "%", width / 2, height * 0.53);

  // 設定鼓勵文字顏色
  fill("#1d3557");

  // 設定鼓勵文字大小
  textSize(20);

  // 根據成績顯示不同鼓勵訊息
  let message = score === questions.length ? "太棒了！你是防災小高手！" :
                score >= Math.ceil(questions.length * 0.6) ? "表現不錯！繼續加油！" :
                "再接再厲，多學習防災知識！";

  // 顯示鼓勵文字
  text(message, width / 2, height * 0.61);

  // 設定重新測驗按鈕背景
  fill("#1d3557");

  // 繪製重新測驗按鈕
  rect(width / 2 - 100, height * 0.68, 200, 55, 15);

  // 設定重新測驗按鈕文字顏色
  fill("#ffffff");

  // 設定重新測驗按鈕文字大小
  textSize(21);

  // 顯示重新測驗按鈕文字
  text("重新測驗", width / 2, height * 0.68 + 27);
}

// ==============================
// 重新開始測驗
// ==============================

function restartQuiz() {

  // 停止前一輪朗讀，並讓新題目重新自動朗讀
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  lastSpokenQuestion = -1;

  // 隨機打亂題庫後抽出本輪題目
  let shuffledQuestions = questionBank.slice();
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[randomIndex]] =
      [shuffledQuestions[randomIndex], shuffledQuestions[i]];
  }
  questions = shuffledQuestions.slice(0, QUESTIONS_PER_QUIZ);

  // 將目前題目重設為第一題
  currentQuestion = 0;

  // 將答對題數歸零
  score = 0;

  // 重設作答狀態
  answered = false;

  // 清除使用者選擇的答案
  selectedAnswer = -1;

  // 將測驗結束狀態取消
  gameFinished = false;

  // 將動畫時間歸零
  animationTime = 0;
}

// ==============================
// 視窗大小改變時重新調整畫布
// ==============================

function windowResized() {

  // 依照新的視窗大小調整畫布
  resizeCanvas(windowWidth, windowHeight);
}
