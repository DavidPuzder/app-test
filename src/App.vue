<template>
  <div id="app">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="@/assets/logo.png" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link
            to="/"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <a
              :href="href"
              @click="navigate"
              class="navbar-item"
              :class="[
                isActive && 'navbar-item',
                isExactActive && 'navbar-item is-active'
              ]"
              >Domov</a
            >
          </router-link>

          <router-link
            to="/bookshelf"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <a
              :href="href"
              @click="navigate"
              class="navbar-item"
              :class="[
                isActive && 'navbar-item',
                isExactActive && 'navbar-item is-active'
              ]"
              >Knižnica</a
            >
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bulma/bulma";

@import "~material-icons-font/sass/variables"; // mandatory and at first place
@import "~material-icons-font/sass/mixins"; // mandatory and after variables
// there you can change default variables if they are not good enough for you
$MaterialIcons_FontPath: "~material-icons-font/fonts"; // for CLI project we change font path to point into package fonts folder
@import "~material-icons-font/sass/main"; // mandatory main material font definition
@import "~material-icons-font/sass/Regular"; // mandatory @font-face definition

// @import '~material-icons-font/sass/sizing'; // optional rules for icons sizing recommended by font designers
// @import '~material-icons-font/sass/coloring'; // optional rules for icons color rules with light and dark background and inactive state

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
