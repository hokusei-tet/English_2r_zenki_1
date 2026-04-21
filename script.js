// 1. 各レッスンのデータをここにまとめておく（ブロックのようなもの）
const lessonData = {
  "1": { title: "Lesson 1: 挨拶", body: "Hello! の使い方を学びます。" },
  "2": { title: "Lesson 2: 自己紹介", body: "My name is... の使い方を学びます。" },
  "3": { title: "Lesson 3: 買い物", body: "How much is this? を学びます。" }
};

// 2. ボタンが押された時の処理を一つにまとめる
const buttons = document.querySelectorAll('.lesson-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const lessonNumber = button.getAttribute('data-lesson'); // 何番が押されたか取得
    const data = lessonData[lessonNumber]; // データを取り出す

    // 画面の内容を書き換える
    document.getElementById('lesson-title').innerText = data.title;
    document.getElementById('lesson-body').innerText = data.body;

    // 画面を切り替える
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('content-screen').style.display = 'block';
  });
});

// 戻るボタンの処理
document.getElementById('back-btn').addEventListener('click', () => {
  document.getElementById('menu-screen').style.display = 'block';
  document.getElementById('content-screen').style.display = 'none';
});
