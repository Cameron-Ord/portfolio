<script setup lang="js">
import { ref } from 'vue'
const current_section = ref('intro_section')

const is_string = (text) => {
  return typeof text === 'string' || text instanceof String
}

const set_section = (text) => {
  if (is_string(text)) {
    current_section.value = text
  }
}

const click_handler = (target) => {
  if (target instanceof HTMLElement) {
    const text = target.innerText

    if (is_string(text)) {
      switch (text) {
        case 'About': {
          set_section('about_section')
          break
        }

        case 'Projects': {
          set_section('projects_section')
          break
        }

        case 'Contact': {
          set_section('contact_section')
          break
        }
      }
    }
  }
}
</script>

<template>
  <main class="doc_main">
    <section class="intro_section" v-if="current_section == 'intro_section'">
      <article class="intro_content">
        <div class="first">
          <h2 class="h2_text">Hi there!</h2>
          <h2 class="h2_text_var">My name is <span class="text_highlight">Cameron</span></h2>
          <p class="p_custom">
            I'm a <span class="text_highlight_alt">Developer</span> based in Edmonton, Alberta.
          </p>
        </div>
        <div class="links">
          <h3 class="link_tag">LinkedIn</h3>
          <h3 class="link_tag">GitHub</h3>
        </div>
      </article>
      <article class="nav_article">
        <h2 class="nav_tag" @click="click_handler($event.target)">About</h2>
        <h2 class="nav_tag" @click="click_handler($event.target)">Projects</h2>
        <h2 class="nav_tag" @click="click_handler($event.target)">Contact</h2>
      </article>
    </section>
    <section class="about_section" v-else-if="current_section == 'about_section'">
      <article class="nav_article">
        <h2 class="nav_tag" @click="click_handler($event.target)">Projects</h2>
        <h2 class="nav_tag" @click="click_handler($event.target)">Contact</h2>
      </article>
    </section>
    <section class="projects_section" v-else-if="current_section == 'projects_section'">
      <article class="nav_article">
        <h2 class="nav_tag" @click="click_handler($event.target)">About</h2>
        <h2 class="nav_tag" @click="click_handler($event.target)">Contact</h2>
      </article>
    </section>
    <section class="contact_section" v-else-if="current_section == 'contact_section'">
      <article class="nav_article">
        <h2 class="nav_tag" @click="click_handler($event.target)">About</h2>
        <h2 class="nav_tag" @click="click_handler($event.target)">Projects</h2>
      </article>
    </section>
  </main>
</template>

<style scoped>
.doc_main {
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
}

.intro_section {
  display: grid;
  grid-template-rows: auto;
  row-gap: 25px;
}

.intro_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  row-gap: 18px;
}

.intro_content > .first {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
}

.intro_content > .links {
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 15px;
  justify-content: flex-start;
  align-items: start;
}

.nav_article {
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 15px;
  justify-content: flex-start;
  align-items: start;
}
</style>
