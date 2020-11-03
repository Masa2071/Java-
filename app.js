// var orange = 100;
// var apple = 200;

// if (orange < apple){
//   alert('みかんの値段の方がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごは同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// alert(2 + 2);
// alert(2 - 1);
// alert(3 * 2);
// alert(6 / 2);

// メイン部分
// var alertString;
// alertString = addString("WebCamp");

// // 作成した関数を呼び出す
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   var addStr = "Hello " + strA;
//   return addStr;
// }
// var promptStr = prompt('何か好きな文字を入力してください。');
 
// alert(promptStr);
// var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
// alert ('あなたの選んだ手は' + user_hand + 'です。');

// function getJShand(){
//   var js_hand_num = Math.floor( Math.random() * 3 );

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   } else if(js_hand_num == 1){
//     js_hand = "チョキ";
//   } else if(js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return hand__name;
// }

// function winLose(user,js){
//   var winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     }else if(js == "チョキ");{
//       winLoseStr = "勝ち";
//     }else if(js == "パー");{
//       winLoseStr = "負け"
//     }
//   }else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     }else if(js == "チョキ");{
//       winLoseStr = "あいこ";
//     }else if(js == "パー");
//     winLoseStr = "勝ち"
//   }else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     }else if(js == "チョキ");{
//       winLoseStr = "負け";
//     }else if(js == "パー");{
//       winLoseStr = "あいこ";
//     }
//   }
//   return winLoseStr;
// }


// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// グー、チョキ、パー以外の時
while 
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');


// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}