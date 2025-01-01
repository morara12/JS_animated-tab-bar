// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

"use strict"; 

const body = document.body;
// 1⃣bodyの定数＝body要素
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
// 2⃣背景の定数＝色の指定
const menu = body.querySelector(".menu");
// 3⃣メニューの定数＝メニュー指定されたセレクタ（あるクラスに一致する最初の要素を探索）
const menuItems = menu.querySelectorAll(".menu__item");
// 4⃣メニューアイテムの定数＝指定したセレクタに一致するすべてのHTML要素メニューの中の(menu__item")を取得するメソッド
const menuBorder = menu.querySelector(".menu__border");
// 5⃣メニューボーダーの定数＝メニューの中のメニューボーダーを取得（クリックしたときに出る山）
let activeItem = menu.querySelector(".active");
// 6⃣activeItemの引数＝メニューの中のアクティブクラス
function clickItem(item, index) {
// 7⃣クリックアイテム時の作動
    menu.style.removeProperty("--timeOut");
    // アイテム、インデックスをクリックしたとき.タイムアウトを追加
    if (activeItem == item) return;
    // アクティブのタグの箇所のとき、何もしない
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    // removeは削除するactivの箇所を消せ
    
    item.classList.add("active");
    // css.class.Listはそのタグを追加せよ
    body.style.backgroundColor = bgColorsBody[index];
    // 背景の色は、 bgColorsBodyから選択
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {
// 　　8⃣下記まとめてるやつ
//     
    const offsetActiveItem = element.getBoundingClientRect();
// 　　9⃣offsetActiveItem.left
//     表示されている画面.左側（要素左）
    element.getBoundingClientRect()
    // getBoundingClientRect⇒要素のサイズとビューポート
    // （コンピューターグラフィックの中で現在表示されている領域）に対する相対位置を取得する
    
    const left = Math.floor
//     ⑩Math.floor:小数点以下切り捨て
//     小数点以下を四捨五入する(round)
// 　　小数点以下を切り上げる(ceil)
// 　　小数点以下を切り捨てる(floor)

    (offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
// 　　⇒9⃣offsetActiveItem.left
//     表示されている画面.左側

//     menu.offsetLeft
//     ⇒3⃣黒い長方形（メニュー）.左側の空白

// 　　menuBorder.offsetWidth
// 　　⇒5⃣クリックしたときに表示される上半分の〇.横幅

// 　offsetActiveItem.width
// 　⇒9⃣画面に表示されている.横幅

    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
//     ⇒5⃣(クリックしたときに表示される)上半分の〇をtransformを代入＝translate3d() は CSS の関数で、要素を三次元空間内で再配置(xの座標＝左の定数、Yの座標、Z(奥行の座標))

//     ``についてテンプレートリテラル
//     ①改行をそのまま書ける
// 　　②文字列の中に式を埋め込む　${式}
// 　　式の部分に変数を記述した場合、変数に格納されている値が文字列に埋め込まれます。式の部分に演算などが記述された場合は式が評価されその結果が埋め込まれます。
// 　　（例）
// 　　let name = 'オレンジ';
// 　　let cost = 100;
// 　　let msg = `今日の${name}の値段は${Math.trunc(cost*1.1)}円です。`;
// 　　console.log(msg);
// 　　>> 今日のオレンジの値段は110円です。


}

offsetMenuBorder(activeItem, menuBorder);
// ⇒8⃣offsetMenuBorder右を計算する（⇒6⃣classメニ.あ.あの中のclassアクティブ（クリックしたときに出る色の〇）,=5⃣classメニューの中のclassメニューボーダー（クリックしたときに出る山））
menuItems.forEach((item, index) => {
// クリックしたときに、動くように設定
// ⇒4⃣中にあるアイテム.繰り返す⇒
    item.addEventListener("click", () => clickItem(item, index));
    // アイテムの要素.画面にすべて表示されているもの（クリックを押したとき、クリックアイテムの関数を作動
})

window.addEventListener("resize", () => {
// ウィンドウ.クリックやキーボードで何か実行された時＝”ウィンドウサイズの変更を検知して表示する”
    offsetMenuBorder(activeItem, menuBorder);
    // ⇒8⃣メニューの黒い部分の割り出し時（⇒6⃣クリックした際の〇のメニュー画像,⇒5⃣クリックしたときに出るメニューの山）を再計算
    menu.style.setProperty("--timeOut", "none");
    // メニュー.書き換え（タイムアウトをnoneに変更)
        // これにより、アイテムから別のアイテムをクリックしたとき半分の〇が消える
});