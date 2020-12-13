<template>
  <div class="w3-container">
    <h2 class="w3-center">행번 로그인</h2>
      <div class="w3-section">
        <label>행번</label>
        <input
          class="w3-input w3-border w3-margin-bottom-large"
          type="text"
          placeholder="행번을 입력해주세요"
          name="usrname"
          required
        />
        <label>비밀번호</label>
        <input
          class="w3-input w3-border"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="psw"
          required
        />

        <input
          class="w3-check w3-margin-top"
          type="checkbox"
          checked="checked"
        />
        <label>행번 저장</label>
        <button
          class="w3-button w3-block w3-teal-blue w3-section w3-padding-large"
          type="submit"
        >
          로그인
        </button>
      </div>
  </div>
</template>