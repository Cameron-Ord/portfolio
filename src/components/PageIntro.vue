<script setup lang="ts"></script>

<template>
  <div class="intro_divider">
    <div class="name_plate">
      <h1>Hi there! I'm <span class="text_highlight">Cameron</span>.</h1>
      <h3>A <span class="text_highlight">developer</span> based in Edmonton, AB.</h3>
    </div>

    <div class="text_content">
      <p>
        Greetings again! My name's Cameron, and I'm a Frontend and Backend programmer from Halifax,
        NS. I attended InnoTech college's full stack development course, where I learned and studied
        Frontend and Backend development using <span class="text_highlight">MySQL</span>,
        <span class="text_highlight">JavaScript</span>, and
        <span class="text_highlight">Python</span> as the programming languages. Alongside this I
        learned <span class="text_hl_purple">MariaDB</span> and
        <span class="text_hl_purple">Apache</span> for Databases and webservers.
      </p>

      <p>
        With that out of the way - Welcome to my portfolio website! If you wish to learn more about
        me, take a look around. To contact me, check out the contact section! Thanks.
      </p>
    </div>
  </div>
</template>

<style scoped>
.intro_divider {
  display: grid;
  text-align: start;
  align-items: center;
  justify-self: center;
  background-color: var(--moonstone);
  width: 90%;
  row-gap: 25px;
}

.name_plate {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  column-gap: 10px;
  align-items: start;
  width: 90%;
}

.text_content {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  column-gap: 10px;
  align-items: start;
}
</style>
