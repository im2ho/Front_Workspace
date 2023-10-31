//라디오 버튼 이벤트 처리
const genderResult = document.getElementById("genderResult");

const maleRadio = document.getElementById("maleRadio");
const femaleRadio = document.getElementById("femaleRadio");
const otherRadio = document.getElementById("otherRadio");

maleRadio.addEventListener("change", updateGenderResult);
femaleRadio.addEventListener("change", updateGenderResult);
otherRadio.addEventListener("change", updateGenderResult);

function updateGenderResult(){
    if(maleRadio.checked){
        genderResult.textContent="선택된 성별 : 남성";
    } else if(femaleRadio.checked){
        genderResult.textContent="선택된 성별 : 여성";
    } else{
        genderResult.textContent="선택된 성별 : 기타";
    }
}

 //체크박스 버튼 이벤트 처리
 const pokemonResult = document.getElementById("pokemonResult");

 const fireCheckbox = document.getElementById("fireCheckbox");
 const waterCheckbox = document.getElementById("waterCheckbox");
 const grassCheckbox = document.getElementById("grassCheckbox");

 fireCheckbox.addEventListener("change", selectPokemonResult);
 waterCheckbox.addEventListener("change", selectPokemonResult);
 grassCheckbox.addEventListener("change", selectPokemonResult);

 function selectPokemonResult(){
     const selectPokemons = []; //과일을 담을 수 있는 빈 배열
     /*
     fireCheckbox.checked = checked의 속성을 사용해서
     각 체크박스의 선택 여부를 확인하고, 선택된 포켓몬 항목을 selectPokemons 배열에 추가
     */
     if(fireCheckbox.checked){
         selectPokemons.push("불꽃숭이");
     }
     if(waterCheckbox.checked){
         selectPokemons.push("팽도리");
     }
     if(grassCheckbox.checked){
         selectPokemons.push("모부기");
     }

     pokemonResult.textContent = "선택된 포켓몬 : " + selectPokemons.join(",");
 }