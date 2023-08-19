const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // もしボタンのテキストが「ダークモードに変更」になっているなら
  if(btn.textContent === 'ダークモードに変更'){
    // クリックされた時に「ライトモードに変更」に変更
    btn.textContent = 'ライトモードに変更';
  
  // そうでないなら（「ライトモードに変更」と表示されているなら）
  } else {
    // クリックされた時に「ダークモードに変更」に戻す
    btn.textContent = 'ダークモードに変更';
  }
});