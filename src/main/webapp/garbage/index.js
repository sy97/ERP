var baseCamp = 0;

// 추가btn 이벤트
const productAdd = () => {
    var trCnt = document.getElementsByTagName('tr').length;
    var inner = "";
    console.log(trCnt);
    if (baseCamp != 0) {
        trCnt = baseCamp;
    }
    if (trCnt == 11) {
        $('#no1').hide();
    }
    if (trCnt <= 11) {
        inner += '<tr id="no' + trCnt + '">';
        inner += '    <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>';
        inner += '    <th scope="row">' + trCnt + '</th>';
        inner += '    <th scope="row">' + trCnt + '</th>';
        inner += '    <td><select id="category" class="category"><option value="bakery">빵</option><option value="cake">케이크</option><option value="cookie">제과</option></select></td>';
        inner += '    <td><input type="text" class="productName" id="productName"></td>';
        inner += '    <td><select id="USE_YN" class="mng_select"><option value="Y">판매중</option><option value="N">판매중단</option></select></td>';
        inner += '    <td><input type="number" class="productPrice" id="productPrice"></td>';
        inner += '    <td><input type="number" class="productQuantity" id="productQuantity"></td>';
        inner += '    <td><button type="button" class="completeBtn" style="color: #ff2020;" onClick="onClickComplete()">완료</button><span>|</span><button type="button" class="cancleBtn" onClick="onClickCancle(' + trCnt + ')">취소</button></td>';
        inner += '</tr>';
    }

    $('#tbHead').after(inner); // 헤더 아래 추가
}

/*  @description 사용자 정보 입력 row remove */
function onClickCancle(trCnt){
  var row = document.querySelectorAll('.updateRow');
  $("#no"+trCnt).remove();
  
  if(trCnt == 11){
    $('#no1').show();
  }
  if(row.length > 0){
    $('.updateRow').show();
    $('tr').removeClass('updateRow');
  }
}

/*
* @description 사용자 정보 수정
*/
function onClickUpdate(){ 
  
  var targetBtn = event.target;
  var parentTr = targetBtn.parentNode.parentNode;
  var tdNode = parentTr.childNodes;
  var tdArr = new Array();

  for(var i = 0; i < tdNode.length; i++){
    tdArr.push(tdNode[i].textContent);    
  }
  
  var row = document.querySelectorAll('.updateRow')
  if(row.length == 0){
    parentTr.className = "updateRow";
    $('.updateRow').hide();

    baseCamp = tdArr[1];
    userAdd();
    
  }else{
    alert("수정 중인 사용자 정보가 있습니다.")
  }
}