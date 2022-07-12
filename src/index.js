import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("addText").value;

  // テキストボックス初期化
  document.getElementById("addText").value = "";

  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "listRow";

  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)生成
  const button1 = document.createElement("button");
  button1.innerText = "完了";
  button1.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);

    // 指定した要素の親要素を取得
    const completeTaret = div.parentNode;
    const pp = p.parentNode;
    //
    const text = pp.firstElementChild.innerText;

    pp.textContent = null;

    const p1 = document.createElement("p");
    p1.innerText = text;

    const button3 = document.createElement("button");
    button3.innerText = "戻す";
    button3.addEventListener("click", () => {
      const deleteTaret = button3.parentNode;
      document.getElementById("complete-list").removeChild(deleteTaret);
    });

    div.appendChild(p1);
    div.appendChild(button3);

    console.log(completeTaret);
    document.getElementById("complete-list").appendChild(completeTaret);
  });

  // button(削除)生成
  const button2 = document.createElement("button");
  button2.innerText = "削除";
  // 削除ボタンが押された親タグ（li）を未完了リストから削除
  button2.addEventListener("click", () => {
    // 指定した要素の親要素を取得
    const deleteTaret = div.parentNode;
    deleteFromIncompleteList(deleteTaret);
  });

  // liの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(button1);
  div.appendChild(button2);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // 未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    // 指定したタグ内の要素を削除する
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
