// ハンバーガーボタンとドロワー
const buttonDrawer = document.getElementById("js-button-drawer");
const drawer = document.getElementById("js-drawer");

buttonDrawer.addEventListener("click", function () {
  this.classList.toggle("is-checked");
  drawer.classList.toggle("is-open"); // ドロワーの開閉クラス
  document.body.classList.toggle("is-fixed");
});

// ドロワー内リンクをクリックしたらドロワーを閉じる
document
  .querySelectorAll('#js-drawer a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function () {
      buttonDrawer.classList.remove("is-checked");
      drawer.classList.remove("is-open");
      document.body.classList.remove("is-fixed");
    });
  });


// contact form
document
  .getElementById("js-form-submit")
  .addEventListener("click", function (event) {
    event.preventDefault(); // フォームのデフォルト送信を防止

    // 必須フィールドのチェック
    const nameField = document.getElementById("your-name");
    const telField = document.getElementById("your-tel");
    const emailField = document.getElementById("your-email");
    const messageField = document.getElementById("your-message");
    const radioButtons = document.querySelectorAll('input[name="your-name"]');
    let radioChecked = false;
    let isValid = true;

    function validateField(field) {
      const label = document.querySelector(`label[for="${field.id}"]`); // フィールドに対応するラベルを取得
      if (!field.value) {
        field.classList.add("error");
        if (label) label.classList.add("error"); // ラベルにも .error を適用
        isValid = false;
      } else {
        field.classList.remove("error");
        if (label) label.classList.remove("error"); // ラベルの .error を削除
      }
    }

    validateField(nameField);
    validateField(telField);
    validateField(emailField);
    validateField(messageField);

    if (!isValid) {
      alert("入力内容を確認してください。");
      return;
    }

    // 送信成功のアラート
    alert("正常に送信されました。");

    // フォームのリセット
    document.querySelector(".contact__form").reset();

    // エラークラスの削除
    document
      .querySelectorAll(".error")
      .forEach((el) => el.classList.remove("error"));
  });
